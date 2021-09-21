import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import './aside.scss';

let nav = [
   {
      name: 'My Profile',
      to: '/profile',
      className: 'menu-list__item',
   },

   {
      name: 'Dialogs',
      to: '/dialogs',
      className: 'menu-list__item',
   },

   {
      name: 'News',
      to: '/news',
      className: 'menu-list__item',
   },

   {
      name: 'Contact',
      to: '/contact',
      className: 'menu-list__item',
   },

   {
      name: 'About',
      to: '/about',
      className: 'menu-list__item',
   },
]


class Aside extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <aside className="aside">
            <nav className='aside__menu menu'>
               <ul className="menu__list menu-list">
                  {nav.map(({ name, to, className }) => (
                     <li key={name + to} className={className}><NavLink to={to}>{name}</NavLink></li>)
                  )}
               </ul>
            </nav>
         </aside>
      )
   }
}

export default Aside;