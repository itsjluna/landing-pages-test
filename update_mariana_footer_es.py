import codecs

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

en_keys = '''
      "Mariana Legal Disclaimer": "This page provides general information and does not create an attorney-client relationship. Prior results do not guarantee a similar outcome. Every matter is evaluated according to its individual facts and applicable law.",
      "Mariana Footer Copyright": "© 2024 Tu Abogada Mariana. All Rights Reserved.",
'''

es_keys = '''
      "Mariana Legal Disclaimer": "Los resultados migratorios no pueden garantizarse. Cada decisión depende de los hechos, la evidencia, la ley aplicable y la determinación de la agencia o del tribunal correspondiente. Esta página contiene información general y no crea una relación abogado-cliente.",
      "Mariana Footer Copyright": "© 2024 Tu Abogada Mariana. Todos los derechos reservados.",
'''

# We will just append them after "mariana.footer.about.desc"
content = content.replace('"mariana.footer.about.desc": "Tu Abogada Mariana provides expert legal services with offices in Houston and Dallas. Our dedicated team is committed to delivering personalized legal solutions to meet your unique needs.",',
'"mariana.footer.about.desc": "Tu Abogada Mariana provides expert legal services with offices in Houston and Dallas. Our dedicated team is committed to delivering personalized legal solutions to meet your unique needs.",\n' + en_keys)

content = content.replace('"mariana.footer.about.desc": "Tu Abogada Mariana ofrece servicios legales expertos con oficinas en Houston y Dallas. Nuestro equipo dedicado se compromete a brindar soluciones legales personalizadas para satisfacer sus necesidades únicas.",',
'"mariana.footer.about.desc": "Tu Abogada Mariana ofrece servicios legales expertos con oficinas en Houston y Dallas. Nuestro equipo dedicado se compromete a brindar soluciones legales personalizadas para satisfacer sus necesidades únicas.",\n' + es_keys)

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(content)