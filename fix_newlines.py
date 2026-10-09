import codecs
import re

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

# Replace actual newlines within string literals with \\n
# A crude but effective way is to fix the specific lines
content = re.sub(r'available\.\r?\n\r?\nMy team', r'available.\\n\\nMy team', content)
content = content.replace('available.\n\nMy team', 'available.\\n\\nMy team')
content = content.replace('circumstances.\n\nMy team', 'circumstances.\\n\\nMy team')
content = content.replace('disponibles.\n\nMi equipo', 'disponibles.\\n\\nMi equipo')
content = content.replace('circunstancias.\n\nMi equipo', 'circunstancias.\\n\\nMi equipo')

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(content)

print("Fixed newlines")