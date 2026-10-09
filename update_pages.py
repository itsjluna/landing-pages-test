import codecs

def update_file(filename):
    with codecs.open(filename, 'r', 'utf-8') as f:
        content = f.read()

    old_block = '''<ShevBiography 
        primaryColor={themeColor}
        attorneys={[
          {
            name: t("shev.pi.bio.name"),
            bio: t("shev.pi.bio.text"),
            imageSrc: "/images/pi/attorney1.png"
          },
          {
            name: t("shev.pi.bio.name2", "Associate Attorney"),
            bio: t("shev.pi.bio.text2", "A dedicated trial lawyer with a passion for holding insurance companies accountable. Brings years of rigorous courtroom experience to the Shev Legal Team."),
            imageSrc: "/images/pi/attorney2.png"
          }
        ]}
      />'''

    new_block = '''<ShevBiography 
        primaryColor={themeColor}
        attorneys={[
          {
            name: t("shev.attorney1.name"),
            bio: t("shev.attorney1.bio"),
            imageSrc: "/images/pi/attorney1.png"
          },
          {
            name: t("shev.attorney2.name"),
            bio: t("shev.attorney2.bio"),
            imageSrc: "/images/pi/attorney2.png"
          }
        ]}
      />'''
    
    # Try replacing it with a slightly more robust regex or string replacement if formatting differs
    import re
    # We will just replace the exact keys used in the file
    content = re.sub(r'name:\s*t\("shev\.\w+\.bio\.name"\),', 'name: t("shev.attorney1.name"),', content)
    content = re.sub(r'bio:\s*t\("shev\.\w+\.bio\.text"\),', 'bio: t("shev.attorney1.bio"),', content)
    content = re.sub(r'name:\s*t\("shev\.\w+\.bio\.name2"[^)]*\),', 'name: t("shev.attorney2.name"),', content)
    content = re.sub(r'bio:\s*t\("shev\.\w+\.bio\.text2"[^)]*\),', 'bio: t("shev.attorney2.bio"),', content)

    with codecs.open(filename, 'w', 'utf-8') as f:
        f.write(content)

update_file('src/pages/ShevPersonalInjury.tsx')
update_file('src/pages/ShevImmigration.tsx')
update_file('src/pages/ShevBusiness.tsx')
print("Updated all pages")