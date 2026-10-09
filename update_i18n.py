import re

with open('src/i18n.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_key(key, new_value):
    global content
    escaped_value = new_value.replace('"', '\\"').replace('\n', '\\n')
    pattern = r'("' + key + r'":\s*")[^"]*(")'
    content = re.sub(pattern, r'\1' + escaped_value + r'\2', content)

# --- PI ---
replace_key('shev.pi.hero.title', 'When an Injury Changes Your Life, SHEV Gets to Work')
replace_key('shev.pi.hero.subtitle', 'An accident can affect far more than your health. Medical expenses, missed work, ongoing treatment, and uncertainty about the future can place tremendous pressure on you and your family. SHEV Law Group helps injured people understand their rights, deal with insurance companies, and pursue the compensation the law may allow.')

replace_key('shev.pi.practice.1.title', 'Auto & Transport Accidents')
replace_key('shev.pi.practice.1.desc', 'Handling Car, Motorcycle, Truck, 18-Wheeler, Bus, and Rideshare (Uber/Lyft) accidents.')

replace_key('shev.pi.practice.2.title', 'Workplace & Construction')
replace_key('shev.pi.practice.2.desc', 'Fierce representation for Construction accidents, Refinery accidents, Oilfield accidents, and Catastrophic injuries.')

replace_key('shev.pi.practice.3.title', 'Premises & Product Liability')
replace_key('shev.pi.practice.3.desc', 'Seeking accountability for Store falls, defective products, premises liability, and wrongful death claims.')

replace_key('shev.pi.why.1.title', 'Reviewing & Identifying')
replace_key('shev.pi.why.1.desc', 'Reviewing police reports, medical records, and identifying all potentially responsible parties and insurance.')

replace_key('shev.pi.why.2.title', 'Documenting & Negotiating')
replace_key('shev.pi.why.2.desc', 'Documenting current losses, evaluating future damages, and aggressively negotiating with insurance companies.')

replace_key('shev.pi.why.3.title', 'Litigation Prep & Communication')
replace_key('shev.pi.why.3.desc', 'Preparing the case for litigation when necessary while keeping you informed every step of the way.')

replace_key('shev.pi.bio.name', 'Your Legal Advocates')
replace_key('shev.pi.bio.text', 'Every case is different. The value and available remedies depend on the evidence, the applicable law, insurance coverage, the severity of the injuries, and many other factors.\n\nOur role is to examine those details carefully and develop a legal strategy based on the circumstances of your case.')

replace_key('shev.pi.faq.1.q', 'Why Consider a Personal Injury Claim?')
replace_key('shev.pi.faq.1.a', 'When someone causes an injury through negligence, Texas law allows you to seek accountability. Damages may include medical care, lost income, reduced earning capacity, and pain and suffering.')

replace_key('shev.pi.faq.2.q', 'What are the Time Limits for Texas Claims?')
replace_key('shev.pi.faq.2.a', 'In many Texas PI cases, a lawsuit generally must be filed within two years from the date the claim accrues. Missing this deadline may prevent a court from considering the claim.')

replace_key('shev.pi.faq.3.q', 'How Do I Handle the Insurance Company?')
replace_key('shev.pi.faq.3.a', 'Adjusters may request recorded statements or present early offers. Before signing documents, make sure you understand your rights. We review circumstances and help you make informed decisions.')


# --- IMMIGRATION ---
replace_key('shev.imm.hero.title', 'Strategic Immigration Guidance')
replace_key('shev.imm.hero.subtitle', 'Immigration decisions can affect your family, career, business, and ability to remain in the U.S. SHEV Law Group provides legal guidance for individuals, families, employees, and employers facing complex immigration processes.')

replace_key('shev.imm.practice.1.title', 'Family-Based Immigration')
replace_key('shev.imm.practice.1.desc', 'Keeping families together through spousal petitions, fiance visas, VAWA, green cards, and naturalization.')

replace_key('shev.imm.practice.2.title', 'Business & Employment')
replace_key('shev.imm.practice.2.desc', 'Assisting with investor visas, work visas, employment petitions, and strategic planning for foreign nationals and employers.')

replace_key('shev.imm.practice.3.title', 'Deportation Defense & Appeals')
replace_key('shev.imm.practice.3.desc', 'Aggressive representation for asylum, waivers, DACA, and deportation defense in immigration court proceedings.')

replace_key('shev.imm.why.1.title', 'Careful Preparation')
replace_key('shev.imm.why.1.desc', 'Our team reviews every detail, explains options, identifies obstacles, and prepares a tailored strategy to reduce preventable complications.')

replace_key('shev.imm.why.2.title', 'Complex Application Navigation')
replace_key('shev.imm.why.2.desc', 'From the first filing through interviews and requests for evidence, we help you organize documents and monitor critical deadlines.')

replace_key('shev.imm.why.3.title', 'Grounds of Inadmissibility')
replace_key('shev.imm.why.3.desc', 'We analyze prior violations or misrepresentations and determine whether Form I-601, another waiver, or a different legal strategy is appropriate.')

replace_key('shev.imm.bio.text', 'Because no two immigration histories are identical, the correct strategy depends on factors such as immigration status, manner of entry, family relationships, employment history, and prior applications.\n\nYour immigration matter deserves careful preparation and a clear strategy.')

replace_key('shev.imm.faq.1.q', 'When Can an Immigration Attorney Make a Difference?')
replace_key('shev.imm.faq.1.a', 'Immigration law leaves little room for mistakes. A missing signature or misunderstood deadline can lead to denial. We help you understand risks before decisions are made.')

replace_key('shev.imm.faq.2.q', 'How Do You Handle USCIS Delays?')
replace_key('shev.imm.faq.2.a', 'We monitor pending matters, respond to requests for evidence, submit supporting documentation, and evaluate available case-inquiry options to prevent avoidable setbacks.')

replace_key('shev.imm.faq.3.q', 'What Should I Do If Facing Deportation?')
replace_key('shev.imm.faq.3.a', 'Obtaining legal advice promptly is important. Potential relief may include adjustment of status, cancellation of removal, asylum, or other defenses.')


with open('src/i18n.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated i18n.ts")
