import re

with open('src/i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_key(key, new_value):
    global content
    escaped_value = new_value.replace('"', '\\"').replace('\n', '\\n')
    pattern = r'("' + key + r'":\s*")[^"]*(")'
    content = re.sub(pattern, r'\1' + escaped_value + r'\2', content)

# --- BUSINESS ---
replace_key('shev.biz.hero.title', 'Strategic Corporate & Business Law')
replace_key('shev.biz.hero.subtitle', 'Protecting your enterprise, minimizing risk, and facilitating growth. SHEV Law Group provides aggressive legal guidance for business owners, entrepreneurs, and corporations navigating complex commercial disputes and transactions in Texas.')

replace_key('shev.biz.practice.1.title', 'Business Formation & Structuring')
replace_key('shev.biz.practice.1.desc', 'Strategic structuring for LLCs, Corporations, and Partnerships to maximize liability protection, ensure compliance, and prepare for scalable growth.')

replace_key('shev.biz.practice.2.title', 'Commercial Litigation')
replace_key('shev.biz.practice.2.desc', 'Fierce, trial-ready representation in breach of contract claims, partnership disputes, trade secret litigation, and complex business torts.')

replace_key('shev.biz.practice.3.title', 'Contracts & Transactions')
replace_key('shev.biz.practice.3.desc', 'Drafting, reviewing, and negotiating airtight commercial leases, vendor agreements, NDAs, and employment contracts to prevent costly disputes.')

replace_key('shev.biz.why.1.title', 'Proactive Risk Management')
replace_key('shev.biz.why.1.desc', 'We act as your dedicated outside general counsel, identifying potential liabilities and preventing legal problems before they turn into costly lawsuits.')

replace_key('shev.biz.why.2.title', 'Deal Makers, Not Deal Breakers')
replace_key('shev.biz.why.2.desc', 'We facilitate your business growth by drafting bulletproof contracts that protect your interests while keeping negotiations moving forward.')

replace_key('shev.biz.why.3.title', 'High-Stakes Trial Experience')
replace_key('shev.biz.why.3.desc', 'When disputes are unavoidable, we bring elite courtroom experience to aggressively defend your company\'s bottom line in state and federal courts.')

replace_key('shev.biz.bio.text', 'Your business is more than just an asset - it\'s your livelihood. Every corporate matter requires a calculated strategy tailored to your industry, goals, and risk tolerance.\\n\\nFrom formation to high-stakes litigation, our role is to act as your strategic legal partner, allowing you to focus on running your business while we protect it.')

replace_key('shev.biz.faq.1.q', 'Should I form an LLC or a Corporation?')
replace_key('shev.biz.faq.1.a', 'The right entity depends on your liability needs, tax strategy, and funding goals. We consult with you to choose and establish the optimal structure for your specific business model.')

replace_key('shev.biz.faq.2.q', 'Do you handle contract drafting and review?')
replace_key('shev.biz.faq.2.a', 'Yes, we draft, review, and negotiate all types of commercial agreements, including employment contracts, NDAs, vendor agreements, and commercial leases to ensure you are fully protected.')

replace_key('shev.biz.faq.3.q', 'Can you help resolve a dispute with my business partner?')
replace_key('shev.biz.faq.3.a', 'Absolutely. We handle partnership disputes and breach of fiduciary duty claims, aiming for an efficient resolution but fully prepared for aggressive litigation if necessary.')

with open('src/i18n.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Business i18n")
