import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      const site = process.env.SITE || process.env.VITE_SITE || '';
      if (site.startsWith('mariana')) {
        return html
          .replace(/<title>.*?<\/title>/, '<title>Tu Abogada Mariana | Defensa Legal</title>')
          .replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="Tu Abogada Mariana: Representación legal dedicada para casos de inmigración y lesiones personales en Texas. Escuchamos su historia y defendemos sus derechos." />')
          .replace(/<meta property="og:title" content=".*?" \/>/, '<meta property="og:title" content="Tu Abogada Mariana | Defensa Legal" />')
          .replace(/<meta property="og:description" content=".*?" \/>/, '<meta property="og:description" content="Tu Abogada Mariana: Representación legal dedicada para casos de inmigración y lesiones personales en Texas. Escuchamos su historia y defendemos sus derechos." />')
          .replace(/<meta name="twitter:title" content=".*?" \/>/, '<meta name="twitter:title" content="Tu Abogada Mariana | Defensa Legal" />')
          .replace(/<meta name="twitter:description" content=".*?" \/>/, '<meta name="twitter:description" content="Tu Abogada Mariana: Representación legal dedicada para casos de inmigración y lesiones personales en Texas. Escuchamos su historia y defendemos sus derechos." />');
      }
      return html;
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin()],
  define: {
    // Allows using just 'SITE' in Vercel to avoid the public prefix warning, 
    // while still keeping backwards compatibility with VITE_SITE
    'import.meta.env.VITE_SITE': JSON.stringify(process.env.SITE || process.env.VITE_SITE || '')
  }
})