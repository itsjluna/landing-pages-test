import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, Scale, ShieldAlert, HeartHandshake, Briefcase, Globe, FileCheck2, Building2 } from 'lucide-react';
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
      href="#"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl cursor-pointer"
      style={{ boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.5)' }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-bold hidden sm:inline">{t('Free Consultation')}</span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></span>
    </motion.a>
  );
};

// --- Premium Legal Footer ---
export const MarianaFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 md:py-16 px-6 sm:px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6">Tu Abogada Mariana</h2>
          <p className="mb-6 leading-relaxed max-w-sm">
            {t('Mariana Footer Desc')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('Quick Links')}</h3>
          <ul className="space-y-3">
            <li><Link to="/mariana/personal-injury" className="hover:text-teal-400 transition-colors">{t('Personal Injury')}</Link></li>
            <li><Link to="/mariana/immigration" className="hover:text-teal-400 transition-colors">{t('Immigration')}</Link></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">{t('Success Stories')}</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">{t('Contact Us')}</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('Main Office')}</h3>
          <address className="not-italic space-y-3">
            <p>1234 Legal Avenue, Suite 500</p>
            <p>Houston, TX 77002</p>
            <p className="text-teal-400 font-bold mt-4">(555) 123-4567</p>
            <p>info@abogadamariana.com</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 text-xs text-gray-600 leading-relaxed text-justify">
        <p className="mb-4">
          {t('Mariana Legal Disclaimer')}
        </p>
        <p>
          {t('Mariana Footer Copyright')}
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
