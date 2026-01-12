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

// Dashboard Interaction
const dashboardData = {
    awareness: {
        title: "Awareness & Velocity",
        results: "Mid-market awareness with authority-led velocity.",
        description: "Infiltrate niche professional clusters. Use NYRA to identify the <strong>Bridge Influencers</strong> who connect siloed networks, ensuring your message travels further with less waste and maximum velocity.",
        cards: [
            {
                name: "Sarah Chen",
                handle: "Principal Architect @ CloudVane",
                score: "98%",
                auth: "95%",
                reach: "450k Cloud Pros",
                eng: "Top 0.5% in Tech",
                img: 1,
                niche: "Cloud Infrastructure",
                verification: "Verified Bridge Influencer"
            }
        ]
    },
    event: {
        title: "Event Domination",
        results: "Speaker authority mapping for Enterprise Summit.",
        description: "Don't just sponsor—dominate. Identify the <strong>Authority Scores</strong> of speakers and attendees before the show. Activate them as digital co-hosts to own the industry's social share of voice.",
        cards: [
            {
                name: "Marcus Thorne",
                handle: "Strategic Advisor @ Global Insights",
                score: "96%",
                auth: "92%",
                reach: "85k CXO Network",
                eng: "High Social Dominance",
                img: 19,
                niche: "Enterprise Management",
                verification: "Event Influence Specialist"
            }
        ]
    },
    education: {
        title: "Category Education",
        results: "GTM Education for AI Compliance Suite.",
        description: "Complex solutions require trusted translators. Identify the <strong>'Teacher' personas</strong>—creators whose technical explainers are saved and shared by decision-makers when learning new categories.",
        cards: [
            {
                name: "Dr. Elena Rostova",
                handle: "Director of AI Ethics @ FutureLab",
                score: "94%",
                auth: "99%",
                reach: "1.2M Developers",
                eng: "High Save Rate",
                img: 11,
                niche: "AI Ethics & Compliance",
                verification: "Educational Authority"
            }
        ]
    },
    thought: {
        title: "Thought Partnership",
        results: "SME collaboration for sector shift report.",
        description: "Move beyond shallow guest posts. Partner with experts who have high <strong>Topic Resonance</strong> scores. Co-create content that places your brand at the center of the industry's most critical intellectual core.",
        cards: [
            {
                name: "David Miller",
                handle: "VP Strategy @ NextGen Telecom",
                score: "99%",
                auth: "100%",
                reach: "F500 Decision Makers",
                eng: "Deep Resonance",
                img: 7,
                niche: "Telecommunications",
                verification: "Verified Thought Partner"
            }
        ]
    },
    whitepaper: {
        title: "Research Co-Creation",
        results: "Validation for Logistics 2026 Whitepaper.",
        description: "Transform marketing assets into <strong>industry standards</strong>. Invite recognized analysts to contribute commentary to your research, increasing credibility and download-to-demo conversion rates.",
        cards: [
            {
                name: "Prof. Alan Grant",
                handle: "Head of Logistics @ EuroLog",
                score: "96%",
                auth: "94%",
                reach: "Supply Chain Execs",
                eng: "Cited Authority",
                img: 13,
                niche: "Logistics Strategy",
                verification: "Research Validator"
            }
        ]
    },
    technical: {
        title: "Technical Validation",
        results: "Code-level audit for Cybersecurity Suite.",
        description: "Win over the technical gatekeepers. Collaborate with <strong>independent architects</strong> who can perform code audits and architecture reviews, building undeniable technical trust for your enterprise stack.",
        cards: [
            {
                name: "Alex 'Root' Tanaka",
                handle: "Independent Dev @ DevSecOps",
                score: "97%",
                auth: "100%",
                reach: "Security Engineering",
                eng: "Architecture Trust",
                img: 9,
                niche: "Cybersecurity",
                verification: "Independent Reviewer"
            }
        ]
    },
    review: {
        title: "Objective Reviews",
        results: "Honest Benchmark series for SaaS Suite.",
        description: "Orchestrate <strong>Honest Benchmarks</strong>. Get your tool in the hands of the most critical voices. Objective validation from a respected reviewer is 10x more powerful than any paid testimonial.",
        cards: [
            {
                name: "Jessica Wu",
                handle: "Software Reviewer @ SaaSList",
                score: "95%",
                auth: "92%",
                reach: "Founders Circle",
                eng: "High Intent",
                img: 3,
                niche: "SaaS Utility",
                verification: "Verified Critic"
            }
        ]
    },
    reputation: {
        title: "Reputation Defense",
        results: "Trust-moat for FinTech GTM.",
        description: "Construct a <strong>'moat of trust'</strong>. Build a network of 'Protector' influencers who naturally advocate for your brand during critical industry shifts and competitive attacks.",
        cards: [
            {
                name: "Omar Sharif",
                handle: "FinTech Compliance Lead",
                score: "98%",
                auth: "97%",
                reach: "Finance Execs",
                eng: "Signal Defense",
                img: 15,
                niche: "Compliance Strategy",
                verification: "Trust Protector"
            }
        ]
    },
    affinity: {
        title: "Alignment Strategy",
        results: "Value-based loyalty program.",
        description: "Move from transactions to <strong>cultural resonance</strong>. Use NYRA's cultural alignment filters to find voices who live your brand's core values, turning customers into advocates.",
        cards: [
            {
                name: "Chloe Bennett",
                handle: "Culture Architect",
                score: "93%",
                auth: "85%",
                reach: "Value Seekers",
                eng: "High Affinity",
                img: 17,
                niche: "Sustainability",
                verification: "Alignment Match"
            }
        ]
    },
    affiliate: {
        title: "High-Ticket Affiliates",
        results: "Revenue via 'Consul' partners.",
        description: "Treat influence as a <strong>performance channel</strong>. Partner with 'Consul' influencers who act as trusted advisors to procurement teams, rewarding them for high-intent introductions.",
        cards: [
            {
                name: "Lisa Vong",
                handle: "Growth Consultant @ ScaleUp",
                score: "96%",
                auth: "88%",
                reach: "Founder Network",
                eng: "Purchase Intent",
                img: 5,
                niche: "GTM Strategy",
                verification: "Consul Performance"
            }
        ]
    },
    sales: {
        title: "Sales Intelligence",
        results: "Client brief for F500 accounts.",
        description: "Equip your sales team with <strong>Influence Briefs</strong>. Know exactly which external voices a prospect follows and listens to, allowing for hyper-personalized and authoritative outreach.",
        cards: [
            {
                name: "Robert Black",
                handle: "F500 Implementation Partner",
                score: "94%",
                auth: "99%",
                reach: "Enterprise Bridge",
                eng: "Direct Access",
                img: 21,
                niche: "Enterprise Digital",
                verification: "Strategic Bridge"
            }
        ]
    }
};

