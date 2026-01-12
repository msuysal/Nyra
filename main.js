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
        title: "Awareness & Reach",
        results: "Precision targeting for mid-market awareness.",
        description: "Discover who really owns the attention in your niche. Use NYRA to identify the <strong>top 1% of voices</strong> that your target audience follows daily, enabling you to build awareness where it actually sticks, rather than shouting into the void.",
        cards: [
            {
                name: "Sarah Chen",
                handle: "Principal Architect @ CloudVane",
                score: "98%",
                auth: "95%",
                reach: "450k Mid-Market",
                eng: "Top 0.5% in Tech",
                img: 1,
                niche: "Cloud Computing / Infrastructure",
                verification: "Verified Authority in B2B SaaS"
            }
        ]
    },
    event: {
        title: "Event Amplification",
        results: "Host selection for Enterprise Summit 2026.",
        description: "Turn your next <strong>Summit, Workshop, or Webinar</strong> into an industry-wide event. Find and partner with the perfect hosts to lead the conversation, secure high-impact guest speakers, or recruit brand ambassadors who will announce and promote your event to the exact attendee kit you need.",
        cards: [
            {
                name: "Marcus Thorne",
                handle: "Strategic Advisor @ Global Insights",
                score: "96%",
                auth: "92%",
                reach: "85k CXO Network",
                eng: "High Intent",
                img: 19,
                niche: "Strategic Management / Leadership",
                verification: "Event Influence Specialist"
            }
        ]
    },
    education: {
        title: "Market Education",
        results: "Deep-dives into AI Ethics & Compliance.",
        description: "Complex solutions require trusted translators. Identify <strong>educational authorities</strong> who can break down your technical value proposition through deep-dives or tutorials, making sure your innovation is understood by those who need it most.",
        cards: [
            {
                name: "Dr. Elena Rostova",
                handle: "Director of AI Ethics @ FutureLab",
                score: "94%",
                auth: "99%",
                reach: "1.2M Researchers",
                eng: "Education focus",
                img: 11,
                niche: "Artificial Intelligence / Compliance",
                verification: "Academic Authority"
            }
        ]
    },
    thought: {
        title: "Thought Leadership",
        results: "Industry veteran collab for sector shift.",
        description: "Bridge the gap between your brand and the industry's intellectual core. Find <strong>veterans and strategists</strong> to co-author articles or lead high-level discussions, placing your brand at the center of the niche's most critical B2B conversations.",
        cards: [
            {
                name: "David Miller",
                handle: "VP Strategy @ NextGen Telecom",
                score: "99%",
                auth: "100%",
                reach: "Direct Enterprise",
                eng: "Expert Collab",
                img: 7,
                niche: "Telecommunications / Network Tech",
                verification: "Industry Veteran"
            }
        ]
    },
    whitepaper: {
        title: "Whitepaper Collaboration",
        results: "Validation for Sustainable Logistics Paper.",
        description: "Transform marketing material into <strong>industry standards</strong>. Partner with objective experts to validate your research, provide peer-review data, and help distribute your whitepapers through their own high-authority networks.",
        cards: [
            {
                name: "Prof. Alan Grant",
                handle: "Head of Logistics @ EuroLog",
                score: "96%",
                auth: "94%",
                reach: "Supply Chain Pros",
                eng: "Peer Reviewer",
                img: 13,
                niche: "Sustainable Supply Chain / Logistics",
                verification: "Technical Verifier"
            }
        ]
    },
    technical: {
        title: "Technical Trust",
        results: "Deep-dive audit for Cybersecurity Suite.",
        description: "Win over the skeptics. Collaborate with <strong>independent developers and architects</strong> who can perform code-level audits or architecture reviews, building undeniable technical credibility for your enterprise-grade solutions.",
        cards: [
            {
                name: "Alex 'Root' Tanaka",
                handle: "Indepenent Dev @ DevSecOps",
                score: "97%",
                auth: "100%",
                reach: "Dev Community",
                eng: "Code-level trust",
                img: 9,
                niche: "Cybersecurity / DevSecOps",
                verification: "Verified Security Auditor"
            }
        ]
    },
    review: {
        title: "Product Review",
        results: "B2B SaaS Utility Review series.",
        description: "Accelerate trust with <strong>authentic utility deep-dives</strong>. Partner with reviewers who specialize in SaaS or infrastructure to create video demos, performance benchmarks, and honest analyses that convert trial-hesitant leads into buyers.",
        cards: [
            {
                name: "Jessica Wu",
                handle: "Software Reviewer @ SaaSList",
                score: "95%",
                auth: "92%",
                reach: "Founders Circle",
                eng: "High Intensity",
                img: 3,
                niche: "Software Analysis / Founding B2B",
                verification: "Top SaaS Reviewer"
            }
        ]
    },
    reputation: {
        title: "Reputation Building",
        results: "Trust-moat construction for FinTech GTM.",
        description: "Construct a <strong>'moat of trust'</strong> around your brand. Consistently secure 3rd-party validations and sentiment-shifting mentions from across the authority network to ensure your market standing remains unshakeable.",
        cards: [
            {
                name: "Omar Sharif",
                handle: "FinTech Compliance Lead",
                score: "98%",
                auth: "97%",
                reach: "Finance Execs",
                eng: "Signal Builder",
                img: 15,
                niche: "Financial Services / Compliance",
                verification: "Trust Catalyst"
            }
        ]
    },
    affinity: {
        title: "Brand Affinity",
        results: "Emotional loyalty program.",
        description: "Move from transactional to <strong>emotional loyalty</strong>. Discover creators who live your values—whether it’s sustainability or innovation—to build community programs that turn customers into long-term advocates.",
        cards: [
            {
                name: "Chloe Bennett",
                handle: "Culture Architect",
                score: "93%",
                auth: "85%",
                reach: "Brand Loyalists",
                eng: "Eco-focus",
                img: 17,
                niche: "Brand Culture / Sustainability",
                verification: "Value-based Advocate"
            }
        ]
    },
    affiliate: {
        title: "Affiliate Engine",
        results: "Direct Rev via Technical Partners.",
        description: "Treat influence as a <strong>performance channel</strong>. Activate a network of technical consultants and niche experts who will drive direct revenue by recommending your product to their clients as a standard solution in their stack.",
        cards: [
            {
                name: "Lisa Vong",
                handle: "Growth Consultant @ ScaleUp",
                score: "96%",
                auth: "88%",
                reach: "Founder Network",
                eng: "Purchase intent",
                img: 5,
                niche: "Growth Strategy / Multi-channel",
                verification: "Top Affiliate Performer"
            }
        ]
    },
    sales: {
        title: "Sales Partnership",
        results: "Executive bridge for F500 accounts.",
        description: "Equip your sales team with an <strong>unfair advantage</strong>. Use NYRA to find insiders who can provide direct warm introductions to C-level executives at Fortune 500 accounts, bypassing cold outreach and shortening sales cycles.",
        cards: [
            {
                name: "Robert Black",
                handle: "F500 Implementation Partner",
                score: "94%",
                auth: "99%",
                reach: "C-Level Bridge",
                eng: "Enterprise Trust",
                img: 21,
                niche: "Enterprise Sales / Digital Transformation",
                verification: "Strategic Bridge-builder"
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
