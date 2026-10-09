import codecs
import re

with codecs.open('src/components/ShevFeatures.tsx', 'r', 'utf-8') as f:
    content = f.read()

new_footer = '''export const ShevFooter = () => {
    const { t } = useTranslation();
    return (
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 sm:px-8 lg:px-16 border-t-[8px] border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.about.title', 'About Us')}</h3>
            <p className="mb-6 leading-relaxed border-l-2 border-slate-700 pl-4 text-sm text-slate-400">
              {t('footer.about.desc', 'SHEV Law Group provides expert legal services with offices in Houston and Dallas. Our dedicated team is committed to delivering personalized legal solutions to meet your unique needs.')}
            </p>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              <p className="flex items-center"><Phone className="w-4 h-4 mr-3" /> <a href="tel:2814298083" className="hover:text-white transition-colors">(281) 429-8083</a></p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-3" /> <a href="tel:2149158835" className="hover:text-white transition-colors">(214) 915-8835</a></p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-3" /> <a href="mailto:info@shevlawgroup.com" className="hover:text-white transition-colors">info@shevlawgroup.com</a></p>
              <p className="flex items-start mt-4"><MapPin className="w-4 h-4 mr-3 mt-1 shrink-0" /> <span>2990 Richmond Ave Suite 205, Houston, TX 77098, USA</span></p>
              <p className="flex items-start"><MapPin className="w-4 h-4 mr-3 mt-1 shrink-0" /> <span>11532 Harry Hines Blvd. Suite A126, Dallas, TX 75229, USA</span></p>
            </address>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.guide.title', 'Legal Guide')}</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="https://shevlawgroup.com/legal-guide/shev-law-group-the-personal-injury-law-firm-in-dallas-houston-you-can-trust/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.1', 'Shev Law Group: The Personal Injury Law Firm in Dallas & Houston, You can Trust')}</a></li>
              <li><a href="https://shevlawgroup.com/legal-guide/good-news-for-international-travelers-soon-they-be-able-to-pay-750-for-faster-us-visa-appointments/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.2', 'Good News for International Travelers - Soon They Be Able to Pay  for Faster US Visa Appointments!')}</a></li>
              <li><a href="https://shevlawgroup.com/immigration/trusted-immigration-attorneys-in-houston-dallas-shev-law-group/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.3', 'Trusted Immigration Attorneys in Houston & Dallas')}</a></li>
              <li><a href="https://shevlawgroup.com/legal-guide/us-deportation-and-removal/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.4', 'U.S Deportation and Removal')}</a></li>
              <li><a href="https://shevlawgroup.com/immigration/how-criminal-defense-and-immigration-attorneys-can-collaborate-for-powerful-client-advocacy/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.5', 'How Criminal Defense and Immigration Attorneys Can Collaborate for Powerful Client Advocacy')}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.practice.title', 'Practice Areas')}</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="https://shevlawgroup.com/immigration-lawyers/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.1', 'Immigration')}</a></li>
              <li><a href="https://shevlawgroup.com/business-formation-and-planning/business-transactions/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.2', 'Business Transactions')}</a></li>
              <li><a href="https://shevlawgroup.com/business-formation-and-planning/asset-protection/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.3', 'Asset Protection')}</a></li>
              <li><a href="https://shevlawgroup.com/estate-planning-and-probate/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.4', 'Estate Planning & Administration')}</a></li>
              <li><a href="https://shevlawgroup.com/real-estate-lawyers/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.5', 'Real Estates Transactions')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-xs text-slate-600 leading-relaxed text-justify">
          <p className="mb-4">
            {t('Shev Legal Disclaimer')}
          </p>
          <p>
            {t('Shev Footer Copyright')}
          </p>
        </div>
      </footer>
    );
  };
'''

content = re.sub(r'export const ShevFooter = \(\) => \{.*', new_footer, content, flags=re.DOTALL)

with codecs.open('src/components/ShevFeatures.tsx', 'w', 'utf-8') as f:
    f.write(content)