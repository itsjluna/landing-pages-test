import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Play } from 'lucide-react';

export const ShevHero = ({ title, subtitle, imageSrc, primaryColor }: { title: string, subtitle: string, imageSrc: string, primaryColor: string }) => {
  const { t } = useTranslation();
  const isRed = primaryColor === 'red';
  
  return (
    <section className="relative flex flex-col lg:flex-row min-h-[85vh] bg-slate-50 text-slate-900 border-b-8 border-slate-900">
      <div className="flex-1 flex flex-col justify-center px-6 py-16 pt-20 sm:p-8 lg:p-16 xl:p-24 z-10 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-12 h-1 bg-${isRed ? 'red-600' : 'blue-700'}`} />
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-slate-500">
              Shev Law Group
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-slate-900">
            {title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-slate-600 leading-relaxed max-w-2xl border-l-4 pl-4" style={{ borderColor: isRed ? '#dc2626' : '#1d4ed8' }}>
            {subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-transparent border-t-8 border-b-2 border-slate-900 py-8 max-w-xl relative mt-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-8 font-serif uppercase tracking-widest text-slate-900">{t('Request a Consultation')}</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder={t('First Name')} className="w-full py-2 bg-transparent border-b border-slate-400 focus:outline-none focus:border-slate-900 transition-colors rounded-none placeholder-slate-500 font-serif" />
              <input type="text" placeholder={t('Last Name')} className="w-full py-2 bg-transparent border-b border-slate-400 focus:outline-none focus:border-slate-900 transition-colors rounded-none placeholder-slate-500 font-serif" />
            </div>
            <input type="email" placeholder={t('Email Address')} className="w-full py-2 bg-transparent border-b border-slate-400 focus:outline-none focus:border-slate-900 transition-colors rounded-none placeholder-slate-500 font-serif" />
            <input type="tel" placeholder={t('Phone Number')} className="w-full py-2 bg-transparent border-b border-slate-400 focus:outline-none focus:border-slate-900 transition-colors rounded-none placeholder-slate-500 font-serif" />
            
            <div className="pt-4">
              <button 
                className="relative w-full p-4 text-white font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-slate-900 rounded-none overflow-hidden group"
                style={{ backgroundColor: isRed ? '#dc2626' : '#1d4ed8' }}
              >
                <span className="relative z-10">{t('Submit')}</span>
                <div className="absolute inset-0 w-full h-full bg-slate-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 relative min-h-[400px] sm:min-h-[500px] lg:min-h-full lg:w-1/2 order-first lg:order-last"
      >
        <img 
          src={imageSrc} 
          alt="Shev Law Group" 
          className="absolute inset-0 w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-slate-900/10" />
      </motion.div>
    </section>
  );
};

export const ShevBanner = ({ text, color }: { text: string, color: string }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-6 relative flex w-full border-y border-slate-200" style={{ backgroundColor: color }}>
      <motion.div 
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 40 
        }}
      >
        {[1, 2].map((groupIndex) => (
          <div key={groupIndex} className="flex space-x-12 sm:space-x-16 px-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12 sm:space-x-16">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] text-white">
                  {text}
                </h2>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/50 transform rotate-45" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const ShevSuccessStories = ({ primaryColor }: { primaryColor: string }) => {
  const { t } = useTranslation();
  const isRed = primaryColor === 'red';
  const highlightHex = isRed ? '#dc2626' : '#1d4ed8';

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 flex items-center justify-between border-b border-slate-700 pb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            {t('Success Stories')}
          </h2>
          <div className="w-16 h-1 hidden md:block" style={{ backgroundColor: highlightHex }} />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-video bg-slate-800 flex items-center justify-center relative overflow-hidden group border border-slate-700 hover:border-slate-500 transition-colors"
            >
              <img src={i === 1 ? "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} alt="Video" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale"/>
              
              <div className="z-10 w-20 h-20 bg-slate-900/80 border border-slate-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300" style={{ borderLeftColor: highlightHex, borderLeftWidth: '4px' }}>
                <Play className="text-white w-8 h-8 ml-1" fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {[
              {
                id: "01",
                matter: "Commercial Dispute / Breach of Contract",
                issue: "Client faced a hostile takeover attempt and breach of fiduciary duty by a minority shareholder, risking complete dissolution of the enterprise.",
                action: "Initiated emergency injunctive relief in Federal Court, followed by aggressive discovery and a 4-month intense litigation strategy.",
                result: "$12.5M Verdict and complete retention of corporate assets."
              },
              {
                id: "02",
                matter: "Catastrophic Workplace Injury",
                issue: "Negligent third-party contractor caused severe scaffolding collapse resulting in permanent disability for our client.",
                action: "Bypassed standard workers' compensation limits by proving gross negligence and filing a multi-defendant third-party liability suit.",
                result: "$8.2M Settlement reached one week prior to trial."
              }
            ].map((caseStudy, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-slate-800 border-l-4 transition-colors hover:bg-slate-700/80 p-8 sm:p-10 flex flex-col md:flex-row gap-8"
                style={{ borderLeftColor: highlightHex }}
              >
                <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-slate-700 pb-6 md:pb-0 md:pr-8">
                  <div className="text-4xl font-serif font-bold text-slate-600 mb-2">{caseStudy.id}</div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-widest leading-tight">{caseStudy.matter}</h4>
                </div>
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: highlightHex }}>The Issue</h5>
                    <p className="text-slate-300 font-serif leading-relaxed">{caseStudy.issue}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: highlightHex }}>Our Action</h5>
                    <p className="text-slate-300 font-serif leading-relaxed">{caseStudy.action}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <h5 className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-white">The Result</h5>
                    <p className="text-2xl font-serif font-bold text-white">{caseStudy.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export const ShevBiography = ({ name, bio, imageSrc, primaryColor }: { name: string, bio: string, imageSrc: string, primaryColor: string }) => {
  const { t } = useTranslation();
  const highlightClass = primaryColor === 'red' ? 'text-red-600' : 'text-blue-700';
  const bgClass = primaryColor === 'red' ? 'bg-red-600' : 'bg-blue-700';

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full sm:w-80 lg:w-[400px] h-[400px] sm:h-[500px] flex-shrink-0 relative group"
        >
          <img src={imageSrc} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-300" />
          <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${bgClass} z-[-1]`} />
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-slate-900 z-[-1]" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:mt-8 flex-1"
        >
          <h2 className={`text-sm uppercase tracking-[0.2em] font-bold mb-4 ${highlightClass}`}>
            {t('About the Attorney')}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-8 border-b-4 border-slate-900 pb-4 inline-block">
            {name}
          </h3>
          <div className="text-lg text-slate-700 leading-relaxed space-y-6 text-justify font-serif">
            {bio.split('\n\n').map((paragraph, i) => (
              <p key={i} className={i === 0 ? "first-letter:text-6xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const ShevFAQ = ({ questions, primaryColor }: { questions: {q: string, a: string}[], primaryColor: string }) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isRed = primaryColor === 'red';

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-slate-900">
            {t('Frequently Asked Questions')}
          </h2>
          <p className="text-slate-500 mb-6">Clear answers to complex legal matters.</p>
          <div className={`w-12 h-1 bg-${isRed ? 'red-600' : 'blue-700'}`} />
        </motion.div>

        <div className="lg:w-2/3">
          {questions.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-slate-200"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors px-4 group"
              >
                <h4 className="text-lg md:text-xl font-bold font-serif pr-8 group-hover:text-slate-600 transition-colors">{faq.q}</h4>
                <div className={`flex-shrink-0 w-8 h-8 border flex items-center justify-center transition-colors duration-300 ${openIndex === i ? (isRed ? 'bg-red-600 border-red-600 text-white' : 'bg-blue-700 border-blue-700 text-white') : 'border-slate-300 text-slate-400'}`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 pb-6 pt-2 text-slate-600 leading-relaxed border-l-2 ml-4" style={{ borderColor: isRed ? '#dc2626' : '#1d4ed8' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
