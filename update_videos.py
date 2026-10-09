import codecs

with codecs.open('src/pages/MarianaPersonalInjury.tsx', 'r', 'utf-8') as f:
    content = f.read()

replacement_pi = '''<MarianaSuccessStories videoUrls={[
        "https://www.tiktok.com/@tuabogadamariana/video/7685471966345579806",
        "https://www.tiktok.com/@tuabogadamariana/video/7683212877582421262"
      ]} />'''

content = content.replace('<MarianaSuccessStories />', replacement_pi)

with codecs.open('src/pages/MarianaPersonalInjury.tsx', 'w', 'utf-8') as f:
    f.write(content)

with codecs.open('src/pages/MarianaImmigration.tsx', 'r', 'utf-8') as f:
    content2 = f.read()

replacement_imm = '''<MarianaSuccessStories videoUrls={[
        "https://www.tiktok.com/@tuabogadamariana/video/7691304427679960334",
        "https://www.tiktok.com/@tuabogadamariana/video/7694036840344489247"
      ]} />'''

content2 = content2.replace('<MarianaSuccessStories />', replacement_imm)

with codecs.open('src/pages/MarianaImmigration.tsx', 'w', 'utf-8') as f:
    f.write(content2)