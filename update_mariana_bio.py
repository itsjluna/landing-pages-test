import codecs
import re

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

en_bio = "Mariana Ehrenberg is a founding partner at Shev Law Group and a passionate, dedicated attorney with an entrepreneurial spirit. With nearly a decade of legal experience, she has been recognized by the legal community as a SuperLawyer Rising Star for three consecutive years—an honor awarded to no more than 2.5% of attorneys in the state.\\n\\nA proud member of the Texas Bar College, an honorary society of legal leaders, Mrs. Ehrenberg frequently speaks within the Hispanic community and is fluent in both English and Spanish. Outside the courtroom, she is a devoted mother of two, a dedicated volunteer, and an active member of her church choir."

es_bio = "Mariana Ehrenberg es socia fundadora de Shev Law Group y una abogada apasionada y dedicada con un fuerte espíritu emprendedor. Con casi una década de experiencia legal, la comunidad jurídica la ha reconocido como SuperLawyer Rising Star durante tres años consecutivos, un honor otorgado a no más del 2.5% de los abogados en el estado.\\n\\nOrgullosa miembro del Texas Bar College, una sociedad honoraria de líderes legales, la abogada Ehrenberg participa frecuentemente como oradora en la comunidad hispana y habla inglés y español con fluidez. Fuera de los tribunales, es una madre dedicada de dos hijos, voluntaria activa y miembro del coro de su iglesia."

# Instead of complex regex, let's find the exact lines from earlier.
# Wait, let's just use Python's AST or a simpler regex because we don't want to mess up the newlines again.
# The keys are: "mariana.pi.bio.text" and "mariana.imm.bio.text"
# We can replace them by regex matching up to the comma or newline.

def replace_key(text, key, new_val):
    # Match "key": "value", or "key": "value"
    pattern = r'("' + key.replace('.', r'\.') + r'":\s*").*?(",?\r?\n)'
    replacement = r'\1' + new_val + r'\2'
    return re.sub(pattern, replacement, text, flags=re.DOTALL)

parts = content.split('  es: {')
en_part = parts[0]
es_part = parts[1]

en_part = replace_key(en_part, 'mariana.pi.bio.text', en_bio)
en_part = replace_key(en_part, 'mariana.imm.bio.text', en_bio)

es_part = replace_key(es_part, 'mariana.pi.bio.text', es_bio)
es_part = replace_key(es_part, 'mariana.imm.bio.text', es_bio)

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(en_part + '  es: {' + es_part)

print("Bio updated!")