import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './aside.scss';

let nav = [
   {
      name: 'Home',
      to: '#',
      className: 'menu-list__item',
   },

   {
      name: 'News',
      to: '#',
      className: 'menu-list__item',
   },

   {
      name: 'Contact',
      to: '#',
      className: 'menu-list__item',
   },

   {
      name: 'About',
      to: '#',
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
                     <li key={name + to} className={className}><a href={to}>{name}</a></li>)
                  )}
               </ul>
            </nav>
         </aside>
      )
   }
}

export default Aside;