const dashboardContainer = document.querySelector('.use-cases-interactive');

if (dashboardContainer) {
    const categoryGroups = document.querySelectorAll('.category-group');
    const menuItems = document.querySelectorAll('.menu-item');
    const dashCampaign = document.getElementById('dash-campaign');
    const dashResultsTitle = document.getElementById('dash-results-title');
    const dashDescription = document.getElementById('dash-description');
    const dashCardsContainer = document.getElementById('dash-cards');

    // Handle Category Header Clicks
    categoryGroups.forEach(group => {
        const header = group.querySelector('.category-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = group.classList.contains('active');

                // Close all groups
                categoryGroups.forEach(g => g.classList.remove('active'));

                if (!isActive) {
                    group.classList.add('active');
                    // Automatically click the first sub-item of this category
                    const firstItem = group.querySelector('.menu-item');
                    if (firstItem) firstItem.click();
                }
            });
        }
    });

    // Handle Sub-item Clicks
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent trigger header

            // Active State for Items
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const key = item.getAttribute('data-id');
            const data = dashboardData[key];

            if (data) {
                // Update Dashboard Text
                if (dashCampaign) dashCampaign.innerText = data.title;
                if (dashResultsTitle) dashResultsTitle.innerText = data.results;
                if (dashDescription) dashDescription.innerHTML = data.description;

                // Render Dashboard Cards
                if (dashCardsContainer) {
                    dashCardsContainer.innerHTML = '';
                    data.cards.forEach((card, index) => {
                        const cardHTML = `
                            <div class="dash-card" style="animation-delay: ${index * 0.1}s">
                                <div class="card-head">
                                    <div class="avatar-circle" style="background-image: url('https://i.pravatar.cc/150?u=${card.img}')"></div>
                                    <div class="card-meta">
                                        <div class="name">${card.name}</div>
                                        <div class="handle">${card.handle}</div>
                                        <div class="niche-tag">${card.niche}</div>
                                    </div>
                                    <div class="right-meta">
                                        <div class="score-badge">${card.score} Fit</div>
                                        <div class="verify-badge">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            ${card.verification}
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="stat-row">
                                        <div class="stat">
                                            <label>Authority Index</label>
                                            <div class="progress"><div class="fill" style="width: ${card.auth}"></div></div>
                                        </div>
                                        <div class="stat">
                                            <label>Network Context</label>
                                            <div class="val">${card.reach}</div>
                                        </div>
                                        <div class="stat">
                                            <label>Engagement Signal</label>
                                            <div class="val">${card.eng}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        dashCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
                    });
                }
            }
        });
    });

    // Auto-click the first active item on load
    const activeItem = document.querySelector('.menu-item.active');
    if (activeItem) activeItem.click();
}

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
const mobileDropdownBtn = document.querySelector('.mobile-dropdown-btn');
const megaMenu = document.querySelector('.mega-menu');

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

if (mobileDropdownBtn && megaMenu) {
    mobileDropdownBtn.addEventListener('click', (e) => {
        // Only trigger on mobile (check window width or just rely on CSS visibility)
        if (window.innerWidth <= 1024) {
            e.preventDefault(); // Prevent jump
            e.stopPropagation();
            megaMenu.classList.toggle('mobile-visible');

            // Toggle arrow rotation
            const arrow = mobileDropdownBtn.querySelector('.dropdown-arrow');
            if (arrow) {
                arrow.style.transform = megaMenu.classList.contains('mobile-visible')
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)';
            }

            // Toggle aria-expanded
            const isExpanded = megaMenu.classList.contains('mobile-visible');
            mobileDropdownBtn.setAttribute('aria-expanded', isExpanded);
        }
    });
}

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
