const menuIconBtn = document.getElementById("menu-icon");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navBar = document.querySelector(".top-navbar");

// toggle nav-bar
function toggleNavBar() {
  if (navBar.classList.contains("close")) {
    console.log(`navOut`);
    navBar.classList.remove("left-full");
    navBar.classList.remove("close");
    navBar.classList.remove("animate-navOut)");

    navBar.classList.add("animate-navIn");
  } else {
    navBar.classList.add("close");
    navBar.classList.add("animate-navOut");
    navBar.classList.add("left-full");
    navBar.classList.remove("animate-navIn");
  }

  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
}
menuIconBtn.addEventListener("click", toggleNavBar);

// scroll to sections
const navLinks = document.querySelectorAll(".nav-links");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent page from loading
    e.preventDefault();

    const id = e.target.dataset.id;
    if (id == "home") {
      window.location.href = "./index.html";
      toggleNavBar();
    } else {
      const element = document.getElementById(id);

      window.scrollTo({
        top: element.offsetTop - 20,
        left: 0,
      });
      toggleNavBar();
    }
  });
});

// toggle newsletter
const termInput = document.getElementById("terms-input");
const termText = document.querySelector(".terms-text");
const termBox = document.querySelector(".terms-box");
function toggleNewsletter() {
  if (termBox.checked === "true") {
    console.log(`box is checked`);
  } else {
    console.log(`everywhere red`);
  }
}
termText.addEventListener("click", toggleNewsletter);
// toggleNewsletter();
