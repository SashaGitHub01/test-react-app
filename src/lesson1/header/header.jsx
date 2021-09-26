import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './header.scss';
import mainLogo from './logo.svg';

class Header extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <header className="header">
            <div className="container">
               <div className="header__row">
                  <div className="header__logo">
                     <img src={mainLogo} alt="logo" />
                  </div>
               </div>
            </div>
         </header>
      )
   }
}
export default Header;