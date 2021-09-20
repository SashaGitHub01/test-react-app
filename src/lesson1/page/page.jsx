import React, { Component } from "react";
import ReactDOM from 'react-dom';


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