import codecs
import re

content = codecs.open('src/components/ShevBlocks.tsx', 'r', 'utf-8').read()

if 'import { TikTokEmbed, InstagramEmbed } from' not in content:
    content = content.replace(\"import { Building2, FileCheck2, Briefcase, GraduationCap, Globe, Play, ChevronRight, Star } from 'lucide-react';\", \"import { Building2, FileCheck2, Briefcase, GraduationCap, Globe, Play, ChevronRight, Star } from 'lucide-react';\nimport { TikTokEmbed, InstagramEmbed } from 'react-social-media-embed';\")

new_component = '''export const ShevSuccessStories = ({ primaryColor, videoUrls }: { primaryColor: string, videoUrls?: string[] }) => {
  const { t } = useTranslation();
  const isRed = primaryColor === 'red';
  const highlightHex = isRed ? '#dc2626' : '#1d4ed8';

  const defaultVideos = [
    \"https://www.tiktok.com/@tiktok/video/7106594312292453675\",
    \"https://www.instagram.com/reel/C8q_o3dO0A1/\"
  ];
  
  const videos = videoUrls || defaultVideos;

  return (
    <section className=\"py-16 lg:py-24 px-6 sm:px-8 lg:px-16 bg-slate-900 text-white relative\">
      <div className=\"max-w-7xl mx-auto\">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=\"mb-12 sm:mb-16 flex items-center justify-between border-b border-slate-700 pb-6\"
        >
          <h2 className=\"text-3xl sm:text-4xl md:text-5xl font-serif font-bold\">
            {t('Success Stories')}
          </h2>
          <div className=\"w-16 h-1 hidden md:block\" style={{ backgroundColor: highlightHex }} />
        </motion.div>
        
        <div className=\"grid md:grid-cols-2 gap-8 mb-16 justify-items-center\">
          {videos.map((url, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className=\"w-full max-w-[325px] flex items-center justify-center relative\"
            >
              {url.includes('tiktok.com') ? (
                <TikTokEmbed url={url} width={325} />
              ) : url.includes('instagram.com') ? (
                <InstagramEmbed url={url} width={325} />
              ) : (
                <div className=\"w-full aspect-[9/16] bg-slate-800 flex items-center justify-center border border-slate-700\">
                  <span className=\"text-slate-500\">Invalid URL</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className=\"grid md:grid-cols-2 gap-12\">
'''

content = re.sub(r'export const ShevSuccessStories = \(\{ primaryColor \}: \{ primaryColor: string \}\) => \{.*?<div className="grid md:grid-cols-2 gap-12">', new_component, content, flags=re.DOTALL)

codecs.open('src/components/ShevBlocks.tsx', 'w', 'utf-8').write(content)
