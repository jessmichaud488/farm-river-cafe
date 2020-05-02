import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'HOME' },
  { to: '/menu', label: 'MENU' },
  { to: '/crafts', label: 'CRAFTS' },
  { to: '/openmic', label: 'OPEN MIC' },
  { to: '/contact', label: 'CONTACT' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav
