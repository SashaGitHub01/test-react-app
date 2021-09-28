import React from "react";
import './MyButton.scss';

const MyButton = ({ children, className, ...other }) => {
   return (
      <button {...other}
         className={className
            ? 'my-button ' + className
            : 'my-button'
         }>
         {children}
      </button>
   )
}

export default MyButton;