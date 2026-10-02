import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
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
            Practice Areas
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
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
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
  const bgClass = primaryColor === 'red' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-700 hover:bg-blue-800';
  
  return (
    <motion.a
      href="#"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center gap-3 ${bgClass} text-white px-6 py-4 shadow-2xl cursor-pointer w-full sm:w-auto`}
    >
      <MessageSquare className="w-5 h-5" />
      <span className="font-bold uppercase tracking-widest text-sm">Free Evaluation</span>
    </motion.a>
  );
};

export const ShevFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 sm:px-8 lg:px-16 border-t-[8px] border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-8 h-8 bg-white" />
            <h2 className="text-2xl font-serif font-bold text-white tracking-widest uppercase">Shev Law Group</h2>
          </div>
          <p className="mb-8 leading-relaxed max-w-sm border-l-2 border-slate-700 pl-4">
            Aggressive representation. Elite legal strategy. We demand justice and protect your enterprise.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors cursor-pointer text-slate-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors cursor-pointer text-slate-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors cursor-pointer text-slate-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Practice Areas</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/shev/personal-injury" className="hover:text-white transition-colors uppercase tracking-wider">Personal Injury</Link></li>
            <li><Link to="/shev/immigration" className="hover:text-white transition-colors uppercase tracking-wider">Immigration</Link></li>
            <li><Link to="/shev/business" className="hover:text-white transition-colors uppercase tracking-wider">Business Law</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Headquarters</h3>
          <address className="not-italic space-y-3 text-sm">
            <p>500 Corporate Plaza</p>
            <p>Dallas, TX 75201</p>
            <p className="text-white font-bold mt-4 tracking-widest">(800) 555-SHEV</p>
            <p>contact@shevlaw.com</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 text-xs text-slate-600 leading-relaxed text-justify">
        <p className="mb-4">
          <strong>LEGAL DISCLAIMER:</strong> The information contained in this website is provided for informational purposes only, and should not be construed as legal advice on any matter. The transmission and receipt of information contained on this Web site, in whole or in part, or communication with Shev Law Group via the Internet or e-mail through this website does not constitute or create a lawyer-client relationship between us and any recipient. 
        </p>
        <p>
          Prior results do not guarantee a similar outcome. Each case is different and must be evaluated on its own merits. The firm's attorneys are licensed to practice in the state of Texas unless otherwise indicated. © {new Date().getFullYear()} Shev Law Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
