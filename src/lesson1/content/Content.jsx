import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Profile from "../profile/Profile";

class Content extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <section className="content">
            <Profile />
         </section>
      )
   }
}

export default Content;