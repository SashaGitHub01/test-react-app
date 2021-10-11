import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import mainLogo from './logo.svg';

const Header = ({ isAuth, login, id, logout }) => {

   const handleLogout = () => {
      logout();
   }

   return (
      <header className="header">
         <div className="container">
            <div className="header__row">
               <div className="header__logo">
                  <img src={mainLogo} alt="logo" />
               </div>
               <div className="header__info">
                  {
                     !isAuth
                        ? <Link to={'/login'}>
                           <span>Login</span>
                        </Link>
                        : <>
                           <Link to={`/profile/${id}`}>
                              <span>{login}</span>
                           </Link>
                           <button className="header__quit" onClick={handleLogout}>
                              Выйти
                           </button>
                        </>
                  }
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;