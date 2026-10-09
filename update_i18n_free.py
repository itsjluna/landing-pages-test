import codecs

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

# Replace English "Schedule your free consultation"
content = content.replace('"Schedule your free consultation": "Schedule your free consultation",', '"Schedule your consultation": "Schedule your consultation",\n      "Book your consultation now": "Book your consultation now",')

# Replace Spanish "Schedule your free consultation"
content = content.replace('"Schedule your free consultation": "Programe su consulta gratuita",', '"Schedule your consultation": "Programe su consulta",\n      "Book your consultation now": "Reserve su consulta ahora",')

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(content)