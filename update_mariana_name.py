import codecs
with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    i18n_content = f.read()

i18n_content = i18n_content.replace(
    '"mariana.pi.bio.text": ',
    '"mariana.pi.bio.name": "Mariana Ehrenberg",\n      "mariana.pi.bio.text": '
)

i18n_content = i18n_content.replace(
    '"mariana.imm.bio.text": ',
    '"mariana.imm.bio.name": "Mariana Ehrenberg",\n      "mariana.imm.bio.text": '
)

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(i18n_content)