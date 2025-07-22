import Tailwind from '../assets/icons/tailwind-svgrepo-com.svg'
import Sass from '../assets/icons/sass-svgrepo.svg'
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
import Qt from '../assets/icons/qt-1.svg'
import Java from '../assets/icons/java-svgrepo-com.svg'
import Routage from '../assets/icons/router-svgrepo-com.svg'
import Git from '../assets/icons/github-icon-1.svg'
import Wind from '../assets/icons/microsoft-windows-22.svg'
import Linux from '../assets/icons/linux-svgrepo-com.svg'
import Chess from '../assets/icons/chess-8-svgrepo-com.svg'

import { MdWeb, MdSettings, MdNetworkCheck, MdLink } from "react-icons/md";

const skillsData = [
  {
    title: 'web & database',
    icon: <MdWeb size={32} />,
        items: [
          { name: 'React', icon: ReactSvg },
          { name: 'Tailwind', icon: Tailwind },
          { name: 'Sass', icon: Sass },
          { name: 'Figma', icon: Figma },
          { name: 'Node.js', icon: Node },
          { name: 'JavaScript', icon: Js },
          { name: 'PHP', icon: Php },
          { name: 'SQLite', icon: SQlite },
          { name: 'PostgreSQL', icon: Postgres },
          { name: 'MySQL', icon: Mysql },
        ],
  },
  {
    title: 'system & logiciel',
    icon: <MdSettings size={32} />,
    items: [
      { name: 'C++', icon: Cplus },
      { name: 'QtCreator', icon: Qt },
      { name: 'C', icon: Cé },
      { name: 'Java', icon: Java },
    ],
  },
  {
    title: 'network & tools',
    icon: <MdNetworkCheck size={32} />,
    items: [
      { name: 'Routage IP', icon: Routage },
      { name: 'GitHub', icon: Git },
    ],
  },
  {
    title: 'others',
    icon: <MdLink size={32} />,
    items: [
      { name: 'Windows', icon: Wind },
      { name: 'Linux', icon: Linux },
      { name: 'Chess', icon: Chess },
    ],
  },
];

export default skillsData;