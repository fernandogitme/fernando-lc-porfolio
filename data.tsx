import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Mail, Computer, Book, Rocket, Speech,Github,  BarChart2, Database, BarChart, Activity, Briefcase, Type, DollarSign, Cpu, FileText} from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={35} strokeWidth={1} />,
        src: "https://github.com/fernandogitme",
    },
    {
        id: 2,
        logo: <Linkedin size={35} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/fernando-lucas/",
    },
    {
        id: 3,
        logo: <Mail  size={55} strokeWidth={2} />,
        src: "https://mail.google.com/mail/?view=cm&fs=1&to=fernandolucasprof@gmail.com",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    }
];

export const dataAboutPage = [
    {
        id: 1,
        title: "DATA SCIENCE CONSULTANT",
        subtitle: "Hanbai, Madrid, ES (remoto)",
        description: "Entrenamiento de un modelo de Deep Learning para mejorar la precisión en la selección de candidatos durante la primera fase del proceso de contratación, junto con el desarrollo de recomendaciones automa zadas basadas en análisis semán co y contextual mediante un modelo de NLP. Se u lizaron técnicas de embeddings y medidas de distancia para analizar y comparar perﬁles de candidatos, logrando una precisión del 77%",
        date: "JUN. 2024 - JUL. 2024",
    },
    {
        id: 2,
        title: "FINANCE SPECIALIST | FINANCE SPECIALIST MANAGER",
        subtitle: "Lean Finance, Sevilla, ES (híbrido)",
        description: "Asesoramiento a CEOs de startups líderes en España en materia de dirección financiera corporativa y financiamiento externo. También lideré un equipo de 5 personas en finanzas, contribuyendo al aumento de ingresos en un 275% y expandiendo el equipo de 4 a más de 20 personas.",
        date: "MAR. 2021 - DIC. 2023",
    },
    {
        id: 3,
        title: "M&A advisor | Asistente operaciones",
        subtitle: "Corporate Finance in Europe, NL (remoto)",
        description: "En el rol de M&A Advisor, participé en proyectos de fusiones y adquisiciones junto al CEO, analizando empresas para identificar targets adecuados, redactando documentos de venta y compra, manteniendo relaciones con responsables de empresas y compradores, y elaborando modelos financieros. Como Asistente de Operaciones, traduje documentos del inglés al español, gestioné tareas de backoffice en la web e intranet, elaboré hojas de cálculo con información financiera y no financiera, y desarrollé bases de datos de posibles targets para inversores y compradores.",
        date: "NOV. 2019 - JUN. 2021",
    },
    {
        id: 4,
        title: "Prácticas administración y compras",
        subtitle: "Isla Mágica, Sevilla, ES (presencial)",
        description: "Mis funciones principales incluyeron la gestión de recepciones y compras de existencias a través del ERP NAVISION, el traspaso telemático de mercancía a las diferentes unidades de restauración del parque mediante el mismo software, la comparación de albaranes y facturas con los pedidos previos, y la clasificación de la documentación",
        date: "MAY. 2019 - SEP. 2019",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 500,
        text: "empresas asesoradas en estrategias financieras",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 75,

        text: "Porciento de precision en los proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 20,
        text: "librerías de IA utilizadas en proyectos de Python",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <BarChart2 size={60}/>,
        title: "Python",
        description: "",
    },
    {
        icon: <Database size={60}/>,
        title: "SQL",
        description: "",
    },
    {
        icon: <BarChart size={60}/>,
        title: "Análisis de Datos",
        description: "",
    },
    {
        icon: <Activity size={60}/>,
        title: "Machine Learning",
        description: "",
    },
    {
        icon: <Briefcase size={60}/>,
        title: "Analista De Negocios",
        description: "",
    },
    {
        icon: <Type size={60}/>,
        title: "Procesamiento de Lenguaje Natural (NLP)",
        description: "",
    },
    {
        icon: <DollarSign size={60}/>,
        title: "Asesoramiento financiero",
        description: "",
    },
    {
        icon: <Cpu size={60}/>,
        title: "Deep Learning",
        description: "",
    },
    {
        icon: <FileText size={60}/>,
        title: "Diseño de Reportes",
        description: "",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Sistemas de recomendación a través de Embeddings y NLP en el sector de RRHH",
        image: "/image-2.png",
        urlGithub: "#!",
        urlDemo: "https://www.beautiful.ai/player/-O24zutWNDC7EbLTD679",
    },
    {
        id: 2,
        title: "Aplicación de modelos de Machine Learning y Deep Learning en el sector inmobiliario",
        image: "/image-1.png",
        urlGithub: "#!",
        urlDemo: "https://www.beautiful.ai/player/-O25-4gpMbNGqL_FvvCY",
    }
];
