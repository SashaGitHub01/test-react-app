import React from "react";
import { Formik, Form, Field } from "formik";

import MyButton from "../../../../UI/MyButton/MyButton";
import MyTextarea from "../../../../UI/MyTextarea/MyTextarea";
import Message from "../Message/Message";
import './Dialog.scss';


const Dialog = ({ messages, addMessage, }) => {
   let initialValues = {
      messageArea: ''
   }

   const onSubmit = (values) => {
      if (!values.messageArea) return;

      addMessage(values.messageArea);
   }

   return (
      <div className="dialog-messages dialog-m">
         <div className="dialog-m__column">
            <div className="dialog-m__title">Name</div>
            <div className="dialog-m__messages messages__row">
               {messages.map(({ body, id }) => <Message key={id} body={body} />)}
            </div>
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
            >
               <Form className="dialog-m__form message-form">
                  <div className="message-form__element message-form__textarea">
                     <Field
                        as='textarea'
                        component={MyTextarea}
                        name="messageArea"
                        rows='2'
                        placeholder='Введите сообщение'
                     />
                  </div>
                  <div className="message-form__element message-form__button">
                     <Field
                        children='Отправить'
                        type='submit'
                        component={MyButton}
                     />
                  </div>
               </Form>
            </Formik>
         </div>
      </div>
   )
}

export default Dialog;