console.log(`script is working fine`);
const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".top-navbar");
console.log(menuIcon);
console.log(navBar);
menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
  console.log(`menu icon is clicked`);
});
