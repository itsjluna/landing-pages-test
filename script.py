import codecs
content = codecs.open('src/pages/ShevPersonalInjury.tsx', 'r', 'utf-8').read()

if 'react-helmet-async' not in content:
    content = content.replace(\"import { useTranslation } from 'react-i18next';\", \"import { useTranslation } from 'react-i18next';\nimport { Helmet } from 'react-helmet-async';\")
    
    helmet_block = \"\"\"
      <Helmet>
        <title>{t('shev.pi.hero.title')} | Shev Law Group</title>
        <meta name=\"description\" content={t('shev.pi.hero.subtitle')} />
        <meta property=\"og:title\" content={${t('shev.pi.hero.title')} | Shev Law Group} />
        <meta property=\"og:description\" content={t('shev.pi.hero.subtitle')} />
      </Helmet>
\"\"\"
    content = content.replace(\"<div className=\\\"min-h-screen bg-slate-50 text-slate-900 font-sans\\\">\", \"<div className=\\\"min-h-screen bg-slate-50 text-slate-900 font-sans\\\">\" + helmet_block)

codecs.open('src/pages/ShevPersonalInjury.tsx', 'w', 'utf-8').write(content)
