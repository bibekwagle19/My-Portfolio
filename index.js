function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("expanded");
}

// Close the menu when a link is clicked (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
        const navLinks = document.getElementById("navLinks");
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});

// Contact form submission via Google Apps Script
const form = document.forms["contact-form"];
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        })
            .then((response) => {
                alert("Thank you! Your form is submitted successfully.");
                window.location.reload();
            })
            .catch((error) => console.error("Error!", error.message));
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});
