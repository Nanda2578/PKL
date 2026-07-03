const ADMIN_PASSWORD_KEY = "mamamatchaAdminPassword";
const DEFAULT_ADMIN_PASSWORD = "matchaadmin";

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const adminSession = document.querySelector("#admin-session");
const adminLogout = document.querySelector("#admin-logout");
const adminPasswordForm = document.querySelector("#admin-password-form");
const passwordMessage = document.querySelector("#password-message");

const adminData = localStorage.getItem("mamamatchaAdmin");

if (!adminData) {
  window.location.href = "login.html?role=admin";
}

if (!localStorage.getItem(ADMIN_PASSWORD_KEY)) {
  localStorage.setItem(ADMIN_PASSWORD_KEY, DEFAULT_ADMIN_PASSWORD);
}

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

try {
  const admin = JSON.parse(adminData);
  adminSession.textContent = `Login sebagai ${admin.email}`;
} catch {
  adminSession.textContent = "Login sebagai admin";
}

adminLogout?.addEventListener("click", () => {
  localStorage.removeItem("mamamatchaAdmin");
  window.location.href = "login.html?role=admin";
});

adminPasswordForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(adminPasswordForm);
  const currentPassword = formData.get("currentPassword");
  const newPassword = formData.get("newPassword");
  const savedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_ADMIN_PASSWORD;

  if (currentPassword !== savedPassword) {
    passwordMessage.textContent = "Password lama belum sesuai.";
    return;
  }

  localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
  adminPasswordForm.reset();
  passwordMessage.textContent = "Password admin berhasil diubah.";
});
