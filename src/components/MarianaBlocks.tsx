import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

export const MarianaHero = ({ title, subtitle, imageSrc }: { title: string, subtitle: string, imageSrc: string }) => {
  const { t } = useTranslation();
  return (
    <section id="contact-form" className="relative flex flex-col lg:flex-row min-h-[85vh] bg-[#0a0514] text-white overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="flex-1 flex flex-col justify-center px-6 py-16 pt-20 sm:p-8 lg:p-16 xl:p-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-6">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
              {title.split(' ')[0]}
            </span>{' '}
            {title.substring(title.indexOf(' ') + 1)}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-gray-300 font-light leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">{t('Contact Us')}</h3>
          <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <input type="text" placeholder={t('First Name')} className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors text-white placeholder-gray-400" />
              <input type="text" placeholder={t('Last Name')} className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors text-white placeholder-gray-400" />
            </div>
            <input type="email" placeholder={t('Email')} className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors text-white placeholder-gray-400" />
            <input type="tel" placeholder={t('Phone')} className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors text-white placeholder-gray-400" />
            <button className="relative overflow-hidden w-full p-4 text-white font-bold rounded-lg shadow-lg shadow-purple-900/50 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 transition-all duration-300 hover:-translate-y-1 group">
              <span className="relative z-10">{t('Submit')}</span>
              {/* Shine/Sweep Animation */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40 group-hover:animate-[shine_1.5s_ease-in-out_infinite] animate-[shine_3s_ease-in-out_infinite]"></div>
            </button>
            <p className="text-xs text-center text-gray-500">
              * HighLevel form embed placeholder
            </p>
          </form>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative min-h-[400px] sm:min-h-[500px] lg:min-h-full order-first lg:order-last"
      >
        <img 
          src={imageSrc} 
          alt="Attorney Mariana" 
          className="absolute inset-0 w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/40 to-transparent lg:bg-gradient-to-r lg:from-[#0a0514] lg:via-[#0a0514]/20 lg:to-transparent" />
      </motion.div>
    </section>
  );
};

export const MarianaBanner = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gradient-to-r from-purple-900 to-purple-950 py-6 relative flex w-full">
      <motion.div 
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 45 
        }}
      >
        {/* Create two identical groups that take up enough space to seamless loop */}
        {[1, 2].map((groupIndex) => (
          <div key={groupIndex} className="flex space-x-16 px-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12 sm:space-x-16">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">
                  {text}
                </h2>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const MarianaSuccessStories = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-[#f8f7fa] text-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-purple-950">
            {t('Success Stories')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl cursor-pointer"
            >
              <img src={i === 1 ? "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} alt="Video" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500"/>
              
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-500">
                <Play className="text-white w-8 h-8 ml-1" fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.1), 0 10px 10px -5px rgba(147, 51, 234, 0.04)" }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 transition-all duration-300"
            >
              <div className="flex text-purple-500 mb-6 space-x-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed">
                "El equipo de Mariana cambió mi vida. Fueron muy profesionales y siempre estuvieron ahí para responder a mis dudas. Definitivamente los recomiendo a todos."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold mr-4">
                  C{i}
                </div>
                <div>
                  <div className="font-bold text-gray-900">Cliente Satisfecho {i}</div>
                  <div className="text-sm text-gray-500">Texas, EE.UU.</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MarianaBiography = ({ name, bio, imageSrc }: { name: string, bio: string, imageSrc: string }) => {
  const { t } = useTranslation();
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-purple-50 rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl flex-shrink-0 relative group"
        >
          <img src={imageSrc} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 border-4 border-purple-500/20 rounded-[2rem] z-10 pointer-events-none" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
            <div className="h-px w-8 sm:w-12 bg-purple-600" />
            <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-purple-600">
              {t('About the Attorney')}
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-gray-900">
            Conoce a <span className="font-bold">{name}</span>
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            {bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          
          <button className="mt-10 px-8 py-4 rounded-full border border-purple-200 text-purple-700 font-semibold hover:bg-purple-50 transition-colors duration-300">
            Leer Perfil Completo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export const MarianaFAQ = ({ questions }: { questions: {q: string, a: string}[] }) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-[#0a0514] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Frequently Asked Questions')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {questions.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none hover:bg-white/[0.02] transition-colors"
              >
                <h4 className="text-lg md:text-xl font-medium pr-8">{faq.q}</h4>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-purple-500/50 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-purple-600 border-purple-600' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-purple-300" />
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
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
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

export const MarianaWhyChooseUs = ({ points }: { points: { title: string, desc: string }[] }) => {
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-purple-950">
            ¿Por qué elegirnos?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg shadow-purple-900/5 text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MarianaCTA = () => {
  const { t } = useTranslation();
  
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 px-6 sm:px-8 lg:px-16 overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="CTA Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-purple-950/80 backdrop-blur-sm" />
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Programe su consulta gratuita
        </h2>
        <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
          No espere más. Su futuro y su tranquilidad son nuestra prioridad. Estamos aquí para guiarle en cada paso del proceso.
        </p>
        <a 
          href="#contact-form" 
          onClick={scrollToForm}
          className="inline-block relative overflow-hidden px-10 py-5 text-white font-bold text-lg rounded-full shadow-lg shadow-purple-900/50 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 transition-all duration-300 hover:-translate-y-1 group"
        >
          <span className="relative z-10">Agenda tu Cita Hoy</span>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40 group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
        </a>
      </motion.div>
    </section>
  );
};
