import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero = ({ 
  title, subtitle, imageSrc, isDarkTheme, accentColor 
}: { 
  title: string, subtitle: string, imageSrc: string, isDarkTheme: boolean, accentColor: string 
}) => {
  const { t } = useTranslation();
  return (
    <section className={`flex flex-col md:flex-row min-h-[80vh] ${isDarkTheme ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="flex-1 flex flex-col justify-center p-8 lg:p-16">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4">{title}</h1>
        <p className="text-xl lg:text-2xl mb-8 opacity-90">{subtitle}</p>
        
        {/* HighLevel Form Placeholder */}
        <div className={`p-6 rounded-lg shadow-xl ${isDarkTheme ? 'bg-slate-800' : 'bg-white'}`}>
          <h3 className="text-xl font-bold mb-4">{t('Contact Us')}</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder={t('First Name')} className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black" style={{ '--tw-ring-color': accentColor } as any} />
              <input type="text" placeholder={t('Last Name')} className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black" style={{ '--tw-ring-color': accentColor } as any} />
            </div>
            <input type="email" placeholder={t('Email')} className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black" style={{ '--tw-ring-color': accentColor } as any} />
            <input type="tel" placeholder={t('Phone')} className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black" style={{ '--tw-ring-color': accentColor } as any} />
            <button className="w-full p-4 text-white font-bold rounded shadow-lg transition-transform hover:scale-[1.02]" style={{ backgroundColor: accentColor }}>
              {t('Submit')}
            </button>
            <p className="text-xs text-center opacity-70">
              * This is a HighLevel form embed placeholder
            </p>
          </form>
        </div>
      </div>
      <div className="flex-1 relative min-h-[400px]">
        <img 
          src={imageSrc} 
          alt="Attorney Hero" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
      </div>
    </section>
  );
};

export const Banner = ({ text, color }: { text: string, color: string }) => {
  return (
    <div className="py-16 px-4 text-center text-white shadow-inner" style={{ backgroundColor: color }}>
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
        {text}
      </h2>
    </div>
  );
};

export const SuccessStories = ({ isDarkTheme, accentColor }: { isDarkTheme: boolean, accentColor: string }) => {
  const { t } = useTranslation();
  return (
    <section className={`py-20 px-8 lg:px-16 ${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'}`}>
      <h2 className="text-4xl font-bold text-center mb-16" style={{ color: !isDarkTheme ? accentColor : 'white' }}>
        {t('Success Stories')}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-lg">
           <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video Placeholder" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
               <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-black border-b-8 border-b-transparent ml-1" />
             </div>
           </div>
        </div>
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-lg">
           <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video Placeholder" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
               <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-black border-b-8 border-b-transparent ml-1" />
             </div>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`p-8 rounded-lg shadow-md ${isDarkTheme ? 'bg-slate-700' : 'bg-slate-50'}`}>
            <div className="flex text-yellow-400 mb-4">
              {'★★★★★'}
            </div>
            <p className="italic mb-6 opacity-80">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            </p>
            <div className="font-bold">- Client Name {i}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Biography = ({ name, bio, imageSrc, isDarkTheme, accentColor }: { name: string, bio: string, imageSrc: string, isDarkTheme: boolean, accentColor: string }) => {
  const { t } = useTranslation();
  return (
    <section className={`py-20 px-8 lg:px-16 ${isDarkTheme ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl flex-shrink-0 border-4" style={{ borderColor: accentColor }}>
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-widest font-bold mb-2" style={{ color: accentColor }}>{t('About the Attorney')}</h2>
          <h3 className="text-4xl font-bold mb-6">{name}</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-6 whitespace-pre-line">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export const FAQ = ({ questions, isDarkTheme, accentColor }: { questions: {q: string, a: string}[], isDarkTheme: boolean, accentColor: string }) => {
  const { t } = useTranslation();
  return (
    <section className={`py-20 px-8 lg:px-16 ${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: !isDarkTheme ? accentColor : 'white' }}>
          {t('Frequently Asked Questions')}
        </h2>
        <div className="space-y-6">
          {questions.map((faq, i) => (
            <div key={i} className={`p-6 rounded-lg shadow ${isDarkTheme ? 'bg-slate-700' : 'bg-slate-50'} border-l-4`} style={{ borderColor: accentColor }}>
              <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
              <p className="opacity-80">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
