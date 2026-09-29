const nav = document.getElementById("mainNav");
const menu = document.getElementById("navMenu");

function updateNav() {
  const solid = window.scrollY > 40 || menu.classList.contains("show");
  nav.classList.toggle("scrolled", solid);
  nav.setAttribute("data-bs-theme", solid ? "light" : "dark");
}

updateNav();
window.addEventListener("scroll", updateNav, { passive: true });

menu.addEventListener("show.bs.collapse", () => {
  nav.classList.add("scrolled");
  nav.setAttribute("data-bs-theme", "light");
});
menu.addEventListener("hidden.bs.collapse", updateNav);