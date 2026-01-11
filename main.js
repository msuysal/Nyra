// Main Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Use Cases Console Interaction
const useCasesData = {
    gtm: {
        command: "Initializing GTM Protocol...",
        output: "Identify key voices to amplify your Go-To-Market strategy."
    },
    launch: {
        command: "Scanning Product Reviewers...",
        output: "Pinpoint technical critics for beta validation and launch reviews."
    },
    thought: {
        command: "Analyzing Narrative Gaps...",
        output: "Find white space in the market to position your CEO as a thought leader."
    },
    reputation: {
        command: "Monitoring Brand Sentiment...",
        output: "Build trust by engaging with authoritative voices in your sector."
    }
};

const menuItems = document.querySelectorAll('.menu-item');
const consoleCommand = document.getElementById('console-command');
const consoleOutput = document.getElementById('console-output');
const responseArea = document.querySelector('.response-area');

if (menuItems.length > 0) {
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Get data
            const key = item.getAttribute('data-id');
            const data = useCasesData[key];

            if (data) {
                // Update Text
                consoleCommand.innerText = data.command;
                consoleOutput.innerText = data.output;

                // Re-trigger Animation
                responseArea.style.animation = 'none';
                responseArea.offsetHeight; /* trigger reflow */
                responseArea.style.animation = 'fadeIn 0.5s ease forwards 0.2s';
            }
        });
    });
}

// Smooth Scroll for Anchors
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

// Basic Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

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
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all others
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Toggle current
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});


// Industries Expanding Circle Animation
const industriesSection = document.querySelector('.industries-expand');
const industryCards = document.querySelectorAll('.industry-card');

if (industriesSection && industryCards.length > 0) {
    window.addEventListener('scroll', () => {
        const sectionTop = industriesSection.offsetTop;
        const sectionHeight = industriesSection.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Calculate progress: starts when section hits top, ends when bottom hits bottom
        // Actually, sticky behavior means we want progress as we scroll THROUGH the sticky container height.
        // It's a 300vh container. Visible sticky part is 100vh.
        // So we have 200vh of scrollable "action" space.

        const start = sectionTop;
        const end = sectionTop + sectionHeight - windowHeight;

        let progress = (scrollY - start) / (end - start);
        progress = Math.max(0, Math.min(1, progress)); // Clamp 0 to 1

        industryCards.forEach((card) => {
            const angleDeg = parseFloat(card.getAttribute('data-angle'));
            const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start from top
            const distanceMult = parseFloat(card.getAttribute('data-distance')) || 1;

            // Max radius relative to viewport width
            const maxRadius = window.innerWidth < 768 ? window.innerWidth * 0.4 : window.innerWidth * 0.25;

            // Current Expansion
            // Easing: start slow, explode out
            const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            const currentRadius = maxRadius * distanceMult * ease;

            const x = Math.cos(angleRad) * currentRadius;
            const y = Math.sin(angleRad) * currentRadius;

            const scale = 0.5 + (0.5 * ease);
            const opacity = Math.min(1, progress * 4); // Fade in quickly

            card.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`;
            card.style.opacity = opacity;
        });
    }, { passive: true });
}
