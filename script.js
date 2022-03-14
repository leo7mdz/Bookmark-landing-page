const navBar = document.querySelector(".nav-bar"),
  iconMenu = document.querySelector(".icon-menu");

document.addEventListener("click", (e) => {
  if (e.target === iconMenu) {
    navBar.classList.toggle("menu-is-active");
  }

  if (e.target.matches(".close")) {
    navBar.classList.remove("menu-is-active");
  }
});
window.addEventListener("resize", () => {
  navBar.classList.remove("menu-is-active");
});
