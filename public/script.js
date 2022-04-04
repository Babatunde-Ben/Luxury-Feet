const menuIconBtn = document.getElementById("menu-icon");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navBar = document.querySelector(".top-navbar");

menuIconBtn.addEventListener("click", () => {
  if (navBar.classList.contains("h-0")) {
    navBar.classList.remove("h-0");
    navBar.classList.add("h-auto");
  } else {
    navBar.classList.add("h-0");
    navBar.classList.remove("h-auto");
  }
  // navBar.classList.toggle("overflow-auto");

  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});
