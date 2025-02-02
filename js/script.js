function init() {
  initCookie();
  initListeners();
  slide();
  myHeart();
  dummyApiCall();
}

init();

async function dummyApiCall() {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/")
  ).json();
}

function initListeners() {
  const cookie = document.getElementById("accept-cookies");

  if (cookie) {
    cookie.addEventListener("click", onCookieClick);
  }

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", validateForm);

  document.addEventListener("scroll", onScroll);
}

function genRandColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

function onScroll() {
  const header = document.querySelector(".index-nav");

  const [r, g, b] = genRandColor();

  header.style.backgroundColor = `rgb(${r},${g},${b})`;
}
function initCookie() {
  const isCookieAccepted = localStorage.getItem("cookieAccepted");
  const cookieModal = document.querySelector("#cookie-modal");

  if (cookieModal) {
    cookieModal.style.display = isCookieAccepted ? "none" : "unset";
  }
}
function onCookieClick() {
  localStorage.setItem("cookieAccepted", true);
  document.location.reload();
}

function slide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".index-ul");
  const navLinks = document.querySelectorAll(".index-ul li");
  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("index-nav-active");
    // animation links
    navLinks.forEach((link, index) => {
      // Toggle nav
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.4
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
}

function myHeart() {
  const heart = document.getElementById("red-heart");
  if (heart) {
    const underHeart = document.createElement("p");
    underHeart.className = "under-heart-title";
    underHeart.textContent = "Thank You For The Support";
    underHeart.style.display = "none";

    heart.insertAdjacentElement("afterend", underHeart);

    heart.addEventListener("click", function () {
      heart.classList.toggle("red_heart");
      underHeart.style.display = heart.classList.contains("red_heart")
        ? "block"
        : "none";
    });
  }
}

function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  document.querySelectorAll(".error-message").forEach((error) => {
    error.style.display = "none";
  });

  const firstName = document.getElementById("fname");
  const lastName = document.getElementById("lname");
  const email = document.getElementById("mail");
  const phoneNumber = document.getElementById("pnumber");
  const country = document.getElementById("mycountry");
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!firstName.value.trim()) {
    document.getElementById("fname-error").style.display = "block";
    isValid = false;
  }

  if (!lastName.value.trim()) {
    document.getElementById("lname-error").style.display = "block";
    isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.value.trim() || !emailPattern.test(email.value)) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  if (!phoneNumber.value.trim()) {
    document.getElementById("pnumber-error").style.display = "block";
    isValid = false;
  }

  if (!country.value.trim()) {
    document.getElementById("country-error").style.display = "block";
    isValid = false;
  }

  if (!gender) {
    alert("Please select your gender.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
}
