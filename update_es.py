import re
import codecs

with codecs.open('src/i18n.ts', 'r', 'utf-8') as f:
    content = f.read()

parts = content.split('es: {')
if len(parts) == 2:
    es_block = parts[1]
    
    def replace_es(key, new_value):
        global es_block
        escaped_value = new_value.replace('"', '\\"').replace('\n', '\\n')
        pattern = r'("' + key + r'":\s*")[^"]*(")'
        es_block = re.sub(pattern, r'\1' + escaped_value + r'\2', es_block)

    # PI
    replace_es('shev.pi.hero.title', 'Cuando una lesión cambia su vida, SHEV entra en acción')
    replace_es('shev.pi.hero.subtitle', 'Un accidente puede afectar mucho más que su salud. Los gastos médicos, el trabajo perdido, el tratamiento continuo y la incertidumbre sobre el futuro pueden ejercer una enorme presión sobre usted y su familia. SHEV Law Group ayuda a las personas lesionadas a comprender sus derechos, lidiar con las compañías de seguros y buscar la compensación que la ley pueda permitir.')
    replace_es('shev.pi.practice.1.title', 'Accidentes Automovilísticos y de Transporte')
    replace_es('shev.pi.practice.1.desc', 'Manejo de accidentes de auto, motocicleta, camión, vehículos de 18 ruedas, autobús y viajes compartidos (Uber/Lyft).')
    replace_es('shev.pi.practice.2.title', 'Accidentes Laborales y de Construcción')
    replace_es('shev.pi.practice.2.desc', 'Representación feroz en accidentes de construcción, accidentes de refinería, accidentes en campos petroleros y lesiones catastróficas.')
    replace_es('shev.pi.practice.3.title', 'Responsabilidad Civil y de Productos')
    replace_es('shev.pi.practice.3.desc', 'Buscamos justicia por caídas en tiendas, productos defectuosos, responsabilidad civil y casos de muerte por negligencia.')
    replace_es('shev.pi.why.1.title', 'Revisión e Identificación')
    replace_es('shev.pi.why.1.desc', 'Revisamos reportes policiales, registros médicos e identificamos a todas las partes potencialmente responsables y sus seguros.')
    replace_es('shev.pi.why.2.title', 'Documentación y Negociación')
    replace_es('shev.pi.why.2.desc', 'Documentamos las pérdidas actuales, evaluamos posibles daños futuros y negociamos agresivamente con las compañías de seguros.')
    replace_es('shev.pi.why.3.title', 'Preparación para Litigio y Comunicación')
    replace_es('shev.pi.why.3.desc', 'Preparamos su caso para litigio si es necesario, mientras lo mantenemos informado en cada etapa del proceso.')
    replace_es('shev.pi.bio.name', 'Sus Defensores Legales')
    replace_es('shev.pi.bio.text', 'Cada caso es diferente. El valor y los recursos disponibles dependen de la evidencia, la ley aplicable, la cobertura del seguro, la gravedad de las lesiones y muchos otros factores.\\n\\nNuestro papel es examinar esos detalles cuidadosamente y desarrollar una estrategia legal basada en las circunstancias de su caso.')
    replace_es('shev.pi.faq.1.q', '¿Por qué considerar un reclamo por lesiones personales?')
    replace_es('shev.pi.faq.1.a', 'Cuando alguien causa una lesión por negligencia, la ley de Texas le permite buscar justicia. Los daños pueden incluir atención médica, pérdida de ingresos, capacidad de ganancia reducida y dolor y sufrimiento.')
    replace_es('shev.pi.faq.2.q', '¿Cuáles son los límites de tiempo para reclamos en Texas?')
    replace_es('shev.pi.faq.2.a', 'En la mayoría de los casos de lesiones en Texas, una demanda generalmente debe presentarse dentro de los dos años posteriores a la fecha en que surge el reclamo. Perder esta fecha límite puede impedir que la corte considere su caso.')
    replace_es('shev.pi.faq.3.q', '¿Cómo lidio con la compañía de seguros?')
    replace_es('shev.pi.faq.3.a', 'Los ajustadores pueden solicitar declaraciones grabadas o presentar ofertas tempranas. Antes de firmar documentos, asegúrese de comprender sus derechos. Nosotros revisamos su caso y lo ayudamos a tomar decisiones informadas.')

    # IMM
    replace_es('shev.imm.hero.title', 'Orientación Estratégica de Inmigración')
    replace_es('shev.imm.hero.subtitle', 'Las decisiones de inmigración pueden afectar a su familia, su carrera, su negocio y su capacidad para permanecer en los EE. UU. SHEV Law Group brinda asesoría legal para individuos, familias, empleados y empleadores que enfrentan procesos de inmigración complejos.')
    replace_es('shev.imm.practice.1.title', 'Inmigración Basada en la Familia')
    replace_es('shev.imm.practice.1.desc', 'Mantenemos a las familias unidas a través de peticiones conyugales, visas de prometido, VAWA, tarjetas de residencia y naturalización.')
    replace_es('shev.imm.practice.2.title', 'Negocios y Empleo')
    replace_es('shev.imm.practice.2.desc', 'Asistencia con visas de inversionista, visas de trabajo, peticiones de empleo y planificación estratégica para ciudadanos extranjeros y empleadores.')
    replace_es('shev.imm.practice.3.title', 'Defensa de Deportación y Apelaciones')
    replace_es('shev.imm.practice.3.desc', 'Representación agresiva para asilo, perdones (waivers), DACA y defensa de deportación en procedimientos judiciales de inmigración.')
    replace_es('shev.imm.why.1.title', 'Preparación Cuidadosa')
    replace_es('shev.imm.why.1.desc', 'Nuestro equipo revisa cada detalle, explica sus opciones, identifica obstáculos y prepara una estrategia adaptada para reducir complicaciones prevenibles.')
    replace_es('shev.imm.why.2.title', 'Navegación de Solicitudes Complejas')
    replace_es('shev.imm.why.2.desc', 'Desde la primera solicitud hasta las entrevistas y las solicitudes de evidencia, lo ayudamos a organizar documentos y monitorear fechas límite críticas.')
    replace_es('shev.imm.why.3.title', 'Motivos de Inadmisibilidad')
    replace_es('shev.imm.why.3.desc', 'Analizamos violaciones previas o tergiversaciones y determinamos si el Formulario I-601, otro perdón, o una estrategia legal diferente es apropiada.')
    replace_es('shev.imm.bio.text', 'Debido a que no hay dos historiales de inmigración idénticos, la estrategia correcta depende de factores como el estado migratorio, la forma de entrada, las relaciones familiares, el historial laboral y las solicitudes previas.\\n\\nSu asunto de inmigración merece una preparación cuidadosa y una estrategia clara.')
    replace_es('shev.imm.faq.1.q', '¿Cuándo puede un abogado de inmigración marcar la diferencia?')
    replace_es('shev.imm.faq.1.a', 'La ley de inmigración deja poco margen para errores. Una firma faltante o un plazo malentendido puede llevar a una denegación. Lo ayudamos a comprender los riesgos antes de tomar decisiones.')
    replace_es('shev.imm.faq.2.q', '¿Cómo manejan las demoras de USCIS?')
    replace_es('shev.imm.faq.2.a', 'Monitoreamos asuntos pendientes, respondemos a solicitudes de evidencia, enviamos documentación de respaldo y evaluamos las opciones de consulta de casos disponibles para evitar retrasos evitables.')
    replace_es('shev.imm.faq.3.q', '¿Qué debo hacer si me enfrento a la deportación?')
    replace_es('shev.imm.faq.3.a', 'Obtener asesoría legal rápidamente es importante. Las posibles formas de alivio pueden incluir ajuste de estatus, cancelación de deportación, asilo u otras defensas.')

    # BIZ
    replace_es('shev.biz.hero.title', 'Derecho Corporativo y Comercial Estratégico')
    replace_es('shev.biz.hero.subtitle', 'Protegiendo su empresa, minimizando el riesgo y facilitando el crecimiento. SHEV Law Group proporciona orientación legal agresiva para dueños de negocios, emprendedores y corporaciones que enfrentan disputas comerciales complejas en Texas.')
    replace_es('shev.biz.practice.1.title', 'Formación y Estructuración de Empresas')
    replace_es('shev.biz.practice.1.desc', 'Estructuración estratégica para LLCs, Corporaciones y Asociaciones para maximizar la protección de responsabilidad, garantizar el cumplimiento y prepararse para un crecimiento escalable.')
    replace_es('shev.biz.practice.2.title', 'Litigios Comerciales')
    replace_es('shev.biz.practice.2.desc', 'Representación feroz y lista para el juicio en reclamos por incumplimiento de contrato, disputas de sociedad, robo de secretos comerciales y litigios corporativos complejos.')
    replace_es('shev.biz.practice.3.title', 'Contratos y Transacciones')
    replace_es('shev.biz.practice.3.desc', 'Redactamos, revisamos y negociamos contratos de arrendamiento comercial, acuerdos de proveedores, NDAs y contratos de empleo para prevenir disputas costosas.')
    replace_es('shev.biz.why.1.title', 'Gestión Proactiva de Riesgos')
    replace_es('shev.biz.why.1.desc', 'Actuamos como su asesor legal externo dedicado, identificando posibles responsabilidades y previniendo problemas legales antes de que se conviertan en demandas.')
    replace_es('shev.biz.why.2.title', 'Cerramos Tratos, No los Rompemos')
    replace_es('shev.biz.why.2.desc', 'Facilitamos el crecimiento de su negocio mediante la redacción de contratos blindados que protegen sus intereses sin entorpecer sus negociaciones.')
    replace_es('shev.biz.why.3.title', 'Experiencia en Juicios de Alto Riesgo')
    replace_es('shev.biz.why.3.desc', 'Cuando las disputas son inevitables, aportamos nuestra experiencia de élite en tribunales para defender agresivamente el futuro de su empresa a nivel estatal y federal.')
    replace_es('shev.biz.bio.text', 'Su negocio es más que un simple activo: es su sustento. Cada asunto corporativo requiere una estrategia calculada adaptada a su industria, sus metas y su tolerancia al riesgo.\\n\\nDesde la formación hasta litigios de alto riesgo, nuestro rol es actuar como su socio legal estratégico, permitiéndole enfocarse en dirigir su negocio mientras nosotros lo protegemos.')
    replace_es('shev.biz.faq.1.q', '¿Debería formar una LLC o una Corporación?')
    replace_es('shev.biz.faq.1.a', 'Depende de sus necesidades de protección, estrategia fiscal y objetivos de financiamiento. Consultamos con usted para elegir y establecer la estructura óptima para su modelo de negocio.')
    replace_es('shev.biz.faq.2.q', '¿Manejan la redacción y revisión de contratos?')
    replace_es('shev.biz.faq.2.a', 'Sí, redactamos, revisamos y negociamos todo tipo de acuerdos comerciales, incluyendo contratos laborales, NDAs, acuerdos de proveedores y arrendamientos comerciales para garantizar que esté protegido.')
    replace_es('shev.biz.faq.3.q', '¿Pueden ayudar a resolver una disputa con mi socio?')
    replace_es('shev.biz.faq.3.a', 'Absolutamente. Manejamos disputas de asociaciones y reclamos por incumplimiento de deber fiduciario, buscando una resolución eficiente pero completamente preparados para un litigio agresivo si es necesario.')

    content = parts[0] + 'es: {' + es_block

    with codecs.open('src/i18n.ts', 'w', 'utf-8') as f:
        f.write(content)
    print("Updated Spanish i18n")
else:
    print("Could not find 'es:' block")