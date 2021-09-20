import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Aside from "./Aside";
import Content from "../content/Content";

class Main extends Component {
   constructor(props) {
      super(props);
   }

   render() {
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
}

export default Main;