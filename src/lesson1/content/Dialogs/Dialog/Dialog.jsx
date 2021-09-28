import React from "react";

import MyButton from "../../../../UI/MyButton/MyButton";
import MyTextarea from "../../../../UI/MyTextarea/MyTextarea";
import Message from "../Message/Message";
import './Dialog.scss';


const Dialog = ({ state, dispatch }) => {

   const onChange = (e) => {
      dispatch({ type: 'UPDATE-MESSAGE-CONTENT', newText: e.target.value });
   }

   const onSubmit = (e) => {
      e.preventDefault();

      dispatch({ type: 'ADD-MESSAGE' });
   }

   return (
      <div className="dialog-messages dialog-m">
         <div className="dialog-m__column">
            <div className="dialog-m__title">Name</div>
            <div className="dialog-m__messages messages__row">
               {state.messages.map(({ body, id }) => <Message key={id} body={body} />)}
            </div>
            <form className="dialog-m__form message-form" onSubmit={onSubmit}>
               <div className="message-form__element message-form__textarea">
                  <MyTextarea value={state.newMessageContent}
                     onChange={onChange}
                     rows='2'
                     placeholder='Введите сообщение'
                  />
               </div>
               <div className="message-form__element message-form__button">
                  <MyButton>Отправить</MyButton>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Dialog;