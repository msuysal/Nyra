// Main Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dashboard Interaction
const dashboardData = {
    awareness: {
        title: "Brand Awareness",
        results: "Campaign: 'Fintech platform for CFOs in Europe'",
        cards: [
            { name: "Dr. Elena Rostova", handle: "@FinTech_CFO", score: "98%", auth: "96%", reach: "245k", eng: "8.2%", img: 1 },
            { name: "Marcus Weber", handle: "@EuroFinance", score: "94%", auth: "91%", reach: "180k", eng: "6.5%", img: 2 }
        ]
    },
    event: {
        title: "Event Amplification",
        results: "Campaign: 'AI Summit in London—target tech leaders'",
        cards: [
            { name: "Sarah Chen", handle: "@AI_Summit_EU", score: "97%", auth: "94%", reach: "320k", eng: "7.8%", img: 3 },
            { name: "Tech Events UK", handle: "@TechEventsUK", score: "93%", auth: "89%", reach: "450k", eng: "5.2%", img: 4 }
        ]
    },
    content: {
        title: "Content Distribution",
        results: "Campaign: 'ESG whitepaper for sustainability officers'",
        cards: [
            { name: "Green Business", handle: "@GreenBiz_ESG", score: "96%", auth: "95%", reach: "180k", eng: "9.1%", img: 5 },
            { name: "Sustainability Pro", handle: "@SustainPro", score: "92%", auth: "88%", reach: "210k", eng: "6.8%", img: 6 }
        ]
    },
    thought: {
        title: "Thought Leadership",
        results: "Campaign: 'Position CEO as Web3 authority'",
        cards: [
            { name: "Crypto Analyst", handle: "@Web3_Insights", score: "99%", auth: "98%", reach: "520k", eng: "8.9%", img: 7 },
            { name: "Blockchain Today", handle: "@BlockchainNow", score: "95%", auth: "93%", reach: "380k", eng: "7.2%", img: 8 }
        ]
    }
};

const menuItems = document.querySelectorAll('.menu-item');
const dashCampaign = document.getElementById('dash-campaign');
const dashResultsTitle = document.getElementById('dash-results-title');
const dashCardsContainer = document.getElementById('dash-cards');

if (menuItems.length > 0) {
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Active State
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const key = item.getAttribute('data-id');
            const data = dashboardData[key];

            if (data) {
                // Update Text
                dashCampaign.innerText = data.title;
                dashResultsTitle.innerText = data.results;

                // Render Cards
                dashCardsContainer.innerHTML = '';
                data.cards.forEach((card, index) => {
                    const cardHTML = `
                        <div class="dash-card" style="animation-delay: ${index * 0.1}s">
                            <div class="card-head">
                                <div class="avatar-circle" style="background-image: url('https://i.pravatar.cc/150?u=${card.img}')"></div>
                                <div class="card-meta">
                                    <div class="name">${card.name}</div>
                                    <div class="handle">${card.handle}</div>
                                </div>
                                <div class="score-badge">${card.score} Fit</div>
                            </div>
                            <div class="card-body">
                                <div class="stat-row">
                                    <div class="stat">
                                        <label>Authority</label>
                                        <div class="progress"><div class="fill" style="width: ${card.auth}"></div></div>
                                    </div>
                                    <div class="stat">
                                        <label>Reach</label>
                                        <div class="val">${card.reach}</div>
                                    </div>
                                    <div class="stat">
                                        <label>Eng.</label>
                                        <div class="val">${card.eng}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    dashCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
                });
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
        progress = Math.max(0, Math.min(0.6, progress)); // Clamp 0 to 0.6 (stop at 60%)

        industryCards.forEach((card) => {
            const angleDeg = parseFloat(card.getAttribute('data-angle'));
            const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start from top
            const distanceMult = parseFloat(card.getAttribute('data-distance')) || 1;

            // Max radius relative to viewport width
            const maxRadius = window.innerWidth < 768 ? window.innerWidth * 0.4 : window.innerWidth * 0.25;

            // Current Expansion
            // Easing: start slow, explode out
            const ease = progress < 0.3 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

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

// Reveal on Scroll
const revealElements = document.querySelectorAll(".reveal-on-scroll");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));

// Waitlist Modal Logic
const modal = document.getElementById('waitlist-modal');
const closeModalBtn = document.getElementById('close-modal');
const waitlistForm = document.getElementById('waitlist-form');
const triggers = document.querySelectorAll('a[href="#signup"], .btn-primary:not(.btn-submit)');
// Using selectors conservatively. 
// Note: Some buttons might naturally point to #signup.

if (modal && triggers.length > 0) {
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Check if it's actually meant to be a waitlist trigger
            // For now, let's assume all main CTAs open the modal
            // Exception: The subscribe button in final CTA is not strictly waitlist, but let's funnel them.

            const isDownload = trigger.textContent.includes('Download');
            const isSubscribe = trigger.textContent.includes('Subscribe');

            if (trigger.getAttribute('href') === '#signup' || trigger.textContent.includes('Waitlist') || trigger.textContent.includes('Early Access')) {
                e.preventDefault();
                openModal();
            }
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Form Submit
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate API call
            const btn = waitlistForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            btn.textContent = 'Securing Spot...';
            btn.disabled = true;

            setTimeout(() => {
                alert("You're on the list! We'll be in touch shortly.");
                closeModal();
                waitlistForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
}

function openModal() {
    modal.style.display = 'flex';
    // Small delay to allow display flex to apply before opacity transition
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300); // Match transition duration
}
