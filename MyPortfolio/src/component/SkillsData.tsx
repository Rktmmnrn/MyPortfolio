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
import Django from '../assets/icons/django-svgrepo-com.svg'
import FastAPI from '../assets/icons/fastapi-svgrepo-com.svg'
// import Chess from '../assets/icons/chess-8-svgrepo-com.svg'

import Antigravity from '../assets/jpeg/antigravity.jpeg'

import restau from '../assets/png/restau.png'
import appQt from '../assets/png/interfaceAppQt.png'
import javaVenteVoiture from '../assets/png/javaVenteVoiture.png'
import routageIP from '../assets/png/RoutageIP.png'
import omv from '../assets/png/OMV.png'
import resto from '../assets/png/resto.png'
import eneamwebsite from '../assets/png/pageAcceuil.png'

import { MdWeb, MdDeveloperMode, MdLink, MdLan, MdDataArray } from "react-icons/md";
import { TranslationKey } from './i18n';

export type ProjectCategory = 'web' | 'desktop' | 'network';

export interface ProjectType {
  name: string;
  descKey: TranslationKey;
  image: string;
  link: string;
  category: ProjectCategory;
  stack: string[];
  linkType: 'live' | 'code';
  featured?: boolean;
}

export const projectsData: ProjectType[] = [
  {
    name: 'Site ENEAM avec integration gestion pointage',
    descKey: 'projectEneam',
    image: eneamwebsite,
    link: 'https://github.com/Rktmmnrn/Projet_eneam',
    category: 'web',
    stack: ['Odoo', 'Django', 'PostgreSQL', 'Docker'],
    linkType: 'code',
    featured: true,
  },
  {
    name: 'Gestion resto',
    descKey: 'projectResto',
    image: resto,
    link: 'https://gestion-commande-react.vercel.app/',
    category: 'web',
    stack: ['React', 'Tailwind', 'Django', 'SQLite'],
    linkType: 'live',
    featured: true,
  },
  {
    name: 'website restau',
    descKey: 'projectRestoDesc',
    image: restau,
    link: 'https://resto-flame.vercel.app/',
    category: 'web',
    stack: ['HTML', 'CSS', 'JS'],
    linkType: 'live',
  },
  {
    name: 'Vente voiture',
    descKey: 'projectCarDesc',
    image: javaVenteVoiture,
    link: 'https://github.com/Rktmmnrn/JavaAppVenteVoiture',
    category: 'desktop',
    stack: ['Java', 'Maven', 'MySQL', 'Apache'],
    linkType: 'code',
  },
  {
    name: 'Parc informatique',
    descKey: 'projectParkDesc',
    image: appQt,
    link: 'https://github.com/Rktmmnrn/ParckInformatiqueInC-',
    category: 'desktop',
    stack: ['C++', 'MySQL'],
    linkType: 'code',
  },
  {
    name: 'Routage IP',
    descKey: 'projectRouteDesc',
    image: routageIP,
    link: 'https://github.com/Rktmmnrn',
    category: 'network',
    stack: ['GNS3', 'OSPF', 'RIP'],
    linkType: 'code',
  },
];

export interface SkillGroupType {
  title: TranslationKey;
  icon: React.ReactNode;
  items: { name: string; icon: string }[];
}

const skillsData: SkillGroupType[] = [
  {
    title: 'skillsNet',
    icon: <MdLan size={20} />,
    items: [
      { name: 'Routage IP', icon: Routage },
      { name: 'OpenMediaVault', icon: omv },
      { name: 'Windows', icon: Wind },
      { name: 'Linux', icon: Linux },
    ],
  },
  {
    title: 'skillsTech',
    icon: <MdWeb size={20} />,
    items: [
      { name: 'React', icon: ReactSvg },
      { name: 'Tailwind', icon: Tailwind },
      { name: 'Django', icon: Django },
      { name: 'FastAPI', icon: FastAPI },
      { name: 'Node.js', icon: Node },
      { name: 'Odoo', icon: Odoo },
      { name: 'PHP', icon: Php },
      { name: 'Figma', icon: Figma },
    ]
  },
  {
    title: 'skillsLang',
    icon: <MdDeveloperMode size={20} />,
    items: [
      { name: 'JavaScript', icon: Js },
      { name: 'Python', icon: Python },
      { name: 'Java', icon: Java },
      { name: 'C', icon: Cé },
      { name: 'C++', icon: Cplus },
    ]
  },
  {
    title: 'skillsDb',
    icon: <MdDataArray size={20} />,
    items: [
      { name: 'MySQL', icon: Mysql },
      { name: 'PostgreSQL', icon: Postgres },
      { name: 'SQLite', icon: SQlite },
    ]
  },
  {
    title: 'skillsOps',
    icon: <MdLink size={20} />,
    items: [
      { name: 'Docker', icon: Docker },
      { name: 'GitHub', icon: Git },
      { name: 'VSCode', icon: Vscode },
      { name: 'Antigravity', icon: Antigravity },
    ]
  },
];

export default skillsData;