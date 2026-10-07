import type { Project } from "../../interfaces/dataInterface";

export const categories = ['Todos', 'Residencial', 'Comercial', 'Interiorismo', 'Restauración'] as const;



export const stats = [
    { value: "+15", label: "Años de trayectoria" },
    { value: "+120", label: "Proyectos realizados" },
    { value: "08", label: "Premios y menciones" },
];

export const services = [
    {
        title: "Diseño residencial de autor",
        description:
            "Casas y villas que responden a la topografía, el asoleamiento y la forma de vida de cada familia.",
    },
    {
        title: "Arquitectura comercial y hospitalidad",
        description:
            "Hoteles boutique, restaurantes y showrooms pensados para la experiencia y la rentabilidad.",
    },
    {
        title: "Proyecto ejecutivo y BIM",
        description:
            "Planos de precisión técnica, ingenierías coordinadas y modelado 3D.",
    },
    {
        title: "Supervisión de obra",
        description:
            "Control de presupuesto, contratistas y calidad en cada colado y acabado.",
    },
];

export const steps = [
    {
        title: "Diagnóstico",
        text: "Entrevista, estudio de sitio y presupuesto objetivo.",
    },
    {
        title: "Anteproyecto",
        text: "Modelos 3D, materiales y ajustes con el cliente.",
    },
    {
        title: "Proyecto ejecutivo",
        text: "Planos estructurales, eléctricos, hidráulicos y sanitarios.",
    },
    {
        title: "Trámites",
        text: "Gestión de licencias y permisos de construcción.",
    },
    {
        title: "Construcción",
        text: "Levantamientod de obra con supervisión diaria",
    },
    {
        title: "Obra y entrega",
        text: "Ejecución supervisada hasta la llave en mano.",
    },
];

export const servicesPage = [
    {
        id: "residencial",
        title: "Diseño arquitectónico residencial",
        subtitle: "Viviendas unifamiliares, residencias y casas de descanso.",
        image: "https://picsum.photos/seed/service-residencial/1000/750",
        description:
            "Proyectos a la medida, adaptados a la topografía, el clima y el estilo de vida de cada familia. Priorizamos orientación solar, ventilación natural y materiales nobles que envejecen con dignidad.",
        deliverables: [
            "Levantamiento y análisis de sitio",
            "Anteproyecto en 3D y planos arquitectónicos",
            "Renders diurnos y nocturnos",
        ],
    },
    {
        id: "comercial",
        title: "Arquitectura comercial y hospitalidad",
        subtitle: "Hoteles boutique, restaurantes, showrooms y oficinas.",
        image: "https://picsum.photos/seed/service-comercial/1000/750",
        description:
            "Infraestructura comercial que potencia la experiencia del cliente y la rentabilidad del negocio, optimizando circulaciones, accesibilidad y protección civil.",
        deliverables: [
            "Estudio de flujo y zonificación funcional",
            "Cumplimiento de uso de suelo y aforos",
            "Catálogo de conceptos y costos por m²",
        ],
    },
    {
        id: "supervision",
        title: "Supervisión y gerencia de obra",
        subtitle: "Control técnico, financiero y de tiempos.",
        image: "https://picsum.photos/seed/service-supervision/1000/750",
        description:
            "Aseguramos que lo diseñado en planos se ejecute con exactitud en el terreno: presupuestos, suministros y calidad de colados, armados e impermeabilizaciones.",
        deliverables: [
            "Bitácora digital con reportes fotográficos semanales",
            "Control de estimaciones y contratistas",
            "Recepción y entrega llave en mano",
        ],
    },
    {
        id: "interiorismo",
        title: "Interiorismo e iluminación",
        subtitle: "Atmósferas, carpintería a medida y confort lumínico.",
        image: "https://picsum.photos/seed/service-interiorismo/1000/750",
        description:
            "El interiorismo culmina la experiencia arquitectónica: paletas, texturas, iluminación y mobiliario integrado que optimiza cada rincón.",
        deliverables: [
            "Moodboard material y sensorial",
            "Planos de carpintería y herrería de detalle",
            "Cálculo lumínico y curaduría de mobiliario",
        ],
    },
    {
        id: "bim",
        title: "Modelado 3D y metodología BIM",
        subtitle: "Coordinación técnica libre de interferencias.",
        image: "https://picsum.photos/seed/service-bim/1000/750",
        description:
            "Modelamos digitalmente cada tubería, viga y muro antes de colocar el primer ladrillo, lo que reduce errores en obra y previene costos imprevistos.",
        deliverables: [
            "Modelo paramétrico y detección de interferencias",
            "Renders 4K y recorridos virtuales 360°",
            "Cuantificación exacta de materiales",
        ],
    },
    {
        id: "licencias",
        title: "Gestoría, licencias y trámites INAH",
        subtitle: "Certeza jurídica ante autoridades municipales y federales.",
        image: "https://picsum.photos/seed/service-licencias/1000/750",
        description:
            "Gestionamos licencias de construcción en Oaxaca y otros estados, incluyendo autorizaciones especializadas ante el Instituto Nacional de Antropología e Historia.",
        deliverables: [
            "Alineamiento, número oficial y licencia de construcción",
            "Expediente técnico para validación del INAH",
            "Firma de Director Responsable de Obra (D.R.O.)",
        ],
    },
];

export const teamMembers = [
    {
        name: "Arq. Mateo Valencia",
        role: "Socio fundador y director general",
        bio: "Maestro en Arquitectura Contemporánea por la UNAM. Más de 18 años liderando proyectos residenciales y patrimoniales.",
        image: "https://picsum.photos/seed/director-mateo-valencia/600/800",
    },
    {
        name: "Arq. Sofia Morales",
        role: "Directora de diseño y sustentabilidad",
        bio: "Especialista en arquitectura bioclimática y materiales regionales en proyectos de alta gama.",
        image: "https://picsum.photos/seed/directora-sofia-morales/600/800",
    },
    {
        name: "Ing. Arq. Carlos Mendoza",
        role: "Director de estructuras y obra",
        bio: "D.R.O. colegiado con experiencia en estructuras antisísmicas de concreto, acero y mampostería reforzada.",
        image: "https://picsum.photos/seed/director-carlos-mendoza/600/800",
    },
    {
        name: "Elena Ruiz",
        role: "Directora de interiorismo",
        bio: "Maestría en Milán. Especialista en carpintería de autor, textiles artesanales y escenas lumínicas.",
        image: "https://picsum.photos/seed/directora-elena-ruiz/600/800",
    },
];

// export const projectsData: Project[] = [
//     {
//         id: 'casa-cantera',
//         title: 'Casa Cantera & Luz',
//         category: 'Residencial',
//         location: 'San Felipe del Agua, Oaxaca',
//         year: '2025',
//         area: '480 m²',
//         image: 'https://picsum.photos/seed/casa-cantera-1/1200/800',
//         gallery: [
//             'https://picsum.photos/seed/casa-cantera-1/1200/800',
//             'https://picsum.photos/seed/casa-cantera-2/1200/800',
//             'https://picsum.photos/seed/casa-cantera-3/1200/800',
//         ],
//         summary: 'Residencia unifamiliar diseñada a partir de la integración de cantera verde oaxaqueña, concreto aparente y patios bioclimáticos.',
//         details: 'El proyecto se emplaza en una pendiente pronunciada, organizando los volúmenes en terrazas escalonadas que maximizan las vistas hacia el valle. Los muros de carga en piedra y los aleros de madera de huanacaxtle garantizan un confort térmico pasivo todo el año.',
//         highlights: ['Ventilación cruzada 100% natural', 'Captación pluvial de 30,000L', 'Patios interiores con vegetación endémica'],
//     },
//     {
//         id: 'complejo-mezcalero',
//         title: 'Pabellón Mezcalero & Cava',
//         category: 'Comercial',
//         location: 'Matatlán, Oaxaca',
//         year: '2024',
//         area: '920 m²',
//         image: 'https://picsum.photos/seed/pabellon-mezcal-1/1200/800',
//         gallery: [
//             'https://picsum.photos/seed/pabellon-mezcal-1/1200/800',
//             'https://picsum.photos/seed/pabellon-mezcal-2/1200/800',
//             'https://picsum.photos/seed/pabellon-mezcal-3/1200/800',
//         ],
//         summary: 'Espacio de destilería artesanal, área de catas y showroom comercial con estructura de acero corten y tapial de tierra estabilizada.',
//         details: 'Concebido como un homenaje a la tradición oaxaqueña, el edificio se funde con los campos de agave mediante tonalidades terrosas y una cubierta flotante que genera sombras generosas en el clima árido.',
//         highlights: ['Uso de tierra compactada del sitio', 'Iluminación natural cenital', 'Bodega subterránea de añejamiento a temperatura constante'],
//     },
//     {
//         id: 'villa-costera',
//         title: 'Villa Zicatela',
//         category: 'Residencial',
//         location: 'Puerto Escondido, Oaxaca',
//         year: '2025',
//         area: '360 m²',
//         image: 'https://picsum.photos/seed/villa-zicatela-1/1200/800',
//         gallery: [
//             'https://picsum.photos/seed/villa-zicatela-1/1200/800',
//             'https://picsum.photos/seed/villa-zicatela-2/1200/800',
//             'https://picsum.photos/seed/villa-zicatela-3/1200/800',
//         ],
//         summary: 'Arquitectura tropical de líneas limpias con alberca volada, celosías de barro y acabados de chukum.',
//         details: 'Una vivienda vacacional pensada para vivirse al aire libre. La frontera entre sala y terraza desaparece mediante ventanales corredizos empotrables, logrando una vista ininterrumpida hacia el Océano Pacífico.',
//         highlights: ['Piscina infinity con borde infinito', 'Acabados en Chukum impermeable natural', 'Estructura antisísmica de alta resistencia'],
//     },
//     {
//         id: 'hotel-boutique-centro',
//         title: 'Hotel Boutique & Restaurante Santo Domingo',
//         category: 'Restauración',
//         location: 'Centro Histórico, Oaxaca',
//         year: '2024',
//         area: '1,150 m²',
//         image: 'https://picsum.photos/seed/hotel-santo-domingo-1/1200/800',
//         gallery: [
//             'https://picsum.photos/seed/hotel-santo-domingo-1/1200/800',
//             'https://picsum.photos/seed/hotel-santo-domingo-2/1200/800',
//             'https://picsum.photos/seed/hotel-santo-domingo-3/1200/800',
//         ],
//         summary: 'Restauración integral de casona del siglo XIX catalogada por el INAH, adaptada a 12 suites de lujo y terraza gastronómica.',
//         details: 'Se consolidaron los arcos de cantera y techumbres de viga de madera originales, incorporando una discreta estructura moderna de cristal y acero que conecta los patios históricos con servicios contemporáneos.',
//         highlights: ['Autorizaciones INAH al 100%', 'Conservación de vestigios coloniales', 'Rooftop con vista al Templo de Santo Domingo'],
//     },
//     {
//         id: 'penthouse-interiorismo',
//         title: 'Penthouse Reforma',
//         category: 'Interiorismo',
//         location: 'Ciudad de México',
//         year: '2025',
//         area: '290 m²',
//         image: 'https://picsum.photos/seed/penthouse-reforma-1/1200/800',
//         gallery: [
//             'https://picsum.photos/seed/penthouse-reforma-1/1200/800',
//             'https://picsum.photos/seed/penthouse-reforma-2/1200/800',
//             'https://picsum.photos/seed/penthouse-reforma-3/1200/800',
//         ],
//         summary: 'Diseño interior contemporáneo con carpintería a medida en nogal, iluminación arquitectónica indirecta y microcemento continuo.',
//         details: 'Rediseño total de la distribución interior para generar un open-plan donde la cocina con isla monolítica de cuarcita negra se convierte en el núcleo de convivencia.',
//         highlights: ['Domótica e iluminación Lutron', 'Mobiliario exclusivo hecho a medida', 'Acústica optimizada en todas las recámaras'],
//     },
//     {
//         id: 'corporativo-oaxaca',
//         title: 'Edificio Corporativo & Coworking Ágora',
//         category: 'Comercial',
//         location: 'Oaxaca de Juárez, Oax.',
//         year: '2024',
//         area: '1,800 m²',
//         image: 'https://picsum.photos/seed/edificio-agora-1/1200/800',
//         gallery: [
//             'https://picsum.photos/seed/edificio-agora-1/1200/800',
//             'https://picsum.photos/seed/edificio-agora-2/1200/800',
//             'https://picsum.photos/seed/edificio-agora-3/1200/800',
//         ],
//         summary: 'Edificio de 4 niveles para oficinas corporativas con certificación de eficiencia energética y terraza verde comunitaria.',
//         details: 'Fachada ventilada con doble piel cerámica que amortigua la radiación solar y planta libre flexible que permite subdividir espacios según las necesidades operativas de los inquilinos.',
//         highlights: ['Certificación LEED preliminar', 'Paneles solares de autoconsumo', 'Elevador panorámico y accesibilidad universal'],
//     },
// ];