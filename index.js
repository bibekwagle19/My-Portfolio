function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('expanded');
}

// Close the menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        const navLinks = document.getElementById("navLinks");
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.querySelector('.animated-text');

    setTimeout(() => {
        animatedText.classList.add('done-typing');
    }, 3000); 
});

// JavaScript for skill bar animations
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-progress');
        bar.style.width = value;
    });
});

// Contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzCzb96IfHi1-odNEVjLDs7Ofdca6lPV1rh3sSLW4rwKXxlDBBHtPOAu-ESOiNzHKuLXA/exec'; // Add your Google Apps Script URL here

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();

    // Submit the form using the fetch API
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert('Thank you! Your form is submitted successfully.')) 
        .then(() => { window.location.reload(); }) 
        .catch(error => console.error('Error!', error.message));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    });
});
