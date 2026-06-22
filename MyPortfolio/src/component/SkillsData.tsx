import Tailwind from '../assets/icons/tailwind-svgrepo-com.svg'
import ReactSvg from '../assets/react.svg'
import Figma from '../assets/icons/figma-svgrepo-com.svg'
import Node from '../assets/icons/nodejs-1.svg'
import Js from '../assets/icons/js-svgrepo-com.svg'
import Php from '../assets/icons/php2-svgrepo-com.svg'
import SQlite from '../assets/icons/sqlite.svg'
import Postgres from '../assets/icons/postgresql.svg'
import Mysql from '../assets/icons/mysql-3.svg'
import Cé from '../assets/icons/c-1.svg'
import Cplus from '../assets/icons/c.svg'
import Java from '../assets/icons/java-svgrepo-com.svg'
import Routage from '../assets/icons/router-svgrepo-com.svg'
import Git from '../assets/icons/github-icon-1.svg'
import Wind from '../assets/icons/microsoft-windows-22.svg'
import Linux from '../assets/icons/linux-svgrepo-com.svg'
import Docker from '../assets/icons/docker-svgrepo-com.svg'
import Vscode from '../assets/icons/vscode-svgrepo-com.svg'
import Odoo from '../assets/icons/odoo_logo.svg'
import Python from '../assets/icons/python-svgrepo-com.svg'
// import Chess from '../assets/icons/chess-8-svgrepo-com.svg'

import Antigravity from '../assets/jpeg/antigravity.jpeg'

import restau from '../assets/png/restau.png'
import appQt from '../assets/png/interfaceAppQt.png'
import javaVenteVoiture from '../assets/png/javaVenteVoiture.png'
import routageIP from '../assets/png/RoutageIP.png'
import omv from '../assets/png/OMV.png'
import resto from '../assets/png/resto.png'

import { MdWeb, MdNetworkCheck, MdLink } from "react-icons/md";
import { translations } from './i18n';

export interface ProjectType {
  name: string;
  description: string;
  descKey: string;
  image: string;
  link: string;
}

export interface SkillSectionType {
  title: keyof typeof translations.en;
  icon: React.ReactNode;
  items: { name: string; icon: string }[];
  projects?: ProjectType[];
}

const skillsData: SkillSectionType[] = [
  {
    title: 'skillsTech',
    icon: <MdWeb size={32} />,
    items: [
      { name: 'React', icon: ReactSvg },
      { name: 'Tailwind', icon: Tailwind },
      { name: 'Figma', icon: Figma },
      { name: 'Node.js', icon: Node },
      { name: 'JavaScript', icon: Js },
      { name: 'PHP', icon: Php },
      { name: 'SQLite', icon: SQlite },
      { name: 'PostgreSQL', icon: Postgres },
      { name: 'MySQL', icon: Mysql },
      { name: 'C++', icon: Cplus },
      { name: 'C', icon: Cé },
      { name: 'Java', icon: Java },
      { name: 'Odoo', icon: Odoo },
      { name: 'Python', icon: Python },
    ],
    projects: [
      {
        name: 'gestion resto',
        description: 'A user interface project that allows you to manage a restaurant and take online orders; the backend has not yet been deployed.',
        descKey: 'projectResto',
        image: resto,
        link: 'https://gestion-commande-react.vercel.app/'
      },
      {
        name: 'website restau',
        description: 'A complete restaurant website that I created during my first-year internship.',
        descKey: 'projectRestoDesc',
        image: restau,
        link: 'https://resto-flame.vercel.app/'
      },
      {
        name: 'app desktop',
        description: 'first application in JAVA about car selling with Apache NetBeans.',
        descKey: 'projectCarDesc',
        image: javaVenteVoiture,
        link: 'https://github.com/Rktmmnrn/JavaAppVenteVoiture'
      },
      {
        name: 'app desktop',
        description: 'first application about IT park management with QTCreator based on C++.',
        descKey: 'projectParkDesc',
        image: appQt,
        link: 'https://github.com/Rktmmnrn/ParckInformatiqueInC-'
      }
    ]
  },
  {
    title: 'skillsNet',
    icon: <MdNetworkCheck size={32} />,
    items: [
      { name: 'Routage IP', icon: Routage },
      { name: 'OpenMediaVault', icon: omv },
      { name: 'Windows', icon: Wind },
      { name: 'Linux', icon: Linux },
    ],
    projects: [
      {
        name: 'routage ip',
        description: 'first project with GNS3 using OSPF & RIP.',
        descKey: 'projectRouteDesc',
        image: routageIP,
        link: 'https://github.com/Rktmmnrn'
      }
    ]
  },
  {
    title: 'skillsOps',
    icon: <MdLink size={32} />,
    items: [
      { name: 'Docker', icon: Docker },
      { name: 'GitHub', icon: Git },
      {name: 'VSCode', icon: Vscode},
      {name: 'Antigravity', icon: Antigravity},
    ]
  },
];

export default skillsData;