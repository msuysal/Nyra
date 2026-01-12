
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

gold_header = """    
    <!-- Floating Header Container -->
    <header class="fixed-header-wrapper">
        <div class="nav-pill" id="main-nav">
            <!-- Logo -->
            <a href="/index.html" class="logo" style="text-decoration: none;">
                <span class="logo-text">NYRA</span>
            </a>

            <!-- Center Navigation -->
            <nav class="nav-pill-menu">
                <!-- Products (Old Solutions) -->
                <div class="nav-item-dropdown">
                    <button class="nav-pill-link mobile-dropdown-btn" aria-expanded="false">
                        Products <span class="dropdown-arrow">▼</span>
                    </button>
                    <!-- Mega Menu (Light Theme Adapted) -->
                    <div class="mega-menu">
                         <div class="mega-menu-banner">
                            ✨ New: <span>Authority Graph™ 2.0 is now live.</span> <a href="/index.html#news"
                                style="color: var(--secondary); margin-left: 8px;">Explore the engine &rarr;</a>
                        </div>
                        <div class="mega-menu-container">
                            <aside class="mega-menu-sidebar">
                                <div class="sidebar-category">Core Platform</div>
                                <div class="sidebar-item active">Intel Engine <i>&rarr;</i></div>
                                <div class="sidebar-item">Predictive Graph <i>&rarr;</i></div>
                            </aside>
                            <div class="mega-menu-grid-content">
                                <div class="grid-header">
                                    <h4>Platform Capabilities</h4>
                                </div>
                                <div class="grid-items">
                                     <div class="grid-item">
                                        <div class="grid-item-icon">🔍</div>
                                        <div class="grid-item-text">
                                            <h5>Expert Discovery</h5>
                                            <p>Find authority figures by intent.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">📈</div>
                                        <div class="grid-item-text">
                                            <h5>Velocity Forecasting</h5>
                                            <p>Predict message travel speed.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">🛡️</div>
                                        <div class="grid-item-text">
                                            <h5>Intelligence Guard</h5>
                                            <p>Market-value audits.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">🕸️</div>
                                        <div class="grid-item-text">
                                            <h5>Influence Mapping</h5>
                                            <p>Visual network graphs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Solutions (Old Use Cases) -->
                <div class="nav-item-dropdown">
                    <button class="nav-pill-link mobile-dropdown-btn" aria-expanded="false">
                        Solutions <span class="dropdown-arrow">▼</span>
                    </button>
                    <div class="mega-menu">
                        <div class="mega-menu-container use-cases-layout">
                             <div class="mega-menu-grid-content" style="width: 100%;">
                                <div class="grid-header">
                                    <h4>By Use Case</h4>
                                </div>
                                <div class="grid-items">
                                    <a href="/solutions/awareness-reach.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📢</div>
                                            <div class="grid-item-text">
                                                <h5>Awareness & Reach</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/product-review.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">🛠️</div>
                                            <div class="grid-item-text">
                                                <h5>Product Review</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/sales-partnership.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">🤝</div>
                                            <div class="grid-item-text">
                                                <h5>Sales Partnership</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/thought-leadership.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">💡</div>
                                            <div class="grid-item-text">
                                                <h5>Thought Leadership</h5>
                                            </div>
                                        </div>
                                    </a>
                                     <a href="/solutions/market-education.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📚</div>
                                            <div class="grid-item-text">
                                                <h5>Market Education</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/whitepaper-collab.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📄</div>
                                            <div class="grid-item-text">
                                                <h5>Whitepaper Collab</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/reputation-trust.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">💎</div>
                                            <div class="grid-item-text">
                                                <h5>Reputation</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/solutions/brand-affinity.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">❤️</div>
                                            <div class="grid-item-text">
                                                <h5>Brand Affinity</h5>
                                            </div>
                                        </div>
                                    </a>
                                     <a href="/solutions/event-amplification.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">🎟️</div>
                                            <div class="grid-item-text">
                                                <h5>Events</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                <!-- Resources (New) -->
                <div class="nav-item-dropdown">
                    <button class="nav-pill-link mobile-dropdown-btn" aria-expanded="false">
                        Resources <span class="dropdown-arrow">▼</span>
                    </button>
                    <div class="mega-menu" style="min-width: 600px; width: 600px;">
                        <div class="mega-menu-container">
                             <div class="mega-menu-grid-content" style="width: 100%;">
                                <div class="grid-header">
                                    <h4>Learn & Connect</h4>
                                </div>
                                <div class="grid-items col-2">
                                    <a href="/insights.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📰</div>
                                            <div class="grid-item-text">
                                                <h5>Insights Blog</h5>
                                                <p>Latest trends in authority.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/api.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">⚙️</div>
                                            <div class="grid-item-text">
                                                <h5>API Documentation</h5>
                                                <p>Build on our engine.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/contact.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📞</div>
                                            <div class="grid-item-text">
                                                <h5>Contact Support</h5>
                                                <p>Get help with your account.</p>
                                            </div>
                                        </div>
                                    </a>
                                     <a href="/contact.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">💼</div>
                                            <div class="grid-item-text">
                                                <h5>Contact Sales</h5>
                                                <p>Enterprise solutions.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Right Actions -->
            <div class="nav-pill-actions">
                <button class="action-search-btn" aria-label="Search">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                <a href="https://nyra-webservice-dev-kxi49.ondigitalocean.app/login" class="nav-action-link">Login</a>
                <a href="javascript:void(0)" class="btn-pill-outline open-waitlist">Get a demo</a>
                <a href="javascript:void(0)" class="btn-pill-primary open-waitlist">Join Waitlist</a>
            </div>

             <button class="nav-pill-mobile-toggle mobile-menu-btn" aria-label="Toggle Menu">
                <span class="bar">☰</span>
            </button>
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
