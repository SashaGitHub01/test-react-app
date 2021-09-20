import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './page.scss';


class Page extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="page">
            {this.props.children}
         </div>
      )
   }
}

export default Page;