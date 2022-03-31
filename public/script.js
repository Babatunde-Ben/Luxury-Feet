const menuIconBtn = document.getElementById("menu-icon");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
console.log(openMenu);
console.log(closeMenu);
const navBar = document.querySelector(".top-navbar");
menuIconBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});
