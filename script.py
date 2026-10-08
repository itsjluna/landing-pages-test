import codecs
import re

content = codecs.open('src/components/MarianaBlocks.tsx', 'r', 'utf-8').read()

new_component = '''export const MarianaSuccessStories = ({ videoUrls }: { videoUrls?: string[] }) => {
  const { t } = useTranslation();

  const defaultVideos = [
    "https://www.tiktok.com/@tiktok/video/7106594312292453675",
    "https://www.instagram.com/reel/C8q_o3dO0A1/"
  ];
  const videos = videoUrls || defaultVideos;

  const getEmbedUrl = (url: string) => {
    if (url.includes('tiktok.com')) {
      const videoId = url.split('/video/')[1]?.split('?')[0];
      return videoId ? `https://www.tiktok.com/embed/v2/${videoId}` : null;
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-teal-950">
            {t('Success Stories')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full" />
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
                    <span className="text-slate-500">Invalid URL</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
'''

content = re.sub(r'export const MarianaSuccessStories = \(\{ videoUrls \}: \{ videoUrls\?: string\[\] \}\) => \{.*?<div className="grid md:grid-cols-3 gap-8">', new_component, content, flags=re.DOTALL)
codecs.open('src/components/MarianaBlocks.tsx', 'w', 'utf-8').write(content)
