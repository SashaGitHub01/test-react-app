import React from "react";

import AsideContainer from '../../containers/AsideContainer';
import Content from "../Content/Content";
import './Main.scss';

const Main = () => {
   return (
      <main className="main">
         <div className="main__row">
            <AsideContainer />
            <Content />
         </div>
      </main>
   )
}

export default Main;