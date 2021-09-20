import React, { Component } from "react";
import ReactDOM from 'react-dom';


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
                     <img src="logo192.png" alt="logo" />
                  </div>
               </div>
            </div>
         </header>
      )
   }
}
export default Header;