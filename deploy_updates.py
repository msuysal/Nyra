
import os
import re

base_dir = '/Users/olguuysal/.gemini/antigravity/scratch/nyra-landing-page'
files_to_update = [
    'index.html', 'about.html', 'agency-collab.html', 'careers.html', 
    'contact.html', 'faq.html', 'insights.html', 'post.html', 
    'privacy.html', 'terms.html', '404.html'
]

gold_footer = """    <footer class="footer-modern">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <div class="logo">
                        <span class="logo-text">NYRA</span>
                        <span class="logo-tagline">Decision Engine</span>
                    </div>
                    <p class="brand-desc">The decision engine for human capital. Map expertise, forecast resonance, and allocate capital with mathematical certainty.</p>
                    <div class="social-links">
                        <a href="#" class="footer-social-btn" aria-label="LinkedIn">Li</a>
                        <a href="#" class="footer-social-btn" aria-label="Twitter / X">X</a>
                        <a href="#" class="footer-social-btn" aria-label="Instagram">In</a>
                    </div>
                </div>

                <div class="footer-nav">
                    <div class="nav-col">
                        <h4>Platform</h4>
                        <a href="/index.html#features">Features</a>
                    </div>
                    <div class="nav-col">
                        <h4>Company</h4>
                        <a href="/about.html">About Us</a>
                        <a href="/faq.html">FAQ</a>
                        <a href="/careers.html">Careers</a>
                    </div>
                    <div class="nav-col">
                        <h4>Contact</h4>
                        <a href="/contact.html">General Contact</a>
                        <a href="/agency-collab.html">Agency Solutions</a>
                    </div>
                </div>

                <div class="footer-newsletter">
                    <h4>Stay Ahead</h4>
                    <p>Join our newsletter for the latest B2B decision insights.</p>
                    <form class="newsletter-form" onsubmit="event.preventDefault();">
                        <input type="email" placeholder="Enter your email" aria-label="Email address for newsletter">
                        <button type="submit" class="btn-icon" aria-label="Subscribe">&rarr;</button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 NYRA Intelligence. All rights reserved.</p>
                <div class="legal-links">
                    <a href="/privacy.html">Privacy Policy</a>
                    <a href="/terms.html">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>"""

gold_waitlist = """    <div class="modal-overlay" id="waitlist-modal">
        <div class="modal-container glass">
            <button class="modal-close" id="close-modal">&times;</button>
            <div class="modal-header">
                <h3>Join the Waitlist</h3>
                <p>Get early access to the Decision Engine and start predicting impact.</p>
            </div>
            <form class="waitlist-form" id="waitlist-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" required placeholder="John">
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" required placeholder="Doe">
                    </div>
                </div>

                <div class="form-group">
                    <label for="wemail">Work Email</label>
                    <input type="email" id="wemail" required placeholder="john@company.com">
                </div>

                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <div class="phone-input-wrapper">
                        <div class="select-wrapper country-code">
                            <select>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+49">+49</option>
                                <option value="+33">+33</option>
                                <option value="+90">+90</option>
                                <option value="+91">+91</option>
                                <option value="+86">+86</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <input type="tel" placeholder="(555) 000-0000">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Position</label>
                        <input type="text" placeholder="e.g. Head of Growth">
                    </div>
                    <div class="form-group">
                        <label>Industry</label>
                        <div class="select-wrapper">
                            <select>
                                <option value="" disabled selected>Select Industry</option>
                                <option value="tech">Tech & AI</option>
                                <option value="fintech">Fintech & Crypto</option>
                                <option value="health">HealthTech & Pharma</option>
                                <option value="energy">Energy & Clean Tech</option>
                                <option value="esg">ESG & Sustainability</option>
                                <option value="supply">Supply Chain</option>
                                <option value="gov">Gov & Regulatory</option>
                                <option value="ngo">NGOs</option>
                                <option value="agency">Marketing Agency</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <div class="select-wrapper">
                        <select>
                            <option value="" disabled selected>Select Country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div class="form-checkbox">
                    <input type="checkbox" id="consent" required>
                    <label for="consent">I agree to receive communications from NYRA regarding product updates and early access opportunities.</label>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Secure My Spot</button>
            </form>
        </div>
    </div>"""

replacements = [
    (r'Authority Intelligence', 'Decision Engine'),
    (r'Authority Graph™', 'Decision Engine'),
    (r'Authority Graph', 'Decision Engine'),
    (r'influencer marketing', 'decision intelligence'),
    (r'influencer platform', 'decision engine'),
    (r'influencers', 'decision nodes'),
    (r'Influence Mapping', 'Decision Mapping'),
    (r'Authority Mapping', 'Decision Mapping'),
    (r'true authority', 'true impact'),
    (r'forecast influence', 'forecast impact'),
    (r'predicting influence', 'predicting impact'),
    (r'KOLs', 'experts'),
    (r'DOLs', 'experts'),
    (r'Digital Opinion Leaders', 'Expert Networks'),
    (r'Key Opinion Leaders', 'Experts'),
]

def update_file(file_path):
    if not os.path.exists(file_path):
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Terminology
    new_content = content
    for pattern, replacement in replacements:
        new_content = re.sub(pattern, replacement, new_content, flags=re.IGNORECASE)
    
    # 2. Footer replacement
    footer_pattern = re.compile(r'<footer.*?</footer>', re.DOTALL)
    if footer_pattern.search(new_content):
        new_content = footer_pattern.sub(gold_footer, new_content)
    
    # 3. Waitlist modal replacement
    modal_pattern = re.compile(r'<div class="modal-overlay" id="waitlist-modal">.*?</div>\s*</div>\s*</div>', re.DOTALL)
    if modal_pattern.search(new_content):
        new_content = modal_pattern.sub(gold_waitlist + "\n", new_content)
    else:
        # Try a simpler match if nested divs are tricky
        modal_pattern_simple = re.compile(r'<div class="modal-overlay" id="waitlist-modal">.*?Secure My Spot</button>\s*</form>\s*</div>\s*</div>', re.DOTALL)
        if modal_pattern_simple.search(new_content):
            new_content = modal_pattern_simple.sub(gold_waitlist, new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(file_path)}")

for file_name in files_to_update:
    update_file(os.path.join(base_dir, file_name))

# Deploy header
print("\nDeploying headers...")
os.system("python3 deploy_header.py")
