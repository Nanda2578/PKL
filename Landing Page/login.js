const ADMIN_PASSWORD_KEY = "mamamatchaAdminPassword";
const DEFAULT_ADMIN_PASSWORD = "matchaadmin";

const unifiedForm = document.querySelector("#mamamatcha-unified-form");
const loginMessage = document.querySelector("#login-message");

const passwordInput = document.querySelector("#login-password");
const togglePasswordBtn = document.querySelector("#toggle-password-btn");
const eyeIcon = document.querySelector("#eye-icon");

if (!localStorage.getItem(ADMIN_PASSWORD_KEY)) {
  localStorage.setItem(ADMIN_PASSWORD_KEY, DEFAULT_ADMIN_PASSWORD);
}

// LOGIKA INTIP PASSWORD MENGGUNAKAN SVG IKON
togglePasswordBtn?.addEventListener("click", () => {
  const isPassword = passwordInput.getAttribute("type") === "password";
  
  if (isPassword) {
    passwordInput.setAttribute("type", "text");
    // Ganti gambar ke gambar mata dicoret
    eyeIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    `;
  } else {
    passwordInput.setAttribute("type", "password");
    // Kembalikan ke gambar mata normal terbuka
    eyeIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    `;
  }
});

// LOGIKA SUBMIT FORM
unifiedForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData(unifiedForm);
  const identity = formData.get("identity");
  const inputPassword = formData.get("password");
  
  const savedAdminPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_ADMIN_PASSWORD;

  if (inputPassword === savedAdminPassword) {
    localStorage.setItem(
      "mamamatchaAdmin",
      JSON.stringify({
        email: identity.includes("@") ? identity : "admin@mamamatcha.com",
      })
    );
    
    if (loginMessage) {
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login sukses sebagai Admin! Mengalihkan...";
    }
    
    alert("Selamat datang, Admin Mamamatcha!");
    window.location.href = "admin.html";
    
  } else {
    localStorage.setItem(
      "mamamatchaCustomer",
      JSON.stringify({
        name: identity,
        email: identity.includes("@") ? identity : "",
      })
    );
    
    if (loginMessage) {
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login sukses! Selamat berbelanja...";
    }
    
    alert(`Halo ${identity}, selamat datang di Mamamatcha!`);
    window.location.href = "index.html";
  }
});