import React from "react";
import './MyButton.scss';

const MyButton = ({ children, className, disabled, field, form, ...other }) => {
   return (
      <button {...other}
         className={className
            ? 'my-button ' + className
            : 'my-button'}
         disabled={disabled}
      >
         {children}
      </button>
   )
};

export default MyButton;