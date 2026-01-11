// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchors
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

// Intersection Observer for Reveal animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add revealing classes to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(section);
});

// Modify reveal logic
const revealOnScroll = () => {
    document.querySelectorAll('section').forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Interaction for "Play Demo"
const videoBox = document.querySelector('.video-placeholder');
if (videoBox) {
    videoBox.addEventListener('click', () => {
        console.log('Play demo clicked - logic to open modal or play inline');
        alert('Product Demo Experience Coming Soon! Join the waiting list for early access.');
    });
}

// Hero Mouse Move Interaction
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.floating-orb');
        const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

        orbs.forEach(orb => {
            const speed = orb.getAttribute('data-speed') || 1;
            const moveX = x * 40 * speed;
            const moveY = y * 40 * speed;

            // Apply transform. Note: This runs on top of the parent's float animation.
            orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Reset when mouse leaves
    heroSection.addEventListener('mouseleave', () => {
        const orbs = document.querySelectorAll('.floating-orb');
        orbs.forEach(orb => {
            orb.style.transform = `translate(0, 0)`;
        });
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;

        // Optional: Close others
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});

console.log('NYRA Intelligence Layer initialized.');
