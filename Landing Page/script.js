// --- REDIRECT OTOMATIS SUDAH DIHAPUS AGAR BISA DIAKSES LANGSUNG ---

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const customerLogout = document.querySelector("#customer-logout");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

customerLogout?.addEventListener("click", (e) => {
  // Hanya jalankan logout jika user memang sedang login (teksnya Logout)
  if (customerLogout.textContent === "Logout") {
    e.preventDefault();
    localStorage.removeItem("mamamatchaCustomer");
    window.location.reload(); // Refresh halaman agar kembali ke status awal (Belum Login)
  }
});

const products = [
  {
    name: "Original Matcha Latte",
    price: 18000,
    stock: 24,
  },
  {
    name: "Matcha Brown Sugar",
    price: 20000,
    stock: 18,
  },
  {
    name: "Matcha Cheese Cream",
    price: 23000,
    stock: 12,
  },
  {
    name: "Matcha Choco",
    price: 21000,
    stock: 16,
  },
];

const productSelect = document.querySelector("#product-select");
const orderForm = document.querySelector("#order-form");
const checkoutForm = document.querySelector("#checkout-form");
const cartItemsEl = document.querySelector("#cart-items");
const cartCountEl = document.querySelector("#cart-count");
const cartTotalEl = document.querySelector("#cart-total");
const trackingPanel = document.querySelector("#tracking-panel");
const orderNumberEl = document.querySelector("#order-number");
const orderNoteEl = document.querySelector("#order-note");
const orderButtons = document.querySelectorAll(".order-btn");
const accountStatus = document.querySelector("#account-status strong");

const cart = [];
let loggedInUser = "";

// MEMBACA DATA LOGIN PELANGGAN SECARA AMAN
try {
  const customerData = localStorage.getItem("mamamatchaCustomer");
  if (customerData) {
    const customer = JSON.parse(customerData);
    loggedInUser = customer.name || customer.email || "";
    
    // Jika user sudah login, set tombol navbar menjadi Logout
    if (customerLogout) {
      customerLogout.textContent = "Logout";
      customerLogout.setAttribute("href", "#");
    }
  } else {
    // Jika belum login, pastikan tombol navbar bertuliskan Login dan mengarah ke login.html
    if (customerLogout) {
      customerLogout.textContent = "Login";
      customerLogout.setAttribute("href", "login.html");
    }
  }

  if (accountStatus) {
    accountStatus.textContent = loggedInUser ? `Login sebagai ${loggedInUser}` : "Belum login";
  }
} catch {
  loggedInUser = "";
}

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const renderProductOptions = () => {
  if (!productSelect) return;

  productSelect.innerHTML = products
    .map((product) => `<option value="${product.name}">${product.name} - ${formatRupiah(product.price)} (${product.stock} stok)</option>`)
    .join("");
};

const calculateCartTotal = () => cart.reduce((total, item) => total + item.total, 0);

const renderCart = () => {
  if (!cartItemsEl || !cartCountEl || !cartTotalEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty-cart">Belum ada produk. Pilih menu Mamamatcha dulu.</p>';
  } else {
    cartItemsEl.innerHTML = cart
      .map(
        (item, index) => `
          <article class="cart-item">
            <div>
              <h4>${item.quantity}x ${item.product}</h4>
              <p>${item.size}, ${item.sugar}, ${item.ice}</p>
              <p>${item.toppings.length ? item.toppings.join(", ") : "Tanpa topping"}</p>
            </div>
            <strong>${formatRupiah(item.total)}</strong>
            <button class="cart-remove" type="button" data-index="${index}">Hapus</button>
          </article>
        `
      )
      .join("");
  }

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  cartCountEl.textContent = `${itemCount} item`;
  cartTotalEl.textContent = formatRupiah(calculateCartTotal());
};

const selectProduct = (productName) => {
  if (!productSelect) return;
  productSelect.value = productName;
  document.querySelector("#pemesanan")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

renderProductOptions();
renderCart();

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectProduct(button.dataset.product);
  });
});

cartItemsEl?.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".cart-remove");
  if (!removeButton) return;

  cart.splice(Number(removeButton.dataset.index), 1);
  renderCart();
});

orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(orderForm);
  const product = products.find((item) => item.name === formData.get("product"));
  if (!product) return;

  const quantity = Math.max(1, Number(formData.get("quantity")) || 1);
  const size = formData.get("size");
  const sizePrice = size === "Large 22 oz" ? 5000 : 0;
  const toppings = formData.getAll("topping");
  const toppingPrice = [...orderForm.querySelectorAll('input[name="topping"]:checked')].reduce(
    (total, input) => total + Number(input.dataset.price || 0),
    0
  );

  cart.push({
    product: product.name,
    quantity,
    size,
    sugar: formData.get("sugar"),
    ice: formData.get("ice"),
    toppings,
    total: (product.price + sizePrice + toppingPrice) * quantity,
  });

  orderForm.reset();
  renderCart();
});

checkoutForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  // JIKA USER BELUM LOGIN, LEMPAR LANGSUNG KE HALAMAN LOGIN.HTML
  if (!loggedInUser) {
    if (accountStatus) {
      accountStatus.textContent = "Silakan login terlebih dahulu untuk checkout";
    }
    alert("Silakan Login terlebih dahulu untuk menyelesaikan pesanan!");
    window.location.href = "login.html"; // Redirect ke halaman login bawaan kamu
    return;
  }

  if (cart.length === 0) {
    alert("Keranjang belanja masih kosong, pilih menu terlebih dahulu!");
    selectProduct(products[0].name);
    return;
  }

  const formData = new FormData(checkoutForm);
  const total = calculateCartTotal();
  const orderCode = `MM-${String(Date.now()).slice(-6)}`;

  orderNumberEl.textContent = `Pesanan ${orderCode} berhasil dibuat`;
  orderNoteEl.textContent = `${formData.get("name")} memilih pembayaran ${formData.get("payment")}. Total pesanan ${formatRupiah(
    total
  )}.`;
  trackingPanel.hidden = false;
  trackingPanel.scrollIntoView({ behavior: "smooth", block: "center" });

  cart.length = 0;
  checkoutForm.reset();
  renderCart();
});