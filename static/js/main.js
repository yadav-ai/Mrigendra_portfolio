
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation Library
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links (if native scroll-behavior fails)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add sticky navbar class on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(30, 41, 59, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mouse follow effect for the blob (optional)
    const blob = document.createElement('div');
    blob.classList.add('blob');
    document.body.appendChild(blob);

    window.addEventListener('pointermove', (e) => {
        const { clientX, clientY } = e;
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
    });
});
