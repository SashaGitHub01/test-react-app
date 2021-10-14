import React from "react";
import './ErrorNote.scss';

const ErrorNote = ({ error }) => {
   return (
      <li className="errors-box__item error-note">
         <div className="error-note__content">
            <div className="error-note__body">
               {error}
            </div>
         </div>
      </li>
   )
}

export default ErrorNote;