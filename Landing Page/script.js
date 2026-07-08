// ==========================================
// MAMAMATCHA - LIGHTWEIGHT INTERACTION SCRIPT
// ==========================================

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

// Logika Buka-Tutup Menu Navigasi (Mobile Responsive)
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Menutup menu otomatis setelah salah satu link menu diklik
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}