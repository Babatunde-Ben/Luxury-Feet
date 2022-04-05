const menuIconBtn = document.getElementById("menu-icon");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navBar = document.querySelector(".top-navbar");

menuIconBtn.addEventListener("click", () => {
  if (navBar.classList.contains("close")) {
    console.log(`navOut`);
    navBar.classList.remove("left-full");
    navBar.classList.remove("close");
    navBar.classList.remove("animate-navOut)");

    navBar.classList.add("animate-navIn");
  } else {
    navBar.classList.add("close");
    navBar.classList.add("animate-navOut");
    navBar.classList.remove("animate-navIn");
    navBar.classList.add("left-full");
  }

  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});
