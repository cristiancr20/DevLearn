import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri'
import * as HiIcons from 'react-icons/hi'
import * as BiIcons from 'react-icons/bi'


export const SidebarData = [
  {
    title: 'Inicio',
    path: '/inicio',
    icon: <HiIcons.HiHome />,
    cName: 'nav-text'
  },
  {
    title: 'Cursos',
    path: '/cursos',
    icon: <FaIcons.FaReadme/>,
    cName: 'nav-text'
  },
  {
    title: 'Equipo',
    path: '/equipo',
    icon: <RiIcons.RiTeamFill />,
    cName: 'nav-text'
  },
  {
    title: 'Salir',
    path: '/',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  },
];
