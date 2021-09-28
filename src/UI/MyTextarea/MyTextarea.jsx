import React from "react";
import './MyTextarea.scss';

const MyTextarea = ({ rows, className, ...other }) => {
   return (
      <textarea {...other} rows={rows}
         className={className
            ? 'my-textarea ' + className
            : 'my-textarea'
         } >

      </textarea>
   )
}


export default MyTextarea;