
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

# The mega menu block is massive, so matching it exactly might be hard if whitespace varies.
# However, I know it was injected into the footer.
# I can look for the pattern inside the footer-nav section.

base_dir = '/Users/olguuysal/.gemini/antigravity/scratch/nyra-landing-page'

for file_name in files_to_update:
    path = os.path.join(base_dir, file_name)
    if not os.path.exists(path):
        continue
        
    try:
        with open(path, 'r') as f:
            content = f.read()

        # Strategy: Find the footer section, then replace the mega menu block ONLY within it.
        # But simply replacing the specific string again works if I can construct the exact string I inserted.
        # But wait, I inserted it everywhere.
        # I want to revert it in the footer.
        
        # The content I inserted starts with <div class="nav-item-dropdown"> and ends with </div>
        # And it contains "Use Cases" and "10 Pillars".
        
        # Let's find the footer part.
        footer_idx = content.find('<footer')
        if footer_idx != -1:
            footer_content = content[footer_idx:]
            
            # Use regex or simple replace in footer_content
            # The pattern I inserted is structurally consistent.
            # I will search for the specific text I inserted.
            
            inserted_start = '<div class="nav-item-dropdown">'
            inserted_end = 'DOMINATE share of voice.</p>\n                                            </div>\n                                        </div>\n                                    </a>\n                                </div>\n                             </div>\n                        </div>\n                    </div>\n                </div>' 
            # This end string is fragile due to whitespace.
            
            # Alternative: Search for the block starting with <div class="nav-item-dropdown"> and containing "Use Cases"
            # AND "solutions/awareness-reach.html" inside the FOOTER.
            
            # I'll use a regex to find the block in the footer.
            # Pattern: <div class="nav-item-dropdown">(\s|.)*?Use Cases(\s|.)*?event-amplification.html(\s|.)*?</div>(\s|.)*?</div>(\s|.)*?</div>
            
            # Actually, I can just Regex replace the entire dropdown block with the simple link,
            # BUT only if it is inside the footer.
            
            # Since I know the footer context:
            # <h4>Product</h4>... <a href="/index.html#solutions">Features</a> ... <div class="nav-item-dropdown">...
            
            pattern = r'(<h4>Product</h4>\s*<a href="/index\.html#solutions">Features</a>\s*)(<div class="nav-item-dropdown">[\s\S]*?</div>\s*</div>\s*</div>)'
            
            # This regex is hard because of nested divs.
            
            # Simpler approach:
            # The footer nav usually looks like:
            # <div class="nav-col">
            #    <h4>Product</h4>
            #    <a href="/index.html#solutions">Features</a>
            #    [THE MEGA MENU]
            #    <a href="/api.html">API Access</a>
            # </div>
            
            # I will replace the known mega menu string with `<a href="/use-cases.html">Use Cases</a>`
            # BUT only matching the second occurrence? No, headers have it too.
            # I will split the file content into header and footer parts.
            
            header_part = content[:footer_idx]
            footer_part = content[footer_idx:]
            
            # Now replace in footer_part
            # I need the EXACT string or a robust regex.
            # The string I injected in update_nav.py is available.
            
            # Let's read the update_nav.py string logic again.
            # It was `mega_menu_html`.
            # I will copy that string here and use it for replacement.
            
            mega_menu_block = """                <div class="nav-item-dropdown">
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
                
            if mega_menu_block in footer_part:
                new_footer_part = footer_part.replace(mega_menu_block, '<a href="/use-cases.html">Use Cases</a>')
                new_content = header_part + new_footer_part
                
                with open(path, 'w') as f:
                    f.write(new_content)
                print(f"Restored footer in {file_name}")
            else:
                print(f"Mega menu block not found in footer of {file_name}")

    except Exception as e:
        print(f"Error processing {file_name}: {e}")
