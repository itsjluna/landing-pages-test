# -*- coding: utf-8 -*-
import codecs
content = codecs.open('src/i18n.ts', 'r', 'utf-8').read()

en_adds = '''      "Mariana Footer Desc": "Defending your rights with passion, integrity, and proven results. We are here to protect your family and your future.",
      "Mariana Legal Disclaimer": "Legal Disclaimer: The information contained in this website is provided for informational purposes only, and should not be construed as legal advice on any matter. The transmission and receipt of information to this website does not constitute a lawyer-client relationship.",
      "Mariana Footer Copyright": "Past results do not guarantee future results. Every case is different. Attorneys are licensed in Texas. © 2026 Tu Abogada Mariana. All rights reserved.",
      "Shev Footer Desc": "Aggressive representation. Elite legal strategy. We demand justice and protect your enterprise.",
      "Shev Legal Disclaimer": "LEGAL DISCLAIMER: The information contained in this website is provided for informational purposes only, and should not be construed as legal advice on any matter. Communication via the Internet does not create a lawyer-client relationship.",
      "Shev Footer Copyright": "Prior results do not guarantee a similar outcome. Each case must be evaluated on its own merits. © 2026 Shev Law Group. All rights reserved.",
      "Free Consultation": "Free Consultation",
      "Free Evaluation": "Free Evaluation",
      "Quick Links": "Quick Links",
      "Main Office": "Main Office",
      "Headquarters": "Headquarters",
      "Learn More": "Learn More",
      "Practice Areas": "Practice Areas",
'''
es_adds = '''      "Mariana Footer Desc": "Defendiendo sus derechos con pasión, integridad y resultados comprobados. Estamos aquí para proteger a su familia y su futuro.",
      "Mariana Legal Disclaimer": "Disclaimer Legal: La información en este sitio web es solo para fines informativos y no es asesoramiento legal. El contacto no crea una relación abogado-cliente.",
      "Mariana Footer Copyright": "Resultados pasados no garantizan resultados futuros. Cada caso es diferente. Abogados con licencia en Texas. © 2026 Tu Abogada Mariana. Todos los derechos reservados.",
      "Shev Footer Desc": "Representación agresiva. Estrategia legal élite. Exigimos justicia y protegemos su empresa.",
      "Shev Legal Disclaimer": "DISCLAIMER LEGAL: La información en este sitio web se proporciona solo con fines informativos y no debe interpretarse como asesoramiento legal.",
      "Shev Footer Copyright": "Resultados previos no garantizan un resultado similar. © 2026 Shev Law Group. Todos los derechos reservados.",
      "Free Consultation": "Consulta Gratis",
      "Free Evaluation": "Evaluación Gratuita",
      "Quick Links": "Enlaces Rápidos",
      "Main Office": "Oficina Principal",
      "Headquarters": "Sede Principal",
      "Learn More": "Saber Más",
      "Practice Areas": "Áreas de Práctica",
'''

content = content.replace('\"If we don\'t win, you don\'t pay us\": \"If we don\'t win, you don\'t pay us\",', en_adds + '      \"If we don\'t win, you don\'t pay us\": \"If we don\'t win, you don\'t pay us\",')
content = content.replace('\"If we don\'t win, you don\'t pay us\": \"Si no ganamos no nos pagas\",', es_adds + '      \"If we don\'t win, you don\'t pay us\": \"Si no ganamos no nos pagas\",')

codecs.open('src/i18n.ts', 'w', 'utf-8').write(content)
