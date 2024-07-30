import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Mail, Computer, Book, Rocket, Speech,Github,  BarChart2, Database, BarChart, Activity, Briefcase, Type, DollarSign, Cpu, FileText} from "lucide-react";

import { Code, Brain, GitBranch, Cloud, Globe, Sparkles, LineChart, PieChart, Bot, Workflow, Search, Zap } from 'lucide-react';

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={40} strokeWidth={1} />,
        src: "https://github.com/fernandogitme",
    },
    {
        id: 2,
        logo: <Linkedin size={40} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/fernando-lucas/",
    },
    {
        id: 3,
        logo: <Mail  size={40} strokeWidth={1} />,
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
        lineRight: false,
        lineRightMobile: false,
    },

];

export const serviceData = [
    {
        icon: <Code size={60} />,
        title: "Python",
        description: "Lenguaje principal para análisis de datos y ML",
    },
    {
        icon: <Database size={60} />,
        title: "SQL",
        description: "Consulta y manipulación de bases de datos",
    },
    {
        icon: <PieChart size={60} />,
        title: "OpenAI API",
        description: "Integración de modelos de lenguaje avanzados",
    },
    {
        icon: <Brain size={60} />,
        title: "TensorFlow & Keras",
        description: "Frameworks para deep learning",
    },
    {
        icon: <Sparkles size={60} />,
        title: "Scikit-learn",
        description: "Machine learning y modelado predictivo",
    },
    {
        icon: <Zap size={60} />,
        title: "XGBoost",
        description: "Algoritmo de boosting para ML",
    },
    {
        icon: <BarChart2 size={60} />,
        title: "NumPy & Pandas",
        description: "Análisis y manipulación de datos",
    },
    {
        icon: <Workflow size={60} />,
        title: "PySpark",
        description: "Procesamiento de datos a gran escala",
    },
    {
        icon: <Search size={60} />,
        title: "BeautifulSoup & Requests",
        description: "Web scraping y solicitudes HTTP",
    },
    {
        icon: <Globe size={60} />,
        title: "Streamlit",
        description: "Creación de aplicaciones web para datos",
    },
    {
        icon: <Bot size={60} />,
        title: "Selenium",
        description: "Automatización de navegadores web",
    },
    {
        icon: <LineChart size={60} />,
        title: "Plotly",
        description: "Visualizaciones interactivas",
    },
    {
        icon: <BarChart size={60} />,
        title: "Matplotlib & Seaborn",
        description: "Visualización de datos",
    },
    {
        icon: <GitBranch size={60} />,
        title: "Git & GitHub",
        description: "Control de versiones y colaboración",
    },
    {
        icon: <Cloud size={60} />,
        title: "Google Cloud",
        description: "Servicios en la nube y computación",
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
