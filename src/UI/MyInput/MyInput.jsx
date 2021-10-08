import React from "react";
import './MyInput.scss';

const MyInput = ({ className, field, form, ...other }) => {
   return (
      <input className={className
         ? `my-input ${className}`
         : 'my-input'
      }
         {...field}
         {...other}
      />
   )
}

export default MyInput;