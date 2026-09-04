const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuBtn.innerHTML = "☰";

    });

});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.style.color = "#c0392b";
        formMessage.textContent = "Please fill in all the fields.";

        return;
    }

    formMessage.style.color = "#23834d";

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been submitted.";

    contactForm.reset()

    setTimeout(function () {

        formMessage.textContent = "";

    }, 4000);

});

const year = document.getElementById("currentYear");

year.textContent = new Date().getFullYear();


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 450) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});