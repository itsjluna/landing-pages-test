import codecs
import re

content = codecs.open('src/components/ShevBlocks.tsx', 'r', 'utf-8').read()

new_component = '''export const ShevBiography = ({ attorneys, primaryColor }: { attorneys: { name: string, bio: string, imageSrc: string }[], primaryColor: string }) => {
  const { t } = useTranslation();
  const highlightClass = primaryColor === 'red' ? 'text-red-600' : 'text-blue-700';
  const bgClass = primaryColor === 'red' ? 'bg-red-600' : 'bg-blue-700';

  return (
    <section className=\"py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-slate-50 relative\">
      <div className=\"max-w-7xl mx-auto\">
        <h2 className={	ext-sm uppercase tracking-[0.2em] font-bold mb-4 \ text-center}>
          {t('Meet Our Team')}
        </h2>
        <div className=\"flex justify-center\">
          <h3 className=\"text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-16 text-center border-b-4 border-slate-900 pb-4 inline-block\">
            {t('About the Attorneys')}
          </h3>
        </div>

        <div className=\"flex flex-col gap-24\">
          {attorneys.map((attorney, idx) => (
            <div key={idx} className={lex flex-col \ gap-12 lg:gap-16 items-start relative z-10}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className=\"w-full sm:w-80 lg:w-[350px] h-[400px] sm:h-[450px] flex-shrink-0 relative group mx-auto lg:mx-0\"
              >
                <img src={attorney.imageSrc} alt={attorney.name} className=\"w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-300\" />
                <div className={bsolute -bottom-4 \ w-24 h-24 \ z-[-1]} />
                <div className={bsolute -top-4 \ w-24 h-24 border-t-4 border-slate-900 z-[-1] \} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className=\"flex-1\"
              >
                <h4 className=\"text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-6\">
                  {attorney.name}
                </h4>
                <div className=\"text-slate-600 text-base sm:text-lg leading-relaxed whitespace-pre-line border-l-4 border-slate-200 pl-6\">
                  {attorney.bio}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
'''

content = re.sub(r'export const ShevBiography =.*?export const ShevSuccessStories', new_component + '\nexport const ShevSuccessStories', content, flags=re.DOTALL)

codecs.open('src/components/ShevBlocks.tsx', 'w', 'utf-8').write(content)
