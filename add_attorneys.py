import json
import codecs
import re

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

en_attorney1_name = "Brian Ehrenberg"
en_attorney1_bio = "Brian Ehrenberg’s exceptional legal skills have earned him numerous honors, including the TDCLA’s Rising Star, Excellence in Appellate Advocacy by the Appellate Section of the State Bar of Texas, and Super Lawyer Rising Star for the past three years. His commitment to sharing his knowledge is evident through his presentations at TDCLA and AILA events and his role as a professor, where he taught Asylum and Refugee Law.\n\nEducation\nThurgood Marshall School of Law – Summa Cum Laude\nBachelor of History – Texas Tech University\n\nBar Admissions\nThe State of Texas\nU.S. District Court for the Northern, Eastern, and Southern Districts of Texas\nThe Fifth Circuit U.S. Court of Appeals\nThe Supreme Court of the United States\nUnited States Immigration Court\nU.S. District Court for the District of New Mexico"

en_attorney2_name = "Divjyot Singh"
en_attorney2_bio = "Divjyot Singh brings nearly two decades of expertise in investing, developing, and maintaining businesses. After a successful career in real estate holdings, Mr. Singh pursued a legal degree and graduated at the top of his class. He also serves as a director at one of the largest Gurdwaras in the Southern United States.\n\nEducation\nThurgood Marshall School of Law – Valedictorian\nUniversity of Houston\n\nBar Admissions\nThe State of Texas"

es_attorney1_name = "Brian Ehrenberg"
es_attorney1_bio = "Las excepcionales habilidades legales de Brian Ehrenberg le han valido numerosos honores, incluyendo Rising Star de TDCLA, Excelencia en Defensa de Apelaciones por la Sección de Apelaciones del Colegio de Abogados de Texas, y Super Lawyer Rising Star durante los últimos tres años. Su compromiso de compartir su conocimiento es evidente a través de sus presentaciones en eventos de TDCLA y AILA, y su rol como profesor enseñando Derecho de Asilo y Refugiados.\n\nEducación\nThurgood Marshall School of Law – Summa Cum Laude\nLicenciatura en Historia – Texas Tech University\n\nAdmisiones al Colegio de Abogados\nEstado de Texas\nTribunal de Distrito de EE. UU. para los Distritos Norte, Este y Sur de Texas\nTribunal de Apelaciones del Quinto Circuito de EE. UU.\nCorte Suprema de los Estados Unidos\nTribunal de Inmigración de los Estados Unidos\nTribunal de Distrito de EE. UU. para el Distrito de Nuevo México"

es_attorney2_name = "Divjyot Singh"
es_attorney2_bio = "Divjyot Singh aporta casi dos décadas de experiencia invirtiendo, desarrollando y manteniendo negocios. Después de una exitosa carrera en inversiones inmobiliarias, el Sr. Singh cursó la carrera de derecho y se graduó como el primero de su clase. También se desempeña como director en uno de los Gurdwaras más grandes del sur de los Estados Unidos.\n\nEducación\nThurgood Marshall School of Law – Valedictorian (Primer Puesto)\nUniversity of Houston\n\nAdmisiones al Colegio de Abogados\nEstado de Texas"

en_lines = [
    f'"shev.attorney1.name": {json.dumps(en_attorney1_name)},',
    f'"shev.attorney1.bio": {json.dumps(en_attorney1_bio)},',
    f'"shev.attorney2.name": {json.dumps(en_attorney2_name)},',
    f'"shev.attorney2.bio": {json.dumps(en_attorney2_bio)},'
]

es_lines = [
    f'"shev.attorney1.name": {json.dumps(es_attorney1_name, ensure_ascii=False)},',
    f'"shev.attorney1.bio": {json.dumps(es_attorney1_bio, ensure_ascii=False)},',
    f'"shev.attorney2.name": {json.dumps(es_attorney2_name, ensure_ascii=False)},',
    f'"shev.attorney2.bio": {json.dumps(es_attorney2_bio, ensure_ascii=False)}'
]

# Insert EN
match_en = re.search(r'"If we don\'t win, you don\'t pay us": "If we don\'t win, you don\'t pay us"', content)
if match_en:
    insert_pos = match_en.end()
    content = content[:insert_pos] + ",\n      " + "\n      ".join(en_lines)[:-1] + content[insert_pos:]

# Insert ES
match_es = re.search(r'"If we don\'t win, you don\'t pay us": "Si no ganamos, no nos paga"', content)
if match_es:
    insert_pos = match_es.end()
    content = content[:insert_pos] + ",\n      " + "\n      ".join(es_lines)[:-1] + content[insert_pos:]

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(content)