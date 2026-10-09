import codecs
import re

en_keys = '''
      "footer.about.title": "About Us",
      "footer.about.desc": "SHEV Law Group provides expert legal services with offices in Houston and Dallas. Our dedicated team is committed to delivering personalized legal solutions to meet your unique needs.",
      "footer.guide.title": "Legal Guide",
      "footer.guide.1": "Shev Law Group: The Personal Injury Law Firm in Dallas & Houston, You can Trust",
      "footer.guide.2": "Good News for International Travelers - Soon They Be Able to Pay $750 for Faster US Visa Appointments!",
      "footer.guide.3": "Trusted Immigration Attorneys in Houston & Dallas",
      "footer.guide.4": "U.S Deportation and Removal",
      "footer.guide.5": "How Criminal Defense and Immigration Attorneys Can Collaborate for Powerful Client Advocacy",
      "footer.practice.title": "Practice Areas",
      "footer.practice.1": "Immigration",
      "footer.practice.2": "Business Transactions",
      "footer.practice.3": "Asset Protection",
      "footer.practice.4": "Estate Planning & Administration",
      "footer.practice.5": "Real Estates Transactions",
'''

es_keys = '''
      "footer.about.title": "Sobre Nosotros",
      "footer.about.desc": "SHEV Law Group ofrece servicios legales expertos con oficinas en Houston y Dallas. Nuestro equipo dedicado se compromete a brindar soluciones legales personalizadas para satisfacer sus necesidades únicas.",
      "footer.guide.title": "Guía Legal",
      "footer.guide.1": "Shev Law Group: La Firma de Abogados de Lesiones Personales en Dallas y Houston en la que Puede Confiar",
      "footer.guide.2": "Buenas Noticias para Viajeros Internacionales - Pronto Podrán Pagar $750 por Citas Más Rápidas para Visas de EE. UU.",
      "footer.guide.3": "Abogados de Inmigración de Confianza en Houston y Dallas",
      "footer.guide.4": "Deportación y Remoción en EE. UU.",
      "footer.guide.5": "Cómo los Abogados de Defensa Criminal y de Inmigración Pueden Colaborar para una Poderosa Defensa del Cliente",
      "footer.practice.title": "Áreas de Práctica",
      "footer.practice.1": "Inmigración",
      "footer.practice.2": "Transacciones Comerciales",
      "footer.practice.3": "Protección de Activos",
      "footer.practice.4": "Planificación y Administración Patrimonial",
      "footer.practice.5": "Transacciones de Bienes Raíces",
'''

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

# insert EN keys
match_en = re.search(r'"shev\.attorney2\.bio": "Divjyot Singh brings nearly[^"]+"\s*', content)
if match_en:
    content = content[:match_en.end()] + "," + en_keys.rstrip() + content[match_en.end():]
else:
    print("EN match failed")

# insert ES keys
match_es = re.search(r'"shev\.attorney2\.bio": "Divjyot Singh aporta casi[^"]+"\s*', content)
if match_es:
    content = content[:match_es.end()] + "," + es_keys.rstrip() + content[match_es.end():]
else:
    print("ES match failed")

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(content)

print("Done updating i18n")