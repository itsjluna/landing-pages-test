import codecs
import re
import json

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

en_keys = {
    "mariana.pi.hero.title": "If There is an Injury, Mariana Takes Action",
    "mariana.pi.hero.subtitle": "After an accident, it is normal to feel uncertain: medical bills arrive, you may miss work, and the insurance company asks questions while you are still trying to understand what happened. You don't have to face this process without guidance.",
    "mariana.pi.practice.1.title": "Auto & Transport Accidents",
    "mariana.pi.practice.1.desc": "Truck accidents, 18-wheelers, buses, cars, motorcycles, and Uber/Lyft accidents.",
    "mariana.pi.practice.2.title": "Workplace & Construction Accidents",
    "mariana.pi.practice.2.desc": "Catastrophic injuries, construction accidents, refineries, and oilfield accidents.",
    "mariana.pi.practice.3.title": "Premises & Product Liability",
    "mariana.pi.practice.3.desc": "Store falls, premises liability, defective products, and wrongful death claims.",
    "mariana.pi.why.1.title": "In-Depth Investigation",
    "mariana.pi.why.1.desc": "We review police reports, videos, and medical records. We locate witnesses and identify all potential responsible parties and their coverage.",
    "mariana.pi.why.2.title": "Negotiation & Litigation",
    "mariana.pi.why.2.desc": "We document your current losses and future needs. We negotiate with insurance companies and prepare a lawsuit when necessary to protect your rights.",
    "mariana.pi.why.3.title": "The Insurance Company Doesn't Decide What You Deserve",
    "mariana.pi.why.3.desc": "Before you answer questions, sign documents, or accept money, we review the situation. We handle the insurance company to prevent decisions that unnecessarily reduce the value of your case.",
    "mariana.pi.bio.text": "At Tu Abogada Mariana, we listen to your story, review how the accident happened, and clearly explain what options may be available.\n\nMy team and I handle the investigation, gather evidence, and communicate with the insurance company while you focus on your recovery.",
    "mariana.pi.faq.1.q": "Why File a Personal Injury Claim?",
    "mariana.pi.faq.1.a": "When another person or company causes harm through negligence, Texas law allows you to seek compensation for medical expenses, lost income, pain and suffering, and future needs.",
    "mariana.pi.faq.2.q": "How Much is My Case Worth?",
    "mariana.pi.faq.2.a": "There is no automatic amount. The value depends on the evidence, injuries, medical treatment, liability, available coverage, and the actual impact the accident has had on your life.",
    "mariana.pi.faq.3.q": "How Long Do You Have to Act in Texas?",
    "mariana.pi.faq.3.a": "Generally, a lawsuit must be filed within two years of the accident or death. Do not wait thinking an exception will automatically protect your case; speak with an attorney soon to preserve evidence.",
    "mariana.imm.hero.title": "Your Immigration Story Deserves a Personal Strategy",
    "mariana.imm.hero.subtitle": "Behind every immigration procedure is a family, a professional opportunity, or a future that needs protection. A form does not tell your whole story. Before filing, it is important to understand your background and goals.",
    "mariana.imm.practice.1.title": "Family Immigration & Asylum",
    "mariana.imm.practice.1.desc": "Appeals, asylum, family immigration, conditional residency, family-based petitions, Religious visas, and VAWA.",
    "mariana.imm.practice.2.title": "Deportation Defense & Waivers",
    "mariana.imm.practice.2.desc": "Deportation defense, DACA, Executive Action on Immigration, naturalization, and waivers for grounds of inadmissibility.",
    "mariana.imm.practice.3.title": "Business & Employment",
    "mariana.imm.practice.3.desc": "Investor visas, work visas, and green cards. We help employers and professionals understand immigration requirements.",
    "mariana.imm.why.1.title": "Complex Application Preparation",
    "mariana.imm.why.1.desc": "We help you organize documentation, identify points needing explanation, gather evidence, and track deadlines to avoid unnecessary complications.",
    "mariana.imm.why.2.title": "Inadmissibility Grounds & Waivers",
    "mariana.imm.why.2.desc": "We analyze previous immigration violations or background issues and determine if an I-601, I-601A, or other waiver is appropriate for your immigration benefit.",
    "mariana.imm.why.3.title": "USCIS Delays & Requests for Evidence",
    "mariana.imm.why.3.desc": "As legal representatives, we monitor your case, respond to evidence requests, and submit supplementary documentation on time to avoid further difficulties.",
    "mariana.imm.bio.text": "At Tu Abogada Mariana, we explain the process in clear language, review your options, and prepare a strategy based on your circumstances.\n\nMy team and I guide you through every stage so you don't have to face the immigration system without guidance. Your future should not depend on a guess.",
    "mariana.imm.faq.1.q": "When Should You Speak with an Immigration Attorney?",
    "mariana.imm.faq.1.a": "Immigration rules leave very little room for error. Receiving advice before filing can help you understand requirements, detect problems, and choose the right path.",
    "mariana.imm.faq.2.q": "What to Do If Facing Deportation?",
    "mariana.imm.faq.2.a": "Seeking legal advice immediately is important. Depending on your background, options such as adjustment of status, cancellation of removal, asylum, waivers, or other forms of relief may exist.",
    "mariana.imm.faq.3.q": "How Do Background or Unlawful Presence Affect Me?",
    "mariana.imm.faq.3.a": "If there is an entry without inspection, prior order, or unlawful presence, we analyze how it could affect the process before recommending the next steps."
}

