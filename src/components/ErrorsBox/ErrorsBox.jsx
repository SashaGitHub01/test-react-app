import React from "react";

import ErrorNote from "./ErrorNote/ErrorNote"
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ErrorsBox = ({ errors }) => {
   return (
      errors.length
         ? <TransitionGroup component='ul' className="errors-box">
            {errors.map(({ error, id }) => (
               <CSSTransition
                  timeout={{ exit: 1000, enter: 500, appear: 500 }}
                  key={id}
                  classNames='error-note'
                  in={true}
                  appear={true}
               >
                  <ErrorNote error={error} />
               </CSSTransition>
            ))}
         </TransitionGroup>
         : null
   )
}

export default ErrorsBox;