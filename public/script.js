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
  if (!termInput.checked == true) {
    termBox.classList.add("checked");
  } else {
    termBox.classList.remove("checked");
  }
}
termText.addEventListener("click", toggleNewsletter);

// word count for message box
const messageArea = document.querySelector(".message-area");
const wordCount = document.querySelector(".word-count");

messageArea.addEventListener("keyup", () => {
  wordCount.textContent = messageArea.value.length;
});

// regular expressions for form validation
let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

// get-in-touch form
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = contactForm["first-name"].value;
  const lastName = contactForm["last-name"].value;
  const email = contactForm["email"].value;
  const tel = contactForm["tel"].value;
  const message = contactForm["message"].value;
  let errorMessage = contactForm.querySelector(".contact-error");

  if (firstName.length == 0 || /[0-9]/.test(firstName)) {
    console.log("enter a valid first name");

    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Enter a valid first name";
  } else if (lastName.length == 0 || /[0-9]/.test(lastName)) {
    console.log("enter a valid last name");

    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Enter a valid last name";
  } else if (!emailRegex.test(email)) {
    console.log(`enter a valid email address`);

    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Enter a valid email address";
  } else if (tel.length <= 7 || /[a-zA-Z]/.test(tel)) {
    console.log(`enter a valid phone number`);

    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Enter a valid phone number";
  } else if (message.length <= 3) {
    console.log(`Enter a valid message`);

    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Enter a valid message";
  } else {
    console.log(`form is validated `);

    errorMessage.classList.add("hidden");
    errorMessage.textContent = "";
    contactForm.reset();

    alert("message sent");
  }
});

// clear contact form
const clearFormBtn = document.querySelector(".clear-contact-form");
let contactError = contactForm.querySelector(".contact-error");

clearFormBtn.addEventListener("click", () => {
  contactForm.reset();
  wordCount.textContent = "0";

  contactError.classList.add("hidden");
  contactError.textContent = "";
});

// newsletter form validation
const newsletterForm = document.querySelector(".newsletter-form");
const subscribeBtn = document.querySelector(".subscribe-btn");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const subscribeEmail = newsletterForm["email"].value;
  const errorMessage = newsletterForm.querySelector(".subscribe-error");

  if (!emailRegex.test(subscribeEmail)) {
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Enter a valid email address";
  } else if (termInput.checked != true) {
    errorMessage.classList.add("hidden");
  } else {
    errorMessage.textContent = "";
    termBox.classList.remove("checked");
    newsletterForm.reset();

    alert("Subscribed");
  }
});
