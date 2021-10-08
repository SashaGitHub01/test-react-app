import React from "react";
import './MyTextarea.scss';

const MyTextarea = ({ rows, className, field, form, ...other }) => {
   return (
      <textarea rows={rows}
         className={className
            ? 'my-textarea ' + className
            : 'my-textarea'
         }
         {...field}
         {...other}
      >
      </textarea>
   )
}


export default MyTextarea;