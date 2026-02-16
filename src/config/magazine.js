export const magazineConfig = {
    title: "Modern Tech Magazine",
    pages: [
        { id: 'cover', path: '/', title: 'Cover', type: 'cover' },
        {
            id: 'article-1',
            path: '/article/1',
            title: 'Editorial: El Código Invisible de la Ingeniería',
            type: 'article',
            author: 'Santiago Londoño Gaviria',
            category: 'Comunicación Asertiva',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
            content: [
                {
                    type: 'paragraph',
                    text: `En el ecosistema tecnológico actual, donde la innovación avanza a un ritmo exponencial, ha surgido un mito persistente: que el valor de un ingeniero de sistemas se mide exclusivamente por su capacidad para escribir código eficiente o administrar infraestructuras complejas. Sin embargo, la realidad laboral del siglo XXI nos dicta una lección diferente. Detrás de cada software exitoso y de cada arquitectura de red robusta, existe un flujo constante de intercambio humano que determina la viabilidad de la tecnología.`
                },
                {
                    type: 'paragraph',
                    text: `Como estudiantes y futuros profesionales de Ingeniería de Sistemas, nuestra labor trasciende la pantalla. Somos traductores de necesidades, arquitectos de soluciones y, ante todo, colaboradores en equipos multidisciplinarios. En este contexto, la comunicación asertiva no es un accesorio; es la interfaz crítica que permite que nuestras ideas técnicas se transformen en realidades funcionales.`
                },
                {
                    type: 'header',
                    text: 'De los Modelos a la Práctica'
                },
                {
                    type: 'paragraph',
                    text: `Esta edición nace del análisis profundo de los modelos comunicativos estudiados en nuestra Unidad 1. No se trata solo de teoría académica; se trata de entender el dinamismo de mensajes que proponen autores como Osgood y Schramm, quienes nos enseñan que la comunicación es un proceso circular y continuo de interpretación, o la estructura de Berlo, que nos invita a considerar cómo nuestras habilidades y actitudes afectan la recepción del mensaje.`
                },
                {
                    type: 'paragraph',
                    text: `A lo largo de estas páginas, explicaremos cómo la asertividad (ese equilibrio perfecto entre la pasividad y la agresividad) se convierte en la herramienta técnica más versátil de nuestro arsenal. Analizaremos por qué un ingeniero que sabe decir "no" a un requerimiento imposible, o que explica un error de sistema con respeto y claridad, aporta más valor a una empresa que aquel que se encierra en el silencio técnico.`
                },
                {
                    type: 'header',
                    text: 'Un Espacio para el Aprendizaje Dinámico'
                },
                {
                    type: 'paragraph',
                    text: `El lector encontrará aquí un recorrido visual por los estilos comunicativos y ejemplos prácticos aplicados a nuestro campo: desde la gestión de crisis en servidores hasta la negociación con clientes que no dominan el lenguaje técnico.`
                },
                {
                    type: 'paragraph',
                    text: `Porque, al final del día, comunicar bien no es simplemente emitir información; es el arte de saber expresar, la disciplina de saber escuchar y la capacidad de construir soluciones en conjunto. Bienvenidos a esta exploración del componente más humano de la ingeniería.`
                },
                {
                    type: 'quote',
                    text: `“La ingeniería no se trata solo de construir sistemas, sino de conectar personas a través de soluciones claras. El problema de comunicación más grande es la ilusión de que ha tenido lugar.” Adaptación inspirada en William H. Whyte`
                }
            ]
        },
        {
            id: 'article-2',
            path: '/article/2',
            title: '¿Qué es la comunicación y por qué es tan importante?',
            type: 'article',
            author: 'Equipo Editorial',
            category: 'Fundamentos',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
            content: [
                {
                    type: 'header',
                    text: 'La Esencia del Intercambio'
                },
                {
                    type: 'paragraph',
                    text: `La comunicación es mucho más que el simple acto de emitir sonidos o escribir palabras; es el proceso mediante el cual los seres humanos dan sentido a su realidad compartida.`
                },
                {
                    type: 'definition-grid',
                    items: [
                        { source: 'RAE', text: 'La comunicación es la “transmisión de señales mediante un código común al emisor y al receptor”.' },
                        { source: 'Guardia (2009)', text: 'Es un “proceso interactivo e interpersonal, compuesto por elementos que interactúan constantemente”.' }
                    ]
                },
                {
                    type: 'quote',
                    text: `"La comunicación no es solo hablar, es intercambiar significados. Los significados no están en el mensaje, sino en los usuarios del código." David K. Berlo`
                },
                {
                    type: 'header',
                    text: 'Impacto en dos mundos: Cotidiano vs. Profesional'
                },
                {
                    type: 'paragraph',
                    text: `La comunicación se adapta al entorno. Mientras que en casa buscamos conexión, en la ingeniería buscamos precisión.`
                },
                {
                    type: 'dual-list',
                    items: [
                        {
                            title: 'Vida Cotidiana',
                            points: [
                                'Expresar emociones: Conectar con otros a nivel personal.',
                                'Resolver conflictos: Negociar en el entorno familiar o social.',
                                'Construir relaciones: Crear vínculos de confianza.'
                            ]
                        },
                        {
                            title: 'Ingeniería de Sistemas',
                            points: [
                                'Levantamiento de requerimientos: Entender qué necesita realmente el cliente.',
                                'Trabajo en equipo: Sincronizar desarrolladores y diseñadores.',
                                'Resolución de incidentes: Explicar fallos técnicos de forma clara.'
                            ]
                        }
                    ]
                },
                {
                    type: 'header',
                    text: 'Cuadro Comparativo: Los Niveles del Mensaje'
                },
                {
                    type: 'comparison-table',
                    headers: ['Comunicación Básica', 'Comunicación Profesional'],
                    rows: [
                        ['Informal: Basada en la confianza.', 'Estratégica: Orientada a objetivos.'],
                        ['Espontánea: Sin preparación previa.', 'Planificada: Estructurada y documentada.'],
                        ['Emocional: Centrada en el sentir.', 'Técnica: Precisa, clara y objetiva.'],
                        ['Sin análisis: Fluye naturalmente.', 'Con intención: Busca un resultado técnico.']
                    ]
                },
                {
                    type: 'custom-component',
                    component: 'info-cycle',
                    props: {
                        title: 'EL CICLO DE LA INFORMACIÓN',
                        subtitle: 'El Flujo Bidireccional de Datos en Sistemas Humanos y Digitales'
                    }
                }
            ]
        },
        {
            id: 'article-3',
            path: '/article/3',
            title: 'Cómo procesa la mente un mensaje',
            subtitle: 'Modelo de Osgood aplicado a proyectos tecnológicos',
            type: 'article',
            author: 'Equipo Editorial',
            category: 'Psicología Técnica',
            image: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?w=1200&q=80',
            content: [
                {
                    type: 'highlight-box',
                    title: 'CASO REAL EN ENTORNO TECNOLÓGICO',
                    content: [
                        { type: 'paragraph', text: 'Cliente: “¡El sistema está fallando, nada funciona!”' },
                        { type: 'paragraph', text: '¿Qué ocurre realmente en la mente del ingeniero al procesar este estímulo? No es un proceso instantáneo; es una secuencia de capas psicológicas que determinan el éxito de la solución.' }
                    ]
                },
                {
                    type: 'header',
                    text: 'La Cascada del Procesamiento Mental'
                },
                {
                    type: 'paragraph',
                    text: `El primer impacto ocurre en el Nivel Sensorial, una reacción automática y neurofisiológica. Es el momento en que el estrés se manifiesta y surge la defensa interna: "¿Qué pasó ahora?". En esta etapa no hay análisis técnico, sólo una respuesta emocional al mensaje del cliente que, si no se gestiona, puede llevar a una respuesta defensiva o impulsiva.`
                },
                {
                    type: 'paragraph',
                    text: `Superada la reacción inicial, la mente transita hacia la Disposición Interna. Aquí es donde el ingeniero de sistemas despliega su verdadero arsenal técnico. El mensaje deja de ser un grito de auxilio para convertirse en datos: se inicia la revisión de logs, la validación de bases de datos y la verificación de servidores. Es el procesamiento lógico donde las habilidades duras toman el control para identificar la falla real detrás del síntoma reportado.`
                },
                {
                    type: 'paragraph',
                    text: `Finalmente, el proceso alcanza la Representación Simbólica, el nivel de mayor madurez profesional. Aquí el ingeniero interpreta el contexto global: ¿Es un cliente estratégico? ¿Qué impacto reputacional tiene este error para la empresa? Al llegar a este punto, la respuesta ya no es solo técnica, sino estratégica, permitiendo que el profesional comprenda no solo el qué falló, sino el porqué es vital comunicarlo correctamente.`
                },
                {
                    type: 'custom-component',
                    component: 'pyramid',
                    props: {}
                },
                {
                    type: 'header',
                    text: 'ANÁLISIS CRÍTICO: LA INGENIERÍA MÁS ALLÁ DEL CÓDIGO'
                },
                {
                    type: 'paragraph',
                    text: `El modelo de Osgood nos revela que la comunicación no es un cable que transmite datos de forma lineal, sino un sistema complejo de capas psicológicas. En la Ingeniería de Sistemas, reaccionar exclusivamente desde el Nivel Sensorial (impulsividad) suele derivar en conflictos técnicos y pérdida de credibilidad.`
                },
                {
                    type: 'paragraph',
                    text: `Integrar el Nivel de Representación Simbólica permite que el profesional no solo arregle un bug, sino que gestione la crisis. La capacidad de transitar por estos niveles de forma consciente diferencia a un programador de un Líder de Proyectos.`
                }
            ]
        },
        {
            id: 'article-4',
            path: '/article/4',
            title: 'El modelo SMCR y la comunicación efectiva en equipos de desarrollo',
            subtitle: 'El Ecosistema de la Información: El Modelo de Berlo',
            type: 'article',
            author: 'Equipo Editorial',
            category: 'Sistemas Comunicativos',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
            content: [
                {
                    type: 'paragraph',
                    text: 'En el desarrollo de software, la comunicación no es un evento aislado, sino un proceso sistémico. El modelo SMCR (Source, Message, Channel, Receiver) nos permite desglosar cada componente para asegurar que la "trama" de datos llegue sin errores al destino.'
                },
                {
                    type: 'image',
                    src: '/smcr.jpg',
                    alt: 'Modelo SMCR de Berlo',
                    caption: 'Representación visual del modelo Source-Message-Channel-Receiver'
                },
                {
                    type: 'header',
                    text: 'Los Componentes del Sistema'
                },
                {
                    type: 'paragraph',
                    text: '**Fuente**: Es el nodo origen que codifica la visión del producto. Su efectividad depende de su actitud profesional y su capacidad para traducir necesidades de negocio en especificaciones técnicas claras. Un líder que no codifica bien un requerimiento condena al equipo al retrabajo.'
                },
                {
                    type: 'paragraph',
                    text: '**Mensaje**: Es el paquete de datos que viaja por el sistema. Debe contener código limpio, documentación precisa y criterios de aceptación definidos. Si el mensaje es ambiguo, el software resultante será defectuoso.'
                },
                {
                    type: 'paragraph',
                    text: '**Canal**: Es el medio físico o digital. En nuestra disciplina, el canal varía según la urgencia: desde documentación formal en Jira o GitHub, hasta comunicación inmediata en Slack, Teams o reuniones virtuales.'
                },
                {
                    type: 'paragraph',
                    text: '**Receptor**: Son los encargados de decodificar y ejecutar. Su éxito depende de su nivel de experiencia, su conocimiento técnico y su capacidad para interpretar el contexto organizacional del proyecto.'
                },
                {
                    type: 'header',
                    text: 'Aplicación en el Marco de Trabajo Scrum'
                },
                {
                    type: 'paragraph',
                    text: 'Para aterrizar la teoría, observemos cómo el modelo SMCR se manifiesta en una ceremonia estándar de la industria:'
                },
                {
                    type: 'comparison-table',
                    headers: ['Elemento SMCR', 'Aplicación en el Ciclo SCRUM'],
                    rows: [
                        ['Fuente', 'Scrum Master o Product Owner'],
                        ['Mensaje', 'Historia de Usuario / Backlog Item'],
                        ['Canal', 'Reunión de Sprint Planning / Daily Scrum'],
                        ['Receptor', 'Equipo de Desarrolladores (Dev Team)'],
                        ['Retroalimentación', 'Resolución de dudas y ajustes de estimación']
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'El modelo de Berlo demuestra que el éxito de un proyecto tecnológico no reside exclusivamente en la calidad del algoritmo, sino en la calidad del proceso comunicativo que lo sustenta. Una elección errónea del Canal puede ser tan catastrófica como un error de sintaxis.'
                }
            ]
        },
        {
            id: 'article-5',
            path: '/article/5',
            title: 'Entrevista: La comunicación asertiva en contextos sociales y tecnológicos',
            type: 'article',
            author: 'Santiago Londoño Gaviria',
            category: 'Entrevista',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80',
            content: [
                {
                    type: 'image',
                    src: '/entrevista.jpeg',
                    alt: 'Natalia Andrea Londoño Gaviria',
                    caption: 'La comunicación como eje transversal en el trabajo social.'
                },
                {
                    type: 'header',
                    text: 'Perfil del entrevistado'
                },
                {
                    type: 'paragraph',
                    text: '**Nombre**: Natalia Andrea Londoño Gaviria'
                },
                {
                    type: 'paragraph',
                    text: '**Profesión**: Estudiante de 8vo semestre Trabajo Social'
                },
                {
                    type: 'interview-qa',
                    items: [
                        {
                            question: '¿Qué papel juega la comunicación en su labor como trabajadora social?',
                            answer: 'Todo, porque mi campo se basa en la escucha activa y si no tengo una buena comunicación como voy a estar o entenderme con las personas con las que trabajo a las que intervengo.'
                        },
                        {
                            question: '¿Ha enfrentado conflictos por problemas de comunicación?',
                            answer: 'Sí y muchos, por falta de comunicación más que todo, ya que al no existir ésta de manera asertiva crea brechas o malos entendidos que ocasionan conflictos que han causado la pérdida de relaciones y amistades.'
                        },
                        {
                            question: '¿Cómo se aplica la comunicación asertiva en situaciones difíciles?',
                            answer: 'Al momento de haber distintas situaciones difíciles, es correcto respirar antes de hablar, tratar de comunicar debidamente las ideas, no decir cosas de manera impulsiva sino que calmándose y no dejarse llevar por los sentimientos.'
                        },
                        {
                            question: 'Desde su experiencia, ¿qué tan importante es la comunicación en equipos interdisciplinarios, por ejemplo, cuando se trabaja con profesionales de tecnología o administración?',
                            answer: 'En equipos interdisciplinarios la comunicación es esencial, porque cada profesional maneja un lenguaje técnico diferente. Si no se traduce adecuadamente la información, se generan vacíos y errores en la toma de decisiones.'
                        },
                        {
                            question: '¿Qué consejo le daría a los futuros ingenieros sobre comunicación?',
                            answer: 'Que no subestimen las habilidades blandas. Saber escuchar y expresar ideas con claridad puede evitar conflictos laborales y mejorar cualquier proyecto.'
                        }
                    ]
                },
                {
                    type: 'header',
                    text: 'CIERRE ANALÍTICO'
                },
                {
                    type: 'paragraph',
                    text: 'La entrevista evidencia que la comunicación asertiva no es exclusiva del ámbito tecnológico, sino transversal a todas las disciplinas. Desde el modelo de Berlo (SMCR), se identifica que la fuente (profesional), el mensaje (orientación social), el canal (entrevista, reunión, informe) y el receptor (usuario o equipo interdisciplinario) determinan la efectividad del proceso.'
                },
                {
                    type: 'paragraph',
                    text: 'Asimismo, se observan claramente los estilos comunicativos: la agresividad genera resistencia, la pasividad debilita la intervención, mientras que la asertividad permite equilibrio entre firmeza y respeto. Desde la perspectiva de Ingeniería de Sistemas, esta entrevista demuestra que el desarrollo de soluciones tecnológicas requiere comprensión del contexto social y humano. Un sistema puede ser técnicamente correcto, pero si no existe una comunicación clara entre desarrolladores, usuarios y actores sociales, el proyecto puede fracasar.'
                }
            ]
        },
        {
            id: 'article-6',
            path: '/article/6',
            title: 'Agresivo, pasivo o asertivo: ¿Qué tipo de ingeniero eres?',
            type: 'article',
            author: 'Santiago Londoño Gaviria',
            category: 'Liderazgo Técnico',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
            content: [
                {
                    type: 'paragraph',
                    text: 'En el entorno tecnológico actual, los conflictos no surgen solo por errores de código, sino por fallas en la comunicación. El estilo comunicativo de un ingeniero puede determinar el éxito o fracaso de un proyecto.'
                },
                {
                    type: 'paragraph',
                    text: 'Existen tres estilos principales: **agresivo**, **pasivo** y **asertivo**. Cada uno impacta de manera diferente la productividad, el clima laboral y la relación con el cliente.'
                },
                {
                    type: 'comparison-table',
                    headers: ['Estilo', 'Características', 'Frases típicas', 'Impacto en el equipo'],
                    rows: [
                        ['Agresivo', 'Impositivo, dominante, poco empático', '“Eso no es mi problema.”', 'Genera tensión, miedo y conflictos'],
                        ['Pasivo', 'Evita confrontación, inseguro', '“Como ustedes digan…”', 'Provoca retrasos y falta de claridad'],
                        ['Asertivo', 'Claro, firme y respetuoso', '“Revisemos opciones para solucionarlo.”', 'Mejora cooperación y resultados']
                    ]
                },
                {
                    type: 'scenario-box',
                    title: 'Mini diálogo aplicado a entorno tecnológico',
                    dialogue: [
                        { actor: 'Escenario', text: 'Cliente molesto', style: 'header' },
                        { actor: 'Cliente', text: 'El sistema está fallando y necesitamos una solución ya.', style: 'default' },
                        { actor: 'Agresivo', text: 'Eso no es responsabilidad mía. El problema es del servidor.', style: 'agresivo' },
                        { actor: 'Pasivo', text: 'Bueno… vemos después qué pasó.', style: 'pasivo' },
                        { actor: 'Asertivo', text: 'Entiendo la urgencia. Permítame verificar el problema y le propongo una solución inmediata.', style: 'asertivo' }
                    ]
                },
                {
                    type: 'header',
                    text: 'Análisis Crítico'
                },
                {
                    type: 'paragraph',
                    text: 'El estilo **agresivo** puede generar resultados rápidos a corto plazo, pero deteriora la cultura organizacional y afecta la confianza del equipo. A largo plazo, incrementa la rotación laboral y disminuye la innovación.'
                },
                {
                    type: 'paragraph',
                    text: 'El estilo **pasivo** evita conflictos inmediatos, pero genera ambigüedad, retrasos y acumulación de problemas técnicos. En proyectos ágiles, la falta de claridad puede traducirse en fallas estructurales del producto.'
                },
                {
                    type: 'paragraph',
                    text: 'El estilo **asertivo**, en cambio, equilibra firmeza y respeto. Permite expresar desacuerdos técnicos sin deteriorar relaciones laborales, facilitando la colaboración interdisciplinaria. En metodologías ágiles, este estilo favorece retrospectivas efectivas y mejora continua.'
                },
                {
                    type: 'paragraph',
                    text: 'Un ingeniero del siglo XXI no solo debe dominar lenguajes de programación, sino también habilidades comunicativas que fortalezcan la toma de decisiones y la resolución de conflictos.'
                }
            ]
        },
        {
            id: 'article-7',
            path: '/article/7',
            title: 'Comunicación en equipos interdisciplinarios',
            type: 'article',
            author: 'Equipo Editorial',
            category: 'Sistemas Humanos',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
            content: [
                {
                    type: 'paragraph',
                    text: 'En el ejercicio profesional contemporáneo, los proyectos tecnológicos ya no son desarrollados exclusivamente por ingenieros. La transformación digital en empresas, entidades públicas o proyectos sociales exige la participación de múltiples disciplinas. Ingenieros de Sistemas, administradores, abogados, diseñadores y trabajadores sociales interactúan en un mismo escenario con un objetivo común, pero con marcos conceptuales distintos.'
                },
                {
                    type: 'paragraph',
                    text: 'Aquí surge uno de los mayores retos: **cada disciplina posee su propio lenguaje técnico** y su propia forma de interpretar la realidad.'
                },
                {
                    type: 'paragraph',
                    text: 'Un ingeniero puede hablar de arquitectura escalable, bases de datos distribuidas o microservicios; mientras que una trabajadora social puede enfocarse en el impacto humano, la accesibilidad o la inclusión. Ninguno está equivocado. El problema aparece cuando no existe una traducción efectiva entre estos enfoques.'
                },
                {
                    type: 'paragraph',
                    text: 'Desde la perspectiva del **modelo SMCR de Berlo**, el “campo de experiencia” influye directamente en la interpretación del mensaje. La fuente puede emitir un mensaje técnicamente correcto, pero si el receptor no comparte el mismo marco conceptual, la comunicación pierde eficacia. En equipos interdisciplinarios, este fenómeno es constante: se escucha el mismo mensaje, pero se interpreta de manera distinta.'
                },
                {
                    type: 'paragraph',
                    text: 'El **modelo de Osgood** también ayuda a comprender este proceso. Cada profesional recibe el mensaje (nivel sensorial), lo filtra según su formación y experiencias previas (disposición interna) y finalmente lo representa simbólicamente desde su disciplina. Esto explica por qué una propuesta técnica puede ser entendida como una solución eficiente por el ingeniero, pero como una intervención insuficiente por el profesional social.'
                },
                {
                    type: 'paragraph',
                    text: 'En proyectos de transformación digital la falta de comunicación interdisciplinaria puede generar sistemas técnicamente robustos pero socialmente ineficientes. Un software puede funcionar perfectamente en términos de código y arquitectura, pero fracasar si no considera el contexto del usuario final, sus habilidades digitales o sus necesidades reales.'
                },
                {
                    type: 'paragraph',
                    text: 'La comunicación interdisciplinaria exige, por tanto, más que claridad: requiere **empatía profesional**. Implica adaptar el lenguaje técnico, explicar conceptos complejos en términos accesibles y, sobre todo, escuchar activamente otras perspectivas. No se trata de simplificar el conocimiento, sino de traducirlo.'
                },
                {
                    type: 'paragraph',
                    text: 'En este sentido, el ingeniero del siglo XXI no solo desarrolla soluciones tecnológicas; también actúa como mediador entre la lógica técnica y la realidad humana. La verdadera innovación ocurre cuando la ingeniería no compite con otras disciplinas, sino que dialoga con ellas.'
                }
            ]
        },
        {
            id: 'article-8',
            path: '/article/8',
            title: 'Conflictos en entornos tecnológicos',
            type: 'article',
            author: 'Equipo Editorial',
            category: 'Gestión de Crisis',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80',
            content: [
                {
                    type: 'paragraph',
                    text: 'En los entornos tecnológicos contemporáneos, los conflictos rara vez se originan únicamente por fallas técnicas. En la mayoría de los casos, el verdadero origen del problema se encuentra en interpretaciones ambiguas, supuestos no verificados o mensajes mal transmitidos. Es decir, en **fallas comunicativas**.'
                },
                {
                    type: 'paragraph',
                    text: 'Un requerimiento mal definido, una retroalimentación poco clara o una crítica expresada de manera inadecuada pueden desencadenar tensiones dentro del equipo de desarrollo. En metodologías ágiles, donde la interacción constante es fundamental, una comunicación deficiente impacta directamente los tiempos de entrega, la calidad del producto y la relación con el cliente.'
                },
                {
                    type: 'paragraph',
                    text: 'El conflicto, en sí mismo, no es negativo. Desde una perspectiva organizacional, puede ser una oportunidad de mejora si se gestiona de manera adecuada. El problema surge cuando los estilos comunicativos influyen negativamente en su resolución. Un **estilo agresivo** puede escalar la tensión y generar resistencia; un **estilo pasivo** puede ocultar el problema hasta que se vuelva crítico. En cambio, la **comunicación asertiva** permite abordar la situación con claridad y respeto, enfocándose en la solución y no en la culpabilización.'
                },
                {
                    type: 'paragraph',
                    text: 'En el ámbito de la Ingeniería de Sistemas, es común que los desacuerdos surjan por diferencias técnicas: elección de tecnologías, decisiones de arquitectura, prioridades en el backlog o interpretación de requerimientos. Sin embargo, cuando estas diferencias se expresen desde el ataque personal o la evasión, el equipo pierde cohesión. La productividad disminuye y el ambiente laboral se deteriora.'
                },
                {
                    type: 'paragraph',
                    text: 'Desde el **modelo de Berlo (SMCR)**, el conflicto puede analizarse identificando dónde se produce la distorsión: en la fuente (quien comunica), en el mensaje (ambigüedad), en el canal (medio inadecuado) o en el receptor (interpretación subjetiva). Por ejemplo, comunicar un cambio crítico únicamente por correo electrónico puede generar malentendidos que una reunión breve habría evitado.'
                },
                {
                    type: 'paragraph',
                    text: 'Asimismo, el **modelo de Osgood** explica cómo la disposición interna influye en la interpretación del mensaje. Un desarrollador bajo presión puede percibir una observación técnica como un ataque personal, aunque la intención original no haya sido esa. Esto demuestra que la comunicación no depende solo del contenido, sino también del estado emocional y del contexto.'
                },
                {
                    type: 'paragraph',
                    text: 'La resolución efectiva de conflictos en entornos tecnológicos requiere habilidades como la **escucha activa**, la reformulación del mensaje y la validación de percepciones. En lugar de responder de forma reactiva, el profesional asertivo busca comprender antes de argumentar. Esta actitud no solo reduce tensiones, sino que fortalece la confianza dentro del equipo.'
                },
                {
                    type: 'paragraph',
                    text: 'En conclusión, los proyectos tecnológicos exitosos no se construyen únicamente con líneas de código bien estructuradas, sino con relaciones profesionales sólidas. La gestión adecuada del conflicto, basada en la comunicación asertiva, se convierte en una **competencia estratégica** para cualquier ingeniero que aspire a liderar procesos de transformación digital.'
                }
            ]
        },
        {
            id: 'article-9',
            path: '/article/9',
            title: 'Más allá del código: la comunicación como competencia estratégica',
            type: 'article',
            author: 'Santiago Londoño Gaviria',
            category: 'Conclusión',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
            content: [
                {
                    type: 'paragraph',
                    text: 'Durante mucho tiempo, la formación en Ingeniería de Sistemas se ha centrado principalmente en el dominio técnico: algoritmos, estructuras de datos, bases de datos, arquitecturas y lenguajes de programación. Sin embargo, la realidad profesional demuestra que el éxito de un proyecto tecnológico no depende únicamente de la calidad del código, sino de la calidad de la comunicación que lo rodea.'
                },
                {
                    type: 'paragraph',
                    text: 'Un sistema puede estar perfectamente diseñado desde el punto de vista técnico y aun así fracasar en su implementación. ¿La razón? **Requerimientos mal interpretados, expectativas no alineadas o conflictos no resueltos dentro del equipo**. Estos problemas no son fallas de programación; son fallas comunicativas.'
                },
                {
                    type: 'paragraph',
                    text: 'En el contexto actual, donde los proyectos son cada vez más interdisciplinarios, el ingeniero interactúa constantemente con profesionales de otras áreas, clientes con distintos niveles de conocimiento técnico y equipos distribuidos geográficamente. En este escenario, la comunicación deja de ser una habilidad complementaria y se convierte en una **competencia estratégica**.'
                },
                {
                    type: 'paragraph',
                    text: 'La **asertividad** juega un papel fundamental en este proceso. Un profesional agresivo puede imponer decisiones técnicas, pero deteriora el clima laboral. Un profesional pasivo puede evitar confrontaciones, pero permite que los errores se acumulen. En cambio, el ingeniero asertivo logra expresar desacuerdos con argumentos, escuchar otras perspectivas y construir soluciones colaborativas.'
                },
                {
                    type: 'paragraph',
                    text: 'Además, los modelos de comunicación estudiados, como el de **Berlo** y el de **Osgood**, permiten comprender que el mensaje no siempre es recibido como fue emitido. Cada persona interpreta la información desde su experiencia, emociones y formación. Ignorar este fenómeno puede conducir a decisiones erróneas y conflictos innecesarios.'
                },
                {
                    type: 'paragraph',
                    text: 'En mi opinión, la educación en ingeniería debería integrar con mayor profundidad el desarrollo de habilidades comunicativas, no como asignaturas aisladas, sino como competencias transversales en todos los proyectos académicos. La capacidad de explicar una solución técnica en términos claros, negociar prioridades o gestionar desacuerdos es tan relevante como saber programar.'
                },
                {
                    type: 'paragraph',
                    text: 'El ingeniero del siglo XXI no solo diseña sistemas; también **construye puentes entre la tecnología y las personas**. En una era de transformación digital, donde las soluciones tecnológicas impactan directamente en la sociedad, la comunicación asertiva se convierte en un elemento ético y profesional.'
                },
                {
                    type: 'paragraph',
                    text: 'En definitiva, dominar lenguajes de programación es importante. Pero **dominar el lenguaje humano es indispensable**.'
                }
            ]
        },
        {
            id: 'article-10',
            path: '/article/10',
            title: 'Conclusión general: Comunicar también es transformar',
            type: 'article',
            author: 'Santiago Londoño Gaviria',
            category: 'Epílogo',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
            content: [
                {
                    type: 'paragraph',
                    text: 'A lo largo de esta revista se ha evidenciado que la comunicación no es un elemento accesorio dentro de la Ingeniería de Sistemas, sino un **componente estructural del ejercicio profesional**. Desde los modelos teóricos de Osgood y Berlo hasta el análisis de estilos comunicativos y la gestión de conflictos en equipos interdisciplinarios, queda claro que el éxito tecnológico está profundamente ligado a la calidad del proceso comunicativo.'
                },
                {
                    type: 'paragraph',
                    text: 'En el desarrollo de proyectos tecnológicos, el ingeniero no interactúa únicamente con máquinas o líneas de código. Interactúa con personas: clientes que expresan necesidades, equipos que interpretan requerimientos, líderes que toman decisiones estratégicas y usuarios finales que experimentan el producto. En cada uno de estos escenarios, la forma en que se transmite y se interpreta el mensaje puede determinar el rumbo del proyecto.'
                },
                {
                    type: 'paragraph',
                    text: 'La entrevista realizada permitió comprender que la **comunicación asertiva** es transversal a todas las disciplinas. No se trata únicamente de hablar con claridad, sino de comprender contextos, gestionar emociones y adaptar el lenguaje según el receptor. Esta capacidad se vuelve aún más relevante en entornos interdisciplinarios, donde cada profesional posee marcos conceptuales distintos.'
                },
                {
                    type: 'paragraph',
                    text: 'Asimismo, el análisis de los estilos comunicativos demostró que la agresividad deteriora relaciones, la pasividad debilita procesos y la asertividad fortalece la cooperación. En entornos ágiles y colaborativos, esta última se convierte en una herramienta estratégica para resolver conflictos, alinear expectativas y mejorar la calidad del producto final.'
                },
                {
                    type: 'paragraph',
                    text: 'La transformación digital que viven las organizaciones no depende únicamente de infraestructura tecnológica o innovación en software. Depende, en gran medida, de la capacidad de los profesionales para dialogar, negociar y construir soluciones de manera conjunta. En este sentido, **comunicar no es solo transmitir información; es generar comprensión**.'
                },
                {
                    type: 'paragraph',
                    text: 'En conclusión, el ingeniero del siglo XXI debe asumir que su formación técnica debe ir acompañada de competencias comunicativas sólidas. La excelencia profesional no se mide únicamente por la eficiencia del sistema desarrollado, sino por la capacidad de integrar conocimiento técnico con sensibilidad humana.'
                },
                {
                    type: 'paragraph',
                    text: 'Porque al final, **la tecnología transforma procesos, pero la comunicación transforma personas**.'
                }
            ]
        },
        {
            id: 'article-11',
            path: '/article/11',
            title: 'Referencias Bibliográficas',
            type: 'article',
            author: 'Equipo Editorial',
            category: 'Bibliografía',
            image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80',
            content: [
                {
                    type: 'references-list',
                    items: [
                        'Berlo, D. K. (1960). *The Process of Communication: An Introduction to Theory and Practice*. Holt, Rinehart and Winston.',
                        'Cuellar Rodríguez, A. D. (2019). *Conceptualización y características de la asertividad (Unidad 1 – E.A.2)*. Universidad del Quindío, Unidad de Virtualización.',
                        'Cuellar Rodríguez, A. D. (2019). *Modelos comunicativos (Unidad 1 – E.A.1)*. Universidad del Quindío, Unidad de Virtualización.',
                        'Guardia, G. (2009). *Comunicación y relaciones interpersonales*. Editorial Universitaria.',
                        'Osgood, C. E. (1954). *Psycholinguistics: A Survey of Theory and Research Problems*. Journal of Abnormal and Social Psychology.',
                        'Real Academia Española. (s.f.). *Comunicación*. En Diccionario de la lengua española. Recuperado el 14 de febrero de 2026, de https://dle.rae.es/comunicaci%C3%B3n',
                        'Shannon, C. E., & Weaver, W. (1949). *The Mathematical Theory of Communication*. University of Illinois Press.',
                        'Watzlawick, P., Bavelas, J. B., & Jackson, D. D. (2011). *Teoría de la comunicación humana: Interacciones, patologías y paradojas*. Herder Editorial.'
                    ]
                }
            ]
        },
    ]
};
