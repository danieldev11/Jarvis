document.addEventListener('DOMContentLoaded', (event) => {
    const footer = document.querySelector('footer');
    footer.textContent += ` © ${new Date().getFullYear()}`;
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    const navbarLinks = document.querySelectorAll('nav ul li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            menu.classList.remove('active'); // Close menu after clicking
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (previous scripts)

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (previous scripts)

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Form validation logic goes here
        // Example: Check if the email is valid
        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Assuming form is valid, submit the form data
        // Implement form submission logic here (e.g., AJAX request)

        alert("Form submitted successfully!");
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// Highlight active link
window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(li => {
        li.classList.remove('nav-active');
        if (li.href.includes(current)) {
            li.classList.add('nav-active');
        }
    });
});


// AJAX for Contact Form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Form data collection and AJAX request logic
    // On success, display a confirmation message or handle the response as needed
});
