import React from "react";
import './MyTitle.scss';

const MyTitle = ({ children, className }) => {
   return (
      <h2 className={className
         ? `my-title ${className}`
         : 'my-title'
      }>
         {children}
      </h2>
   )
}

export default MyTitle;