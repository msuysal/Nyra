// Main Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});


// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        try {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } catch (err) {
            console.warn('Invalid selector for scroll:', href);
        }
    });
});

// Basic Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

// Video Modal Placeholder
const videoBox = document.querySelector('.video-placeholder');
if (videoBox) {
    videoBox.addEventListener('click', () => {
        alert('Product demo video would play here!');
    });
}

// Hero Mouse Parallax
const floaters = document.querySelectorAll('.floating-orb');
if (floaters.length > 0) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        floaters.forEach((floater, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            floater.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        floaters.forEach(floater => {
            floater.style.transform = 'translate(0, 0)';
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// Mobile Navigation Logic
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const mobileDropdownBtn = document.querySelector('.mobile-dropdown-btn'); // removed
const megaMenu = document.querySelector('.mega-menu'); // removed

if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navLinks.classList.toggle('nav-active');

        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('nav-active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking a link (optional, good UX)
    navLinks.querySelectorAll('a:not(.nav-link-with-dropdown)').forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            navLinks.classList.remove('nav-active');
            document.body.style.overflow = '';
        });
    });
}

const dropdowns = document.querySelectorAll('.nav-item-dropdown');

dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.mobile-dropdown-btn');
    const menu = dropdown.querySelector('.mega-menu');

    if (btn && menu) {
        btn.addEventListener('click', (e) => {
            // Only trigger on mobile (check window width or just rely on CSS visibility)
            if (window.innerWidth <= 1024) {
                e.preventDefault(); // Prevent jump
                e.stopPropagation();

                // Close other menus
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        const otherMenu = otherDropdown.querySelector('.mega-menu');
                        const otherBtn = otherDropdown.querySelector('.mobile-dropdown-btn');
                        if (otherMenu) otherMenu.classList.remove('mobile-visible');
                        if (otherBtn) {
                            otherBtn.setAttribute('aria-expanded', 'false');
                            const arrow = otherBtn.querySelector('.dropdown-arrow');
                            if (arrow) arrow.style.transform = 'rotate(0deg)';
                        }
                    }
                });

                menu.classList.toggle('mobile-visible');

                // Toggle arrow rotation
                const arrow = btn.querySelector('.dropdown-arrow');
                if (arrow) {
                    arrow.style.transform = menu.classList.contains('mobile-visible')
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)';
                }

                // Toggle aria-expanded
                const isExpanded = menu.classList.contains('mobile-visible');
                btn.setAttribute('aria-expanded', isExpanded);
            }
        });
    }
});

// Industry Cards Scroll Animation
const industriesSection = document.querySelector('.industries-expand');
const industryCards = document.querySelectorAll('.industry-card');

if (industriesSection && industryCards.length > 0) {
    const handleScroll = () => {
        const rect = industriesSection.getBoundingClientRect();
        const sectionHeight = industriesSection.offsetHeight;
        const windowHeight = window.innerHeight;
        // The sticky wrapper is 100vh. The parent is 300vh.
        // We want 0 to 1 progress as we scroll through

        // Progress = how much of the "scrolled away" top is visible?
        // Actually, we can just use the top position relative to viewport.
        // When rect.top == 0, progress = 0.
        // When rect.bottom == windowHeight, progress = 1.

        let progress = -rect.top / (sectionHeight - windowHeight);

        // Clamp and ease
        progress = Math.max(0, Math.min(1, progress));
        const eased = 1 - Math.pow(1 - progress, 3); // Ease Out Cubic

        // Responsive Base Radius
        const isMobile = window.innerWidth < 768;
        const baseRadius = isMobile ? window.innerWidth * 0.35 : 300;

        industryCards.forEach(card => {
            const angleDeg = parseFloat(card.getAttribute('data-angle') || '0');
            const distMult = parseFloat(card.getAttribute('data-distance') || '1');

            // Adjust angle to start from Top (subtract 90 deg)
            const angleRad = (angleDeg - 90) * (Math.PI / 180);

            // Final Radius for this card
            const finalRadius = baseRadius * distMult;
            const currentRadius = finalRadius * eased;

            const x = Math.cos(angleRad) * currentRadius;
            const y = Math.sin(angleRad) * currentRadius;

            // Opacity: Fade in quickly in the first 20% of scroll
            const opacity = Math.min(1, progress * 5);
            const scale = 0.5 + (0.5 * eased); // Grow from 0.5 to 1.0

            card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`;
            card.style.opacity = opacity;
        });
    };


    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call
}

// Waitlist Modal Logic
const modal = document.getElementById('waitlist-modal');
const openButtons = document.querySelectorAll('.open-waitlist');
const closeButton = document.getElementById('close-modal');
const waitlistForm = document.getElementById('waitlist-form');

if (modal && openButtons.length > 0) {
    const openModal = () => {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };

    openButtons.forEach(btn => btn.addEventListener('click', openModal));

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}

// Waitlist Form Submission
if (waitlistForm) {
    waitlistForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = waitlistForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;

        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';

        // Simulate submission or actual fetch
        try {
            // Formspree or other endpoint could be used here
            // const response = await fetch('YOUR_FORM_ENDPOINT', { ... });

            setTimeout(() => {
                alert('Thank you for joining our waitlist! We will be in touch soon.');
                waitlistForm.reset();
                if (modal) modal.classList.remove('open');
                document.body.style.overflow = '';
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            }, 1000);

        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error. Please try again.');
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }
    });
}
