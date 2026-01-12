
import os

files_to_update = [
    'index.html', 'use-cases.html', 'careers.html', 'contact.html',
    'api.html', 'insights.html', 'privacy.html', '404.html',
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

mega_menu_html = """                <div class="nav-item-dropdown">
                    <a href="/use-cases.html" class="nav-link-with-dropdown mobile-dropdown-btn">Use Cases <span class="dropdown-arrow">▼</span></a>
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
                </div>"""

base_dir = '/Users/olguuysal/.gemini/antigravity/scratch/nyra-landing-page'

for file_name in files_to_update:
    path = os.path.join(base_dir, file_name)
    if not os.path.exists(path):
        print("Skipping " + path)
        continue
        
    try:
        with open(path, 'r') as f:
            content = f.read()
        
        # Variations of the link to replace
        targets = [
            '<a href="/use-cases.html">Use Cases</a>',
            '<a href="use-cases.html">Use Cases</a>',
            '<a href="/use-cases.html" class="active">Use Cases</a>',
            '<a href="use-cases.html" class="active">Use Cases</a>'
        ]
        
        replaced = False
        for target in targets:
            if target in content:
                content = content.replace(target, mega_menu_html)
                replaced = True
                print(f"Updated {file_name}")
                break
        
        if not replaced:
            print(f"Could not find target in {file_name}")
            # Fallback regex? No, simple strings should work if formatted consistently.
            # Might be whitespace issues.
            
        with open(path, 'w') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error processing {file_name}: {e}")

