import React from "react";
import { Link } from "react-router-dom";
import './header.scss';
import mainLogo from './logo.svg';

const Header = ({ isAuth, login, id }) => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__row">
               <div className="header__logo">
                  <img src={mainLogo} alt="logo" />
               </div>
               <div className="header__login">
                  {!isAuth
                     ? <Link to={'/login'}>
                        Login
                     </Link>
                     : <Link to={`/profile/${id}`}>
                        {login}
                     </Link>}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;