es_keys = {
    "mariana.pi.hero.title": "Si Hay Lesión, Mariana Entra en Acción",
    "mariana.pi.hero.subtitle": "Después de un accidente es normal sentir incertidumbre: llegan facturas médicas, puede faltar al trabajo y la aseguradora comienza a hacer preguntas cuando usted todavía está tratando de entender qué ocurrió. No tiene que enfrentar ese proceso sin orientación.",
    "mariana.pi.practice.1.title": "Accidentes Automovilísticos y de Transporte",
    "mariana.pi.practice.1.desc": "Accidentes de camiones, camiones de 18 ruedas, autobuses, automóviles, motocicletas y Uber/Lyft.",
    "mariana.pi.practice.2.title": "Accidentes Laborales y de Construcción",
    "mariana.pi.practice.2.desc": "Lesiones catastróficas, accidentes de construcción, refinerías y campos petroleros.",
    "mariana.pi.practice.3.title": "Responsabilidad Civil y Productos Defectuosos",
    "mariana.pi.practice.3.desc": "Caídas en tiendas, responsabilidad de los propietarios, productos defectuosos y muerte por negligencia.",
    "mariana.pi.why.1.title": "Investigamos a Fondo",
    "mariana.pi.why.1.desc": "Revisamos reportes policiales, videos y expedientes médicos. Localizamos testigos e identificamos a todos los posibles responsables y sus coberturas.",
    "mariana.pi.why.2.title": "Negociamos y Litigamos",
    "mariana.pi.why.2.desc": "Documentamos sus pérdidas actuales y necesidades futuras. Nos comunicamos y negociamos con las aseguradoras, preparando una demanda cuando sea necesario para proteger sus derechos.",
    "mariana.pi.why.3.title": "La Aseguradora No Decide lo que Usted Merece",
    "mariana.pi.why.3.desc": "Antes de contestar preguntas, firmar documentos o aceptar dinero, revisamos la situación. Nos encargamos de la aseguradora para evitar decisiones que reduzcan el valor de su caso.",
    "mariana.pi.bio.text": "En Tu Abogada Mariana escuchamos su historia, revisamos cómo ocurrió el accidente y le explicamos con claridad qué opciones podrían estar disponibles.\n\nMi equipo y yo nos encargamos de investigar, reunir la evidencia y comunicarnos con la aseguradora mientras usted se concentra en su recuperación.",
    "mariana.pi.faq.1.q": "¿Por Qué Presentar una Reclamación por Daños Personales?",
    "mariana.pi.faq.1.a": "Cuando otra persona o empresa provoca un daño por negligencia, la ley de Texas puede permitirle reclamar compensación por gastos médicos, ingresos perdidos, dolor y sufrimiento, y necesidades futuras.",
    "mariana.pi.faq.2.q": "¿Cuánto Vale Mi Caso?",
    "mariana.pi.faq.2.a": "No existe una cantidad automática. El valor depende de la evidencia, las lesiones, el tratamiento médico, la responsabilidad, la cobertura disponible y el impacto real que el accidente haya tenido en su vida.",
    "mariana.pi.faq.3.q": "¿Cuánto Tiempo Tiene para Actuar en Texas?",
    "mariana.pi.faq.3.a": "Generalmente, la demanda debe presentarse dentro de los dos años siguientes al accidente o fallecimiento. No espere pensando que una excepción protegerá automáticamente su caso; hable con un abogado pronto para conservar evidencia.",
    "mariana.imm.hero.title": "Su Historia Migratoria Merece una Estrategia Personal",
    "mariana.imm.hero.subtitle": "Detrás de cada trámite migratorio hay una familia, una oportunidad profesional o un futuro que necesita protección. Un formulario no cuenta toda su historia. Por eso, antes de presentar una solicitud, es importante entender sus antecedentes y metas.",
    "mariana.imm.practice.1.title": "Inmigración Familiar y Asilo",
    "mariana.imm.practice.1.desc": "Apelaciones, asilo, inmigración familiar, residencias condicionales, peticiones basadas en la familia, Visas religiosas y VAWA.",
    "mariana.imm.practice.2.title": "Defensa Contra la Deportación y Perdones",
    "mariana.imm.practice.2.desc": "Defensa contra la deportación, DACA, Acción Ejecutiva sobre Inmigración, naturalización y perdones por causales de inadmisibilidad.",
    "mariana.imm.practice.3.title": "Negocios y Empleo",
    "mariana.imm.practice.3.desc": "Visas de inversionista, visas de trabajo y tarjetas verdes. Ayudamos a empleadores y profesionales a comprender los requisitos migratorios.",
    "mariana.imm.why.1.title": "Preparación de Solicitudes Complejas",
    "mariana.imm.why.1.desc": "Le ayudamos a organizar la documentación, identificar puntos que necesitan explicación, reunir evidencia y dar seguimiento a los plazos para evitar complicaciones innecesarias.",
    "mariana.imm.why.2.title": "Causales de Inadmisibilidad y Perdones",
    "mariana.imm.why.2.desc": "Analizamos violaciones migratorias previas o antecedentes y determinamos si un I-601, un I-601A u otro tipo de perdón podría ser apropiado para su beneficio migratorio.",
    "mariana.imm.why.3.title": "Retrasos y Solicitudes de Evidencia",
    "mariana.imm.why.3.desc": "Como representantes legales, monitoreamos su caso, respondemos a solicitudes de evidencia y presentamos documentación complementaria a tiempo para evitar dificultades adicionales.",
    "mariana.imm.bio.text": "En Tu Abogada Mariana le explicamos el proceso en un lenguaje claro, revisamos sus opciones y preparamos una estrategia basada en sus circunstancias.\n\nMi equipo y yo le acompañamos en cada etapa para que no tenga que enfrentar el sistema migratorio sin orientación. Su futuro no debe depender de una suposición.",
    "mariana.imm.faq.1.q": "¿Cuándo Conviene Hablar con un Abogado de Inmigración?",
    "mariana.imm.faq.1.a": "Las reglas migratorias dejan muy poco margen de error. Recibir asesoría antes de presentar puede ayudarle a comprender los requisitos, detectar problemas y elegir el camino correcto acorde con su historial.",
    "mariana.imm.faq.2.q": "¿Qué Hacer Si Enfrenta la Deportación?",
    "mariana.imm.faq.2.a": "Buscar asesoría legal de inmediato es importante. Podrían existir opciones como ajuste de estatus, cancelación de deportación, asilo, perdones o diferentes formas de alivio dependiendo de sus antecedentes.",
    "mariana.imm.faq.3.q": "¿Cómo Afectan los Antecedentes o Presencia Ilegal?",
    "mariana.imm.faq.3.a": "Si existe un ingreso sin inspección, orden previa, o presencia ilegal, analizamos cómo podría afectar el proceso antes de recomendar los siguientes pasos."
}

parts = content.split('  es: {')
if len(parts) != 2:
    print("Could not split EN and ES")
    exit(1)

en_part = parts[0]
es_part = parts[1]

def replace_in_part(part, keys_dict):
    for k, v in keys_dict.items():
        # Match "key": "value" allowing for escaped quotes inside value, but we just match until the trailing quote
        # It's safer to match everything from the key up to the end of the line
        pattern = r'("' + k.replace('.', r'\.') + r'":\s*")[^"]*(")'
        # wait, if value has \n, [^"] won't match \n unless re.DOTALL, but JSON values in TS are strings.
        # Let's match until ",\n or "\n
        pattern = r'("' + k.replace('.', r'\.') + r'":\s*").*?(",?\r?\n)'
        
        replacement = r'\1' + json.dumps(v, ensure_ascii=False)[1:-1] + r'\2'
        
        new_part, num_subs = re.subn(pattern, replacement, part, count=1, flags=re.DOTALL)
        if num_subs == 0:
            print(f"Warning: could not replace key {k}")
        else:
            part = new_part
            
    return part

en_part = replace_in_part(en_part, en_keys)
es_part = replace_in_part(es_part, es_keys)

with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
    f.write(en_part + '  es: {' + es_part)

print("Mariana keys successfully updated!")