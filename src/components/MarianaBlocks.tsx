import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type MarianaPalette = 'crimson' | 'emerald';

export interface MarianaTheme {
  ambientLight: string;
  titleGradient: string;
  heroBar: string;
  focusRing: string;
  heroBtn: string;
  bannerBg: string;
  bannerText: string;
  bannerDot: string;
  divider: string;
  whyBg: string;
  whyTitle: string;
  whyNum: string;
  bioBlob: string;
  bioFrame: string;
  bioTag: string;
  bioLine: string;
  bioBtn: string;
  storiesStars: string;
  storiesCardBorder: string;
  storiesAvatar: string;
  faqChevronActive: string;
  faqChevronIcon: string;
  ctaOverlay: string;
  ctaSubtitle: string;
  ctaBtn: string;
}

export const getMarianaTheme = (palette: MarianaPalette = 'crimson'): MarianaTheme => {
  if (palette === 'emerald') {
    return {
      ambientLight: 'bg-emerald-900/30',
      titleGradient: 'from-emerald-400 via-teal-300 to-cyan-200',
      heroBar: 'from-emerald-600 to-teal-400',
      focusRing: 'focus:border-emerald-400 focus:ring-emerald-400',
      heroBtn: 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-emerald-950/50',
      bannerBg: 'bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950',
      bannerText: 'from-emerald-200 to-white',
      bannerDot: 'bg-emerald-400',
      divider: 'from-emerald-600 to-teal-400',
      whyBg: 'bg-teal-50/60',
      whyTitle: 'text-emerald-950',
      whyNum: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      bioBlob: 'bg-emerald-50',
      bioFrame: 'border-emerald-500/20',
      bioTag: 'text-emerald-600',
      bioLine: 'bg-emerald-600',
      bioBtn: 'border-emerald-300 text-emerald-700 hover:bg-emerald-50',
      storiesStars: 'text-emerald-500',
      storiesCardBorder: 'border-emerald-100',
      storiesAvatar: 'bg-emerald-100 text-emerald-700',
      faqChevronActive: 'bg-emerald-600 border-emerald-600',
      faqChevronIcon: 'text-emerald-300',
      ctaOverlay: 'bg-emerald-950/85',
      ctaSubtitle: 'text-emerald-200',
      ctaBtn: 'from-emerald-600 to-teal-400 hover:from-emerald-500 hover:to-teal-300 shadow-emerald-950/50',
    };
  }

  // Crimson palette for Personal Injury
  return {
    ambientLight: 'bg-rose-900/30',
    titleGradient: 'from-rose-400 via-rose-300 to-amber-200',
    heroBar: 'from-rose-600 to-amber-500',
    focusRing: 'focus:border-rose-400 focus:ring-rose-400',
    heroBtn: 'bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 hover:from-rose-600 hover:to-amber-500 shadow-rose-950/50',
    bannerBg: 'bg-gradient-to-r from-stone-950 via-rose-950 to-stone-950',
    bannerText: 'from-amber-200 to-white',
    bannerDot: 'bg-rose-500',
    divider: 'from-rose-600 to-amber-400',
    whyBg: 'bg-stone-100/70',
    whyTitle: 'text-stone-900',
    whyNum: 'bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
    bioBlob: 'bg-rose-50',
    bioFrame: 'border-rose-500/20',
    bioTag: 'text-rose-600',
    bioLine: 'bg-rose-600',
    bioBtn: 'border-rose-300 text-rose-700 hover:bg-rose-50',
    storiesStars: 'text-amber-400',
    storiesCardBorder: 'border-rose-100',
    storiesAvatar: 'bg-rose-100 text-rose-700',
    faqChevronActive: 'bg-rose-600 border-rose-600',
    faqChevronIcon: 'text-rose-300',
    ctaOverlay: 'bg-stone-950/90',
    ctaSubtitle: 'text-rose-200',
    ctaBtn: 'from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-rose-950/50',
  };
};

export const MarianaHero = ({ 
  title, 
  subtitle, 
  imageSrc, 
  palette = 'crimson' 
}: { 
  title: string, 
  subtitle: string, 
  imageSrc: string, 
  palette?: MarianaPalette 
}) => {
  const { t } = useTranslation();
  const theme = getMarianaTheme(palette);

  return (
    <section id="contact-form" className="relative flex flex-col lg:flex-row min-h-[85vh] bg-slate-950 text-white overflow-hidden">
      {/* Background ambient gradient */}
      <div className={`absolute top-0 left-0 w-[500px] h-[500px] ${theme.ambientLight} rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none`} />
      
      <div className="flex-1 flex flex-col justify-center px-6 py-16 pt-20 sm:p-8 lg:p-16 xl:p-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-6">
            <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme.titleGradient}`}>
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
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.heroBar}`} />
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">{t('Contact Us', 'Contáctenos')}</h3>
          <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <input type="text" placeholder={t('First Name', 'Nombre')} className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 ${theme.focusRing} focus:outline-none focus:ring-1 transition-colors text-white placeholder-gray-400`} />
              <input type="text" placeholder={t('Last Name', 'Apellido')} className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 ${theme.focusRing} focus:outline-none focus:ring-1 transition-colors text-white placeholder-gray-400`} />
            </div>
            <input type="email" placeholder={t('Email', 'Correo')} className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 ${theme.focusRing} focus:outline-none focus:ring-1 transition-colors text-white placeholder-gray-400`} />
            <input type="tel" placeholder={t('Phone', 'Teléfono')} className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 ${theme.focusRing} focus:outline-none focus:ring-1 transition-colors text-white placeholder-gray-400`} />
            <button className={`relative overflow-hidden w-full p-4 text-white font-bold rounded-lg shadow-lg ${theme.heroBtn} transition-all duration-300 hover:-translate-y-1 group`}>
              <span className="relative z-10">{t('Submit', 'Enviar Consulta')}</span>
              {/* Shine/Sweep Animation */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40 group-hover:animate-[shine_1.5s_ease-in-out_infinite] animate-[shine_3s_ease-in-out_infinite]"></div>
            </button>
            <p className="text-xs text-center text-gray-500">
              * Consulta 100% confidencial y sin compromiso
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
          alt="Abogada Mariana Ehrenberg" 
          className="absolute inset-0 w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/20 lg:to-transparent" />
      </motion.div>
    </section>
  );
};

export const MarianaBanner = ({ text, palette = 'crimson' }: { text: string, palette?: MarianaPalette }) => {
  const theme = getMarianaTheme(palette);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${theme.bannerBg} py-6 relative flex w-full border-y border-white/5`}>
      <motion.div 
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 45 
        }}
      >
        {[1, 2].map((groupIndex) => (
          <div key={groupIndex} className="flex space-x-16 px-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12 sm:space-x-16">
                <h2 className={`text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${theme.bannerText}`}>
                  {text}
                </h2>
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${theme.bannerDot}`} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const MarianaSuccessStories = ({ videoUrls, palette = 'crimson' }: { videoUrls?: string[], palette?: MarianaPalette }) => {
  const { t } = useTranslation();
  const theme = getMarianaTheme(palette);

  const defaultVideos = [
    "https://www.tiktok.com/@tuabogadamariana/video/7691304427679960334",
    "https://www.tiktok.com/@tuabogadamariana/video/7694036840344489247"
  ];
  const videos = videoUrls || defaultVideos;

  const getEmbedUrl = (url: string) => {
    if (url.includes('tiktok.com')) {
      const videoId = url.split('/video/')[1]?.split('?')[0];
      return videoId ? `https://www.tiktok.com/player/v1/${videoId}?music_info=1&description=1` : null;
    }
    if (url.includes('instagram.com')) {
      const cleanUrl = url.split('?')[0].replace(/\/$/, '');
      return `${cleanUrl}/embed`;
    }
    return null;
  };

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-slate-50 text-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            {t('Success Stories', 'Casos de Éxito')}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${theme.divider} mx-auto rounded-full`} />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20 justify-items-center">
          {videos.map((url, i) => {
            const embedUrl = getEmbedUrl(url);
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full max-w-[325px] flex justify-center relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
              >
                {embedUrl ? (
                  <iframe 
                    src={embedUrl}
                    className="w-full h-[600px] sm:h-[700px] border-0"
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media;"
                  />
                ) : (
                  <div className="w-full h-[600px] flex items-center justify-center bg-slate-100">
                    <span className="text-slate-500">Video no disponible</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              whileHover={{ y: -5 }}
              className={`bg-white p-8 rounded-2xl shadow-lg ${theme.storiesCardBorder} border transition-all duration-300`}
            >
              <div className={`flex ${theme.storiesStars} mb-6 space-x-1`}>
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed">
                {t('Client Testimonial', '"El equipo de Mariana cambió mi vida. Fueron muy profesionales y siempre estuvieron ahí para responder a mis preguntas. Definitivamente los recomiendo a todos."')}
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${theme.storiesAvatar} rounded-full flex items-center justify-center font-bold mr-4`}>
                  C{i}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t('Satisfied Client', 'Cliente Satisfecho')} {i}</div>
                  <div className="text-sm text-gray-500">{t('Texas, USA', 'Texas, EE. UU.')}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MarianaBiography = ({ 
  name, 
  bio, 
  imageSrc, 
  palette = 'crimson' 
}: { 
  name: string, 
  bio: string, 
  imageSrc: string, 
  palette?: MarianaPalette 
}) => {
  const { t } = useTranslation();
  const theme = getMarianaTheme(palette);

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className={`absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] ${theme.bioBlob} rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none`} />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl flex-shrink-0 relative group"
        >
          <img src={imageSrc} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className={`absolute inset-0 border-4 ${theme.bioFrame} rounded-[2rem] z-10 pointer-events-none`} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
            <div className={`h-px w-8 sm:w-12 ${theme.bioLine}`} />
            <h2 className={`text-xs sm:text-sm uppercase tracking-widest font-bold ${theme.bioTag}`}>
              {t('About the Attorney', 'Sobre la Abogada')}
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-gray-900">
            {t('Meet', 'Conozca a')} <span className="font-bold">{name}</span>
          </h3>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            {bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          
          <button className={`mt-10 px-8 py-4 rounded-full border ${theme.bioBtn} font-semibold transition-colors duration-300`}>
            {t('Read Full Profile', 'Conocer Más')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export const MarianaFAQ = ({ questions, palette = 'crimson' }: { questions: {q: string, a: string}[], palette?: MarianaPalette }) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const theme = getMarianaTheme(palette);

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Frequently Asked Questions', 'Preguntas Frecuentes')}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${theme.divider} mx-auto rounded-full`} />
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
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? `rotate-180 ${theme.faqChevronActive} text-white` : ''}`}>
                  <ChevronDown className={`w-5 h-5 ${openIndex === i ? 'text-white' : theme.faqChevronIcon}`} />
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
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed">
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

export const MarianaWhyChooseUs = ({ points, palette = 'crimson' }: { points: { title: string, desc: string }[], palette?: MarianaPalette }) => {
  const { t } = useTranslation();
  const theme = getMarianaTheme(palette);

  return (
    <section className={`py-16 lg:py-24 px-6 sm:px-8 lg:px-16 ${theme.whyBg} relative overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme.whyTitle}`}>
            {t("Why Choose Us?", "¿Por Qué Elegirnos?")}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${theme.divider} mx-auto rounded-full`} />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 mx-auto ${theme.whyNum} rounded-full flex items-center justify-center font-bold text-2xl mb-6 transition-colors duration-300`}>
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

export const MarianaCTA = ({ palette = 'crimson' }: { palette?: MarianaPalette }) => {
  const { t } = useTranslation();
  const theme = getMarianaTheme(palette);
  
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
          src="/images/pi/form-bg.png" 
          alt="CTA Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className={`absolute inset-0 ${theme.ctaOverlay} backdrop-blur-sm`} />
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t("Schedule your consultation", "Agende Su Consulta")}
        </h2>
        <p className={`text-xl ${theme.ctaSubtitle} mb-10 max-w-2xl mx-auto`}>
          {t("Don't wait any longer. Your future and peace of mind are our priority. We are here to guide you every step of the process.", "No espere más. Su tranquilidad y sus derechos son nuestra prioridad. Estamos aquí para guiarle en cada paso del proceso.")}
        </p>
        <a 
          href="#contact-form" 
          onClick={scrollToForm}
          className={`inline-block relative overflow-hidden px-10 py-5 text-white font-bold text-lg rounded-full shadow-lg bg-gradient-to-r ${theme.ctaBtn} transition-all duration-300 hover:-translate-y-1 group`}
        >
          <span className="relative z-10">{t("Schedule Today", "Agendar Consulta")}</span>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40 group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
        </a>
      </motion.div>
    </section>
  );
};
