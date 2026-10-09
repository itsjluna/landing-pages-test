import codecs

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

# Replace the literal newlines with \\n
content = content.replace('state.\n\nA proud', 'state.\\n\\nA proud')
content = content.replace('estado.\n\nOrgullosa', 'estado.\\n\\nOrgullosa')

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(content)