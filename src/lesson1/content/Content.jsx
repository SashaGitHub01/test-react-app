import React from "react";
import './content.scss';

import AppRoute from "../AppRoute/AppRoute";

const Content = ({ state, dispatch }) => {
   return (
      <section className="content">
         <AppRoute />
      </section>
   )
}

export default Content;