export type Language = 'en' | 'fr' | 'mg';

export const translations = {
  en: {
    // Header & Navigation
    availableForWork: "AVAILABLE",
    available: "AVAILABLE",
    skillsAndProjects: "skills & projects",
    experiences: "experiences",
    about: "about",
    contact: "contact",
    designedBy: "designed by",

    // Hero
    hiIm: "hi, i'm",
    downloadCv: "./download_cv.sh",
    typewriterWords: [
      "developer web & desktop",
      "react & python developer",
      "admin network & system"
    ],

    // About
    aboutTitle: "About Me",
    aboutPara1: "Passionate about technology, I am a computer science student at the École Nationale Informatique de Madagascar (ENI). I enjoy building applications — web and desktop — and constantly push my skills forward.",
    aboutPara2: "I have worked on various projects involving web and desktop application development, and network configuration. I am particularly interested in network security.",

    // Experiences
    experiencesTitle: "experiences",
    eniPoste: "Computer Science Student",
    eniPeriode: "2023 — Today",
    eniDesc: "Several mini-projects with Php, VueJS, C#, C++, C and Java. Academic projects covering databases, system programming, and network architecture.",
    sahaPoste: "Front-End Developer",
    sahaPeriode: "Dec 2024 — Feb 2025",
    sahaDesc: "Modern responsive interface integration with HTML, JS and TailwindCSS. Collaboration with designers and developers in an agile environment.",
    eneamPoste: "FullStack Developer",
    eneamPeriode: "Sept 2025 — Dec 2025",
    eneamDesc: "Website conception with integration of an intranet pointing platform with ODOO, DJANGO et POSTGRESQL.",

    // Skills
    skillsTitle: "Skills & Projects",
    skillsTech: "langage & technology",
    skillsNet: "network & system",
    skillsOps: 'devops & tools',
    viewAll: "view all",
    viewLess: "view less",
    myProjects: "My projects",
    projectResto: "A user interface project that allows you to manage a restaurant and take online orders; the backend has not yet been deployed.",
    projectRestoDesc: "A complete restaurant website that I created during my first-year internship.",
    projectCarDesc: "first application in JAVA about car selling with Apache NetBeans.",
    projectParkDesc: "first application about IT park management with QTCreator based on C++.",
    projectRouteDesc: "first project with GNS3 using OSPF & RIP.",

    // Contact
    contactTitle: "Contact",
    contactDesc: "Currently open to new opportunities and collaborations — feel free to reach out."
  },
  fr: {
    // Header & Navigation
    availableForWork: "DISPONIBLE",
    available: "DISPONIBLE",
    skillsAndProjects: "compétences & projets",
    experiences: "expériences",
    about: "à propos",
    contact: "contact",
    designedBy: "conçu par",

    // Hero
    hiIm: "salut, je suis",
    downloadCv: "./telecharger_cv.sh",
    typewriterWords: [
      "développeur web & desktop",
      "développeur react & python",
      "admin réseau & système"
    ],

    // About
    aboutTitle: "À Propos de Moi",
    aboutPara1: "Passionné par la technologie, je suis étudiant en informatique à l'École Nationale d'Informatique de Madagascar (ENI). J'aime concevoir des applications — web et desktop — et je cherche constamment à faire progresser mes compétences.",
    aboutPara2: "J'ai travaillé sur divers projets impliquant du développement d'application Web et Bureau, et la configuration Réseau. Particulièrement intéressé par la sécurité réseau.",

    // Experiences
    experiencesTitle: "expériences",
    eniPoste: "Étudiant en Informatique",
    eniPeriode: "2023 — Aujourd'hui",
    eniDesc: "Plusieurs mini-projets en Php, VueJS, C#, C++, C et Java. Projets académiques couvrant les bases de données, la programmation système et l'architecture réseau.",
    sahaPoste: "Développeur Front-End",
    sahaPeriode: "Dec 2024 — Fev 2025",
    sahaDesc: "Intégration d'interfaces réactives et modernes avec HTML, JS et TailwindCSS. Collaboration avec des designers et développeurs dans un environnement agile.",
    eneamPoste: "Développeur Full-Stack",
    eneamPeriode: "Sept 2025 — Dec 2025",
    eneamDesc: "Conception du site Web avec integration d'une plateforme de pointage intranet avec ODOO, DJANGO et POSTGRESQL.",

    // Skills
    skillsTitle: "Compétences & Projets",
    skillsTech: "langage & technologie",
    skillsNet: "réseau & système",
    skillsOps: 'devops & outils',
    viewAll: "voir tout",
    viewLess: "voir moins",
    myProjects: "Mes projets",
    projectResto: "Une projet IHM qui permet de gérer un resto et de prendre des commandes en ligne, backend pas encore déployer.",
    projectRestoDesc: "Un site web complet de restaurant que j'ai créé pendant mon stage de première année.",
    projectCarDesc: "Première application en JAVA de vente de voitures avec Apache NetBeans.",
    projectParkDesc: "Première application de gestion de parc informatique avec QTCreator basée sur C++.",
    projectRouteDesc: "Premier projet avec GNS3 utilisant OSPF & RIP.",

    // Contact
    contactTitle: "Contact",
    contactDesc: "Actuellement ouvert aux opportunités et aux collaborations — n'hésitez pas à me contacter."
  },
  mg: {
    // Header & Navigation
    availableForWork: "AFAKA_MIASA",
    available: "AFAKA",
    skillsAndProjects: "fahaizana & tetikasa",
    experiences: "traikefa",
    about: "mombamomba",
    contact: "fifandraisana",
    designedBy: "noforonin'i",

    // Hero
    hiIm: "salama, izaho dia",
    downloadCv: "./haka_cv.sh",
    typewriterWords: [
      "mpamorona tranonkala & rindrankajy",
      "fitaovana react & python",
      "mpandraharaha tambajotra & rafitra"
    ],

    // About
    aboutTitle: "Mombamomba ahy",
    aboutPara1: "Mpankafy teknolojia, mpianatra ho an'ny informatika ao amin'ny École Nationale d'Informatique de Madagascar (ENI) aho. Tiako ny manoratra rindrankajy — tranonkala & desktop — ary miezaka hatrany manatsara ny fahaizako.",
    aboutPara2: "Efa niasa tamina tetikasa samihafa mifandraika amin'ny fampandrosoana front-end, tahirin-kevitra (databases) ary fandaharana rafitra (system programming) aho. Mahaliana ahy manokana ny fiarovana tambajotra, design systems ary fiaraha-miasa mahomby.",

    // Experiences
    experiencesTitle: "traikefa",
    eniPoste: "Mpianatra Informatika",
    eniPeriode: "2023 — ankehitriny",
    eniDesc: "Tetikasa madinika maromaro tamin'ny PHP, VueJS, C#, C++, C ary Java. Tetikasa akademika mikasika ny tahirin-kevitra, fandaharana rafitra ary mari-trano tambajotra.",
    sahaPoste: "Developpeur Front-End",
    sahaPeriode: "Des 2024 — Feb 2025",
    sahaDesc: "Fampidirana interface modely sy mandray andraikitra amin'ny HTML, JS ary TailwindCSS. Fiaraha-miasa amin'ny mpamorona sy mpandraharaha amin'ny tontolo agile.",
    eneamPoste: "Developpeur Full-Stack",
    eneamPeriode: "Sept 2025 — Des 2025",
    eneamDesc: "Fanamboarana ny tranokala sy fampidirana modely fanamarinana ny fahatongavan'ny mpiasa, vita t@ ODOO, DJANGO sy POSTGRESQL",

    // Skills
    skillsTitle: "Fahaizana & Tetikasa",
    skillsTech: "langage & technology",
    skillsNet: "tambazotra & rafitra",
    skillsOps: 'devops & fitaovana',
    viewAll: "hijery ny rehetra",
    viewLess: "hikatona",
    myProjects: "Ny tetikasako",
    projectResto: "Tetik'asa interface tsara izay ahafahanao mitantana trano fisakafoanana sy mandray baiko an-tserasera; ny backend dia tsy mbola napetraka.",
    projectRestoDesc: "Tranonkala fisakafoanana feno izay noforoniko nandritra ny internship tamin'ny taona voalohany.",
    projectCarDesc: "Rindrankajy voalohany amin'ny JAVA momba ny fivarotana fiara amin'ny Apache NetBeans.",
    projectParkDesc: "Rindrankajy voalohany momba ny fitantanana ny zaridaina IT miaraka amin'ny QTCreator miorina amin'ny C++.",
    projectRouteDesc: "Tetikasa voalohany tamin'ny GNS3 mampiasa OSPF ary RIP.",

    // Contact
    contactTitle: "fifandraisana",
    contactDesc: "Misokatra amin'ny fahafahana vaovao sy fiaraha-miasa amin'izao fotoana izao — aza misalasala mifandray."
  }
};
