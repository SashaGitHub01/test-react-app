import React from "react";
import './About.scss';

import logo from './logo.png';

const About = () => {
   return (
      <div className="about">
         <div className="about__body">
            <div className="about__logo">
               <img src={logo} alt="logo" />
            </div>
            <div className="about__text">
               React App. All rights reserved 2021.
            </div>
         </div>
      </div>
   )
}

export default About;