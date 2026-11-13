import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, Scale, ShieldAlert, Globe, Briefcase, Phone, Mail, MapPin } from 'lucide-react';
import type { MarianaPalette } from './MarianaBlocks';

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

export const MarianaStats = ({ 
  stats, 
  palette = 'crimson' 
}: { 
  stats: { value: number, suffix: string, label: string }[], 
  palette?: MarianaPalette 
}) => {
  const isEmerald = palette === 'emerald';
  const numberClass = isEmerald ? 'text-emerald-300' : 'text-amber-400';
  const labelClass = isEmerald ? 'text-emerald-100 opacity-80' : 'text-rose-200 opacity-80';
  const bgClass = isEmerald ? 'bg-slate-900' : 'bg-stone-900';

  return (
    <section className={`py-16 px-6 sm:px-8 ${bgClass} text-white relative overflow-hidden border-y border-white/5`}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <h3 className={`text-5xl md:text-6xl font-bold ${numberClass} mb-2 font-serif`}>
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className={`text-lg md:text-xl ${labelClass} uppercase tracking-wider text-center`}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Practice Areas Grid ---
export const MarianaPracticeAreas = ({ 
  areas, 
  palette = 'crimson' 
}: { 
  areas: { title: string, desc: string, icon: any }[], 
  palette?: MarianaPalette 
}) => {
  const { t } = useTranslation();
  const isEmerald = palette === 'emerald';
  const dividerClass = isEmerald ? 'from-emerald-600 to-teal-400' : 'from-rose-600 to-amber-400';
  const iconClass = isEmerald 
    ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' 
    : 'bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white';
  const shadowClass = isEmerald ? 'hover:shadow-emerald-900/10' : 'hover:shadow-rose-900/10';

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
            {t('Practice Areas', 'Áreas de Práctica')}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${dividerClass} mx-auto rounded-full`} />
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
                className={`bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl ${shadowClass} transition-all duration-300 group`}
              >
                <div className={`w-16 h-16 ${iconClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
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
      <span className="font-bold hidden sm:inline">{t('Consulta por WhatsApp', 'Consulta por WhatsApp')}</span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></span>
    </motion.a>
  );
};

// --- Premium Legal Footer ---
export const MarianaFooter = ({ palette = 'crimson' }: { palette?: MarianaPalette }) => {
  const { t } = useTranslation();
  const isEmerald = palette === 'emerald';
  const borderTopClass = isEmerald ? 'border-emerald-950' : 'border-stone-900';
  const linkHover = isEmerald ? 'hover:text-emerald-300' : 'hover:text-rose-300';

  return (
    <footer className={`bg-slate-950 text-slate-400 py-16 px-6 sm:px-8 lg:px-16 border-t-[8px] ${borderTopClass}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        <div className="md:col-span-4">
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.about.title', 'Sobre Nosotros')}</h3>
          <p className="mb-6 leading-relaxed border-l-2 border-slate-700 pl-4 text-sm text-slate-400">
            {t('mariana.footer.about.desc', 'Tu Abogada Mariana ofrece servicios legales expertos con oficinas en Houston y Dallas. Nuestro equipo dedicado se compromete a brindar soluciones legales personalizadas para satisfacer sus necesidades únicas.')}
          </p>
          <address className="not-italic space-y-3 text-sm text-slate-400">
            <p className="flex items-center"><Phone className="w-4 h-4 mr-3" /> <a href="tel:2814298083" className={`${linkHover} transition-colors`}>(281) 429-8083</a></p>
            <p className="flex items-center"><Phone className="w-4 h-4 mr-3" /> <a href="tel:2149158835" className={`${linkHover} transition-colors`}>(214) 915-8835</a></p>
            <p className="flex items-center"><Mail className="w-4 h-4 mr-3" /> <a href="mailto:info@tuabogadamariana.com" className={`${linkHover} transition-colors`}>info@tuabogadamariana.com</a></p>
            <p className="flex items-start mt-4"><MapPin className="w-4 h-4 mr-3 mt-1 shrink-0" /> <span>2990 Richmond Ave Suite 205, Houston, TX 77098, USA</span></p>
            <p className="flex items-start"><MapPin className="w-4 h-4 mr-3 mt-1 shrink-0" /> <span>11532 Harry Hines Blvd. Suite A126, Dallas, TX 75229, USA</span></p>
          </address>
        </div>

        <div className="md:col-span-5">
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.guide.title', 'Guía Legal')}</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="https://tuabogadamariana.com/legal-guide/shev-law-group-the-personal-injury-law-firm-in-dallas-houston-you-can-trust/" className={`${linkHover} transition-colors leading-relaxed block`} target="_blank" rel="noreferrer">{t('footer.guide.1', 'Shev Law Group: La Firma de Abogados de Lesiones Personales en Dallas y Houston en la que Puede Confiar')}</a></li>
            <li><a href="https://tuabogadamariana.com/legal-guide/good-news-for-international-travelers-soon-they-be-able-to-pay-750-for-faster-us-visa-appointments/" className={`${linkHover} transition-colors leading-relaxed block`} target="_blank" rel="noreferrer">{t('footer.guide.2', 'Buenas Noticias para Viajeros Internacionales - Pronto Podrán Pagar $750 por Citas Más Rápidas')}</a></li>
            <li><a href="https://tuabogadamariana.com/immigration/trusted-immigration-attorneys-in-houston-dallas-shev-law-group/" className={`${linkHover} transition-colors leading-relaxed block`} target="_blank" rel="noreferrer">{t('footer.guide.3', 'Abogados de Inmigración de Confianza en Houston y Dallas')}</a></li>
            <li><a href="https://tuabogadamariana.com/legal-guide/us-deportation-and-removal/" className={`${linkHover} transition-colors leading-relaxed block`} target="_blank" rel="noreferrer">{t('footer.guide.4', 'Deportación y Remoción en EE. UU.')}</a></li>
            <li><a href="https://tuabogadamariana.com/immigration/how-criminal-defense-and-immigration-attorneys-can-collaborate-for-powerful-client-advocacy/" className={`${linkHover} transition-colors leading-relaxed block`} target="_blank" rel="noreferrer">{t('footer.guide.5', 'Cómo los Abogados de Defensa Criminal y de Inmigración Pueden Colaborar')}</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.practice.title', 'Áreas de Práctica')}</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="https://tuabogadamariana.com/immigration-lawyers/" className={`${linkHover} transition-colors uppercase tracking-wider block`} target="_blank" rel="noreferrer">{t('footer.practice.1', 'Inmigración')}</a></li>
            <li><a href="https://tuabogadamariana.com/business-formation-and-planning/business-transactions/" className={`${linkHover} transition-colors uppercase tracking-wider block`} target="_blank" rel="noreferrer">{t('footer.practice.2', 'Transacciones Comerciales')}</a></li>
            <li><a href="https://tuabogadamariana.com/business-formation-and-planning/asset-protection/" className={`${linkHover} transition-colors uppercase tracking-wider block`} target="_blank" rel="noreferrer">{t('footer.practice.3', 'Protección de Activos')}</a></li>
            <li><a href="https://tuabogadamariana.com/estate-planning-and-probate/" className={`${linkHover} transition-colors uppercase tracking-wider block`} target="_blank" rel="noreferrer">{t('footer.practice.4', 'Planificación Patrimonial')}</a></li>
            <li><a href="https://tuabogadamariana.com/real-estate-lawyers/" className={`${linkHover} transition-colors uppercase tracking-wider block`} target="_blank" rel="noreferrer">{t('footer.practice.5', 'Transacciones de Bienes Raíces')}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-xs text-slate-500 leading-relaxed text-justify">
        <p className="mb-4">
          {t('Mariana Legal Disclaimer', 'Esta página proporciona información general y no crea una relación abogado-cliente. Los resultados anteriores no garantizan un resultado similar. Cada asunto se evalúa según sus hechos individuales y la ley aplicable.')}
        </p>
        <p>
          {t('Mariana Footer Copyright', '© 2024 Tu Abogada Mariana. Todos los derechos reservados.')}
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
        <div className="flex items-center gap-2 text-white font-bold text-xl"><Scale className="w-8 h-8" /> TEXAS BAR COLLEGE</div>
        <div className="flex items-center gap-2 text-white font-bold text-xl"><Globe className="w-8 h-8" /> AS SEEN ON TV</div>
        <div className="flex items-center gap-2 text-white font-bold text-xl"><Briefcase className="w-8 h-8" /> AVVO 10.0</div>
      </div>
    </div>
  );
};
