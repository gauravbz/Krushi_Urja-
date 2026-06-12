document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('show');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('show');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle form submission to Google Sheets
    const form = document.getElementById('sheetdb-form');
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxm4q9V3j1r_6YkI02djzHYKCG4HM9p5jRzOuaIK9BlZhk4VrZuWTmS62fpSkmDp3nS4w/exec';

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
            btn.disabled = true;

            const formData = new FormData(form);

            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData
            })
                .then(() => {
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> Submitted Successfully';
                    btn.style.backgroundColor = '#22c55e';
                    form.reset();

                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 3000);
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    btn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Error. Try Again.';
                    btn.style.backgroundColor = '#ef4444';

                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 3000);
                });
        });
    }

    // Add scroll effect to navbar
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Know more modal / slider
    const knowBtn = document.getElementById('know-more-btn');
    const modal = document.getElementById('knowMoreModal');
    const closeBtn = document.getElementById('modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    const slides = Array.from(document.querySelectorAll('.slide'));
    let current = 0;

    function showSlide(index) {
        if (!slides.length) return;
        slides.forEach(slide => slide.classList.remove('active'));
        const nextIndex = (index + slides.length) % slides.length;
        slides[nextIndex].classList.add('active');
        current = nextIndex;
    }

    function openModal(startIndex = 0) {
        if (!modal) return;
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        showSlide(startIndex);
    }

    function closeModal() {
        if (!modal) return;
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (knowBtn) knowBtn.addEventListener('click', () => openModal(0));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(current + 1));

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!modal || modal.getAttribute('aria-hidden') === 'true') return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showSlide(current - 1);
        if (e.key === 'ArrowRight') showSlide(current + 1);
    });
});
