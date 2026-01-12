
import os
import re

files_to_update = [
    'index.html', 'use-cases.html', 'careers.html', 'contact.html',
    'api.html', 'insights.html', 'privacy.html', '404.html',
    'post.html',
    'solutions/awareness-reach.html',
    'solutions/product-review.html',
    'solutions/sales-partnership.html',
    'solutions/thought-leadership.html',
    'solutions/technical-trust.html',
    'solutions/market-education.html',
    'solutions/whitepaper-collab.html',
    'solutions/reputation-trust.html',
    'solutions/brand-affinity.html',
    'solutions/event-amplification.html'
]

gold_header = """    <header class="navbar">
        <!-- Utility Bar -->
        <div class="utility-bar">
            <div class="container">
                <a href="/contact.html" class="utility-link">Customer Support</a>
                <a href="/contact.html" class="utility-link">Contact Sales</a>
                <div class="utility-search-wrapper">
                    <span class="utility-search-icon">🔍</span>
                    <input type="text" placeholder="Search..." class="utility-search-input">
                </div>
            </div>
        </div>
        
        <!-- Main Nav -->
        <div class="container main-nav-container">
            <a href="/index.html" class="logo" style="text-decoration: none;">
                <span class="logo-text">NYRA</span>
                <span class="logo-tagline">Influence Intelligence</span>
            </a>
            <nav class="nav-links">
                <!-- Solutions Mega Menu -->
                <div class="nav-item-dropdown">
                    <button class="nav-link-with-dropdown mobile-dropdown-btn" aria-expanded="false">Solutions <span
                            class="dropdown-arrow">▼</span></button>
                    <div class="mega-menu">
                        <div class="mega-menu-banner">
                            ✨ New: <span>Authority Graph™ 2.0 is now live.</span> <a href="/index.html#news"
                                style="color: var(--primary); margin-left: 8px;">Explore the engine &rarr;</a>
                        </div>
                        <div class="mega-menu-container">
                            <aside class="mega-menu-sidebar">
                                <div class="sidebar-category">Solutions</div>
                                <div class="sidebar-item active">Intel Engine <i>&rarr;</i></div>
                                <div class="sidebar-item">API & Dev <i>&rarr;</i></div>
                                <div class="sidebar-item">Insights <i>&rarr;</i></div>
                                <div class="sidebar-item">Partnerships <i>&rarr;</i></div>
                            </aside>

                            <div class="mega-menu-grid-content">
                                <div class="grid-header">
                                    <h4>Capabilities</h4>
                                </div>
                                <div class="grid-items">
                                    <div class="grid-item">
                                        <div class="grid-item-icon">🔍</div>
                                        <div class="grid-item-text">
                                            <h5>Expert Discovery</h5>
                                            <p>Find authority figures by intent, not just follower counts.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">📈</div>
                                        <div class="grid-item-text">
                                            <h5>Velocity Forecasting</h5>
                                            <p>Predict how fast your message will travel through specific interest
                                                clusters.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">🛡️</div>
                                        <div class="grid-item-text">
                                            <h5>Intelligence Guard</h5>
                                            <p>Eliminate overpayment with objective market-value audits for every
                                                activation.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">🕸️</div>
                                        <div class="grid-item-text">
                                            <h5>Influence Mapping</h5>
                                            <p>Visualize the "Bridge Influencers" connecting your fragmented niche
                                                networks.</p>
                                        </div>
                                    </div>
                                </div>
                                <button class="mega-menu-explore-btn">Explore All Capabilities</button>
                            </div>

                            <div class="mega-menu-featured">
                                <div class="featured-card">
                                    <div class="featured-image">🚀</div>
                                    <h6>NYRA Alpha Program</h6>
                                    <p>Join the elite circle of authority analysts and early adopters.</p>
                                    <a href="/careers.html" class="learn-more-link">Learn more &rarr;</a>
                                </div>
                            </div>
                        </div>
                        <div class="mega-menu-footer">
                            <a href="javascript:void(0)" class="footer-action open-waitlist">
                                <i>📅</i> Book your demo
                            </a>
                            <a href="javascript:void(0)" class="footer-action open-waitlist">
                                <i>⚡</i> Start your free trial
                            </a>
                            <a href="/api.html" class="footer-action">
                                <i>📖</i> Take a product tour
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Use Cases Mega Menu -->
                <div class="nav-item-dropdown">
                    <button class="nav-link-with-dropdown mobile-dropdown-btn" aria-expanded="false">Use Cases <span class="dropdown-arrow">▼</span></button>
                    <div class="mega-menu">
                        <div class="mega-menu-banner">
                            🎯 <span>Explore the 10 Pillars of Authority Activation.</span>
                        </div>
                        <div class="mega-menu-container use-cases-layout">
                             <div class="mega-menu-grid-content">
                                <div class="grid-header">
                                    <h4>Activation Scenarios</h4>
                                </div>
                                <div class="grid-items">
                                    <a href="/solutions/awareness-reach.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📢</div>
                                            <div class="grid-item-text">
                                                <h5>Awareness & Reach</h5>
                                                <p>Bridge silos & expand visibility.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/product-review.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">🛠️</div>
                                            <div class="grid-item-text">
                                                <h5>Product Review</h5>
                                                <p>Technical validation from skeptics.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/sales-partnership.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">🤝</div>
                                            <div class="grid-item-text">
                                                <h5>Sales Partnership</h5>
                                                <p>Activate Consul Influencers.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/thought-leadership.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">💡</div>
                                            <div class="grid-item-text">
                                                <h5>Thought Leadership</h5>
                                                <p>Define the category narrative.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/technical-trust.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">🛡️</div>
                                            <div class="grid-item-text">
                                                <h5>Technical Trust</h5>
                                                <p>Win over engineering teams.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/market-education.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📚</div>
                                            <div class="grid-item-text">
                                                <h5>Market Education</h5>
                                                <p>Simplify complex concepts.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/whitepaper-collab.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📄</div>
                                            <div class="grid-item-text">
                                                <h5>Whitepaper Collab</h5>
                                                <p>Research with analysts.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/reputation-trust.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">💎</div>
                                            <div class="grid-item-text">
                                                <h5>Reputation Defense</h5>
                                                <p>Build a protector network.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/brand-affinity.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">❤️</div>
                                            <div class="grid-item-text">
                                                <h5>Brand Affinity</h5>
                                                <p>Match Cultural DNA.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/event-amplification.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">🎟️</div>
                                            <div class="grid-item-text">
                                                <h5>Event Amplification</h5>
                                                <p>Dominate share of voice.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                <a href="javascript:void(0)" class="btn btn-primary btn-nav open-waitlist mobile-only-cta">Join
                    Waitlist</a>
            </nav>
            <div class="nav-right">
                <a href="https://nyra-webservice-dev-kxi49.ondigitalocean.app/login" target="_blank"
                    class="nav-link-login">Login</a>
                <a href="javascript:void(0)" class="btn btn-primary btn-nav open-waitlist desktop-only-cta">Join
                    Waitlist</a>
                <button class="mobile-menu-btn" aria-label="Toggle Navigation Menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
        </div>
    </header>"""

base_dir = '/Users/olguuysal/.gemini/antigravity/scratch/nyra-landing-page'

# Regex to find header
header_pattern = re.compile(r'<header class="navbar">.*?</header>', re.DOTALL)

for file_name in files_to_update:
    path = os.path.join(base_dir, file_name)
    if not os.path.exists(path):
        print(f"Skipping {file_name}")
        continue
        
    try:
        with open(path, 'r') as f:
            content = f.read()
            
        if header_pattern.search(content):
            new_content = header_pattern.sub(gold_header, content)
            
            # Double check: if use-cases page has 'class="active"', we might want to preserve it,
            # but simpler to just standardize for now as dropdowns don't show active state usually.
            
            with open(path, 'w') as f:
                f.write(new_content)
            print(f"Deployed header to {file_name}")
        else:
            print(f"No header found in {file_name}")
            
    except Exception as e:
        print(f"Error processing {file_name}: {e}")
