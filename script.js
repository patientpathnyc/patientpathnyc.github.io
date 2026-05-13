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

            // Debug logging
            console.log('Contact Form Subject Line Debug:', subjectField.value);
        }
    }

    // Testimonials carousel — advance/rewind one card per click, wrap around.
    const viewport = document.querySelector('.testimonials-viewport');
    const prevBtn = document.querySelector('.testimonials-prev');
    const nextBtn = document.querySelector('.testimonials-next');
    if (viewport && prevBtn && nextBtn) {
        const card = viewport.querySelector('.testimonial');
        const track = viewport.querySelector('.testimonials-track');

        function stepWidth() {
            if (!card || !track) return viewport.clientWidth;
            const gap = parseFloat(getComputedStyle(track).gap) || 0;
            return card.getBoundingClientRect().width + gap;
        }

        function step(direction) {
            const max = viewport.scrollWidth - viewport.clientWidth;
            const current = viewport.scrollLeft;
            let target = current + direction * stepWidth();
            // Wrap around.
            if (direction > 0 && current >= max - 4) target = 0;
            else if (direction < 0 && current <= 4) target = max;
            viewport.scrollTo({ left: target, behavior: 'smooth' });
        }

        prevBtn.addEventListener('click', () => step(-1));
        nextBtn.addEventListener('click', () => step(1));

        // Keyboard support when focus is inside the carousel region.
        viewport.parentElement.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
        });
    }

    // "Read full review" modal — populate from the card's hidden full-quote element
    // and open a native <dialog> (handles focus trap + Esc-to-close for free).
    const modal = document.querySelector('.testimonial-modal');
    if (modal && typeof modal.showModal === 'function') {
        const modalMeta = modal.querySelector('.testimonial-modal-meta');
        const modalQuote = modal.querySelector('.testimonial-modal-quote');
        const modalClose = modal.querySelector('.testimonial-modal-close');

        document.querySelectorAll('.testimonial-read-more').forEach((btn) => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.testimonial');
                if (!card) return;
                modalMeta.innerHTML = card.querySelector('.testimonial-meta').innerHTML;
                modalQuote.innerHTML = card.querySelector('.testimonial-full').innerHTML;
                modalQuote.scrollTop = 0;
                modal.showModal();
            });
        });

        modalClose.addEventListener('click', () => modal.close());

        // Click outside the dialog body (on the backdrop) closes it.
        // Use bounding rect: backdrop clicks bubble up as e.target === modal
        // but the coordinates fall outside the dialog's visible box.
        modal.addEventListener('click', (e) => {
            const rect = modal.getBoundingClientRect();
            const inside = e.clientX >= rect.left && e.clientX <= rect.right
                && e.clientY >= rect.top && e.clientY <= rect.bottom;
            if (!inside) modal.close();
        });
    }
});
