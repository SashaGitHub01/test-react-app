import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Profile from "../profile/Profile";
import './content.scss';


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