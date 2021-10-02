import React from "react";
import './MyInput.scss';

const MyInput = ({ className, value, onChange, ...other }) => {
   return (
      <input className={className
         ? `my-input ${className}`
         : 'my-input'
      }
         value={value}
         onChange={onChange}
         {...other}
      />
   )
}

export default MyInput;