import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aside from "../aside/Aside";
import Content from "../content/Content";
import './main.scss';

const Main = ({ posts, dialogs }) => {
   return (
      <main className="main">
         <div className="container">
            <div className="main__row">
               <Aside />
               <Content posts={posts} dialogs={dialogs} />
            </div>
         </div>
      </main>
   )
}

export default Main;