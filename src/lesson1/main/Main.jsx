import React from "react";

import Aside from "../aside/Aside";
import Content from "../content/Content";
import './main.scss';

const Main = () => {
   return (
      <main className="main">
         <div className="container">
            <div className="main__row">
               <Aside />
               <Content />
            </div>
         </div>
      </main>
   )
}

export default Main;