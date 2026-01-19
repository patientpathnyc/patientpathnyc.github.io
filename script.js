// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling - Formsubmit.co handles the actual submission
    // The form will redirect to Formsubmit's default thank you page
    // Optional: You can customize this by adding _next parameter to redirect to your own thank you page

    // Generate unique form ID for subject line
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const subjectField = contactForm.querySelector('input[name="_subject"]');
        if (subjectField) {
            // Generate random 6-digit hex ID
            const formId = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0');

            // Update subject line with unique ID
            subjectField.value = `Patient Path NYC - Contact Form [ID: ${formId}]`;
        }
    }
});
