import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { MessageSquare, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2500,
  });

  const displayValue = useTransform(springValue, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className="inline-block">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export const ShevStats = ({ stats, primaryColor }: { stats: { value: number, suffix: string, label: string }[], primaryColor: string }) => {
  const highlightHex = primaryColor === 'red' ? '#dc2626' : '#1d4ed8';

  return (
    <section className="py-16 px-6 sm:px-8 bg-slate-900 text-white border-y border-slate-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-700">
        {stats.map((stat, i) => (
          <div key={i} className={`flex flex-col items-center justify-center p-12 relative ${i !== 2 ? 'md:border-r border-b md:border-b-0 border-slate-700' : ''}`}>
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: highlightHex }} />
            
            <h3 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-sm md:text-base text-slate-400 uppercase tracking-[0.2em] font-bold text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ShevPracticeAreas = ({ areas, primaryColor }: { areas: { title: string, desc: string, icon: any }[], primaryColor: string }) => {
  const { t } = useTranslation();
  const isRed = primaryColor === 'red';
  
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className={`w-12 h-1 bg-${isRed ? 'red-600' : 'blue-700'} mb-6`} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 uppercase tracking-wide">
            {t('Practice Areas')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-10 group relative overflow-hidden ${i !== 2 ? 'md:border-r border-b md:border-b-0 border-slate-200' : ''}`}
              >
                {/* Background Fill on Hover */}
                <div className={`absolute inset-0 bg-${isRed ? 'red-600' : 'blue-700'} transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 border-2 flex items-center justify-center mb-8 transition-colors duration-500 ${isRed ? 'border-red-600 text-red-600 group-hover:border-white group-hover:text-white' : 'border-blue-700 text-blue-700 group-hover:border-white group-hover:text-white'}`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 group-hover:text-white transition-colors duration-500">{area.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed mb-8">
                    {area.desc}
                  </p>
                  <div className={`flex items-center text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-500 ${isRed ? 'text-red-600' : 'text-blue-700'}`}>
                    {t('Learn More')} <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export const ShevFloatingContact = ({ primaryColor }: { primaryColor: string }) => {
  const { t } = useTranslation();
  const bgClass = primaryColor === 'red' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-700 hover:bg-blue-800';
  
  return (
    <motion.a href="tel:2814298083"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center gap-3 ${bgClass} text-white px-6 py-4 shadow-2xl cursor-pointer w-full sm:w-auto`}
    >
      <MessageSquare className="w-5 h-5" />
      <span className="font-bold uppercase tracking-widest text-sm">{t('Request Evaluation')}</span>
    </motion.a>
  );
};

export const ShevFooter = () => {
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
