import React from "react";

import AsideContainer from '../../containers/AsideContainer';
import Content from "../content/Content";
import './main.scss';

const Main = () => {
   return (
      <main className="main">
         <div className="container">
            <div className="main__row">
               <AsideContainer />
               <Content />
            </div>
         </div>
      </main>
   )
}

export default Main;