import React from "react";
import './Main.scss';

import AsideContainer from '../../containers/AsideContainer';
import Content from "../Content/Content";
import ErrorsBox from "../ErrorsBox/ErrorsBox";

const Main = ({ errors }) => {
   return (
      <main className="main">
         <div className="main__row">
            <ErrorsBox errors={errors} />
            <AsideContainer />
            <Content />
         </div>
      </main>
   )
}

export default Main;