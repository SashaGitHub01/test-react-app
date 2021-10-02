import React from "react";

import MyButton from "../../../../UI/MyButton/MyButton";
import MyTextarea from "../../../../UI/MyTextarea/MyTextarea";
import Message from "../Message/Message";
import './Dialog.scss';


const Dialog = ({ messages, value, addMessage, updateMessageContent }) => {

   const onChange = (e) => {
      updateMessageContent(e.target.value);
   }

   const onSubmit = (e) => {
      e.preventDefault();

      addMessage();
   }

   return (
      <div className="dialog-messages dialog-m">
         <div className="dialog-m__column">
            <div className="dialog-m__title">Name</div>
            <div className="dialog-m__messages messages__row">
               {messages.map(({ body, id }) => <Message key={id} body={body} />)}
            </div>
            <form className="dialog-m__form message-form" onSubmit={onSubmit}>
               <div className="message-form__element message-form__textarea">
                  <MyTextarea value={value}
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