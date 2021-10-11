import React from "react";
import { NavLink, } from 'react-router-dom';
import './Aside.scss';

const Aside = ({ myId }) => {
   let nav = [
      {
         name: 'My Profile',
         to: `/profile/${myId}`,
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
         name: 'Users',
         to: '/users',
         className: 'menu-list__item',
      },

      {
         name: 'About',
         to: '/about',
         className: 'menu-list__item',
      },
   ]

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

export default Aside;