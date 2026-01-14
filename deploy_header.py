
import os
import re

files_to_update = [
    'index.html', 'careers.html', 'contact.html', 'login.html',
    'insights.html', 'privacy.html', '404.html',
    'post.html', 'about.html', 'faq.html', 'agency-collab.html', 'terms.html'
]

gold_header = """    
    <!-- Floating Header Container -->
    <header class="fixed-header-wrapper">
        <div class="nav-pill" id="main-nav">
            <!-- Logo -->
            <a href="/index.html" class="logo" style="text-decoration: none;">
                <div class="logo-icon">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8V24L24 8V24" stroke="#050505" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="8" cy="8" r="2.5" fill="#050505"/>
                        <circle cx="24" cy="24" r="2.5" fill="#050505"/>
                        <circle cx="8" cy="24" r="2.5" fill="#050505"/>
                        <circle cx="24" cy="8" r="2.5" fill="#050505"/>
                    </svg>
                </div>
                <div class="logo-content">
                    <span class="logo-text">NYRA<span class="logo-accent">.</span></span>
                    <span class="logo-tagline">Authority Intelligence</span>
                </div>
            </a>

            <!-- Center Navigation -->
            <nav class="nav-pill-menu">
                <!-- Platform Mega Menu -->
                <div class="nav-item-dropdown">
                    <button class="nav-pill-link mobile-dropdown-btn" aria-expanded="false">
                        Platform <span class="dropdown-arrow">▼</span>
                    </button>
                    <div class="mega-menu">
                         <div class="mega-menu-banner">
                            ✨ New: <span>Authority Graph™ 2.0 is now live.</span> <a href="/index.html#news"
                                style="color: var(--secondary); margin-left: 8px;">Explore the engine &rarr;</a>
                        </div>
                        <div class="mega-menu-container">
                            <aside class="mega-menu-sidebar">
                                <div class="sidebar-category">Core Engine</div>
                                <div class="sidebar-item active">
                                    <span>Intel Engine</span>
                                    <i class="item-desc">Real-time authority tracking</i>
                                </div>
                                <div class="sidebar-item">
                                    <span>Predictive Graph</span>
                                    <i class="item-desc">AI-driven impact forecasting</i>
                                </div>
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
                                            <p>Map B2B content creators & KOLs by intent.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">📈</div>
                                        <div class="grid-item-text">
                                            <h5>Impact Forecasting</h5>
                                            <p>Predict message travel and resonance.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">🛡️</div>
                                        <div class="grid-item-text">
                                            <h5>Authority Audit</h5>
                                            <p>Technical trust & market-value validation.</p>
                                        </div>
                                    </div>
                                    <div class="grid-item">
                                        <div class="grid-item-icon">🕸️</div>
                                        <div class="grid-item-text">
                                            <h5>Influence Mapping</h5>
                                            <p>Visualizing DOL networks and nodes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Resources Mega Menu -->
                <div class="nav-item-dropdown">
                    <button class="nav-pill-link mobile-dropdown-btn" aria-expanded="false">
                        Resources <span class="dropdown-arrow">▼</span>
                    </button>
                    <div class="mega-menu mega-menu-resources">
                        <div class="mega-menu-container">
                             <div class="mega-menu-grid-content" style="width: 100%;">
                                <div class="grid-header">
                                    <h4>Company & Insights</h4>
                                </div>
                                <div class="grid-items col-2">
                                    <a href="/insights.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📰</div>
                                            <div class="grid-item-text">
                                                <h5>Insights Blog</h5>
                                                <p>Latest trends in B2B authority.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/about.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">🏢</div>
                                            <div class="grid-item-text">
                                                <h5>About Us</h5>
                                                <p>Our mission and the team behind NYRA.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/faq.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">❓</div>
                                            <div class="grid-item-text">
                                                <h5>FAQ</h5>
                                                <p>Common questions about the platform.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/contact.html" class="grid-item-link">
                                        <div class="grid-item">
                                            <div class="grid-item-icon">📞</div>
                                            <div class="grid-item-text">
                                                <h5>Contact Support</h5>
                                                <p>Get help with your account or demo.</p>
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
                <a href="https://nyra-webservice-dev-kxi49.ondigitalocean.app/login" target="_blank" rel="noopener noreferrer" class="nav-action-link">Login</a>
                <a href="javascript:void(0)" class="btn-pill-primary open-waitlist">Join Waitlist</a>
            </div>

             <button class="nav-pill-mobile-toggle mobile-menu-btn" aria-label="Toggle Menu">
                <span class="bar">☰</span>
            </button>
        </div>
    </header>"""

base_dir = '/Users/olguuysal/.gemini/antigravity/scratch/nyra-landing-page'

# Regex to find header
header_pattern = re.compile(r'<header class="(navbar|fixed-header-wrapper)">.*?</header>', re.DOTALL)

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
            
            with open(path, 'w') as f:
                f.write(new_content)
            print(f"Deployed header to {file_name}")
        else:
            print(f"No header found in {file_name}")
            
    except Exception as e:
        print(f"Error processing {file_name}: {e}")
