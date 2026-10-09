import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, Scale, ShieldAlert, HeartHandshake, Briefcase, Globe, FileCheck2, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Animated Counter ---
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
    <span ref={ref} className="flex items-center justify-center">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export const MarianaStats = ({ stats }: { stats: { value: number, suffix: string, label: string }[] }) => {
  return (
    <section className="py-16 px-6 sm:px-8 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-bold text-teal-300 mb-2 font-serif">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-lg md:text-xl text-teal-100 opacity-80 uppercase tracking-wider text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Practice Areas Grid ---
export const MarianaPracticeAreas = ({ areas }: { areas: { title: string, desc: string, icon: any }[] }) => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t('Practice Areas')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

// --- Floating Contact Button ---
export const MarianaFloatingContact = () => {
  const { t } = useTranslation();
  return (
    <motion.a
      href="https://wa.me/18329694319"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl cursor-pointer" target="_blank" rel="noreferrer"
      style={{ boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.5)' }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-bold hidden sm:inline">{t('Request Evaluation')}</span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></span>
    </motion.a>
  );
};

// --- Premium Legal Footer ---
export const MarianaFooter = () => {
    const { t } = useTranslation();
    return (
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 sm:px-8 lg:px-16 border-t-[8px] border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.about.title', 'About Us')}</h3>
            <p className="mb-6 leading-relaxed border-l-2 border-slate-700 pl-4 text-sm text-slate-400">
              {t('mariana.footer.about.desc', 'Tu Abogada Mariana provides expert legal services with offices in Houston and Dallas. Our dedicated team is committed to delivering personalized legal solutions to meet your unique needs.')}
            </p>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              <p className="flex items-center"><Phone className="w-4 h-4 mr-3" /> <a href="tel:2814298083" className="hover:text-white transition-colors">(281) 429-8083</a></p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-3" /> <a href="tel:2149158835" className="hover:text-white transition-colors">(214) 915-8835</a></p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-3" /> <a href="mailto:info@tuabogadamariana.com" className="hover:text-white transition-colors">info@tuabogadamariana.com</a></p>
              <p className="flex items-start mt-4"><MapPin className="w-4 h-4 mr-3 mt-1 shrink-0" /> <span>2990 Richmond Ave Suite 205, Houston, TX 77098, USA</span></p>
              <p className="flex items-start"><MapPin className="w-4 h-4 mr-3 mt-1 shrink-0" /> <span>11532 Harry Hines Blvd. Suite A126, Dallas, TX 75229, USA</span></p>
            </address>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.guide.title', 'Legal Guide')}</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="https://tuabogadamariana.com/legal-guide/shev-law-group-the-personal-injury-law-firm-in-dallas-houston-you-can-trust/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.1', 'Shev Law Group: The Personal Injury Law Firm in Dallas & Houston, You can Trust')}</a></li>
              <li><a href="https://tuabogadamariana.com/legal-guide/good-news-for-international-travelers-soon-they-be-able-to-pay-750-for-faster-us-visa-appointments/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.2', 'Good News for International Travelers - Soon They Be Able to Pay  for Faster US Visa Appointments!')}</a></li>
              <li><a href="https://tuabogadamariana.com/immigration/trusted-immigration-attorneys-in-houston-dallas-shev-law-group/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.3', 'Trusted Immigration Attorneys in Houston & Dallas')}</a></li>
              <li><a href="https://tuabogadamariana.com/legal-guide/us-deportation-and-removal/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.4', 'U.S Deportation and Removal')}</a></li>
              <li><a href="https://tuabogadamariana.com/immigration/how-criminal-defense-and-immigration-attorneys-can-collaborate-for-powerful-client-advocacy/" className="hover:text-white transition-colors leading-relaxed block" target="_blank" rel="noreferrer">{t('footer.guide.5', 'How Criminal Defense and Immigration Attorneys Can Collaborate for Powerful Client Advocacy')}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.practice.title', 'Practice Areas')}</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="https://tuabogadamariana.com/immigration-lawyers/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.1', 'Immigration')}</a></li>
              <li><a href="https://tuabogadamariana.com/business-formation-and-planning/business-transactions/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.2', 'Business Transactions')}</a></li>
              <li><a href="https://tuabogadamariana.com/business-formation-and-planning/asset-protection/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.3', 'Asset Protection')}</a></li>
              <li><a href="https://tuabogadamariana.com/estate-planning-and-probate/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.4', 'Estate Planning & Administration')}</a></li>
              <li><a href="https://tuabogadamariana.com/real-estate-lawyers/" className="hover:text-white transition-colors uppercase tracking-wider block" target="_blank" rel="noreferrer">{t('footer.practice.5', 'Real Estates Transactions')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-xs text-slate-600 leading-relaxed text-justify">
          <p className="mb-4">
            {t('Mariana Legal Disclaimer', 'This page provides general information and does not create an attorney-client relationship. Prior results do not guarantee a similar outcome. Every matter is evaluated according to its individual facts and applicable law.')}
          </p>
          <p>
            {t('Mariana Footer Copyright', '© 2024 Tu Abogada Mariana. All Rights Reserved.')}
          </p>
        </div>
      </footer>
    );
  };

// --- Trust Badges ---
export const MarianaTrustBadges = () => {
  return (
    <div className="bg-slate-950 border-t border-b border-white/5 py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2 text-white font-bold text-xl"><ShieldAlert className="w-8 h-8" /> SUPER LAWYERS</div>
        <div className="flex items-center gap-2 text-white font-bold text-xl"><Scale className="w-8 h-8" /> TEXAS BAR</div>
        <div className="flex items-center gap-2 text-white font-bold text-xl"><Globe className="w-8 h-8" /> AS SEEN ON TV</div>
        <div className="flex items-center gap-2 text-white font-bold text-xl"><Briefcase className="w-8 h-8" /> AVVO 10.0</div>
      </div>
    </div>
  );
};
