import React from "react";
import './Message.scss';

const Message = ({ body }) => {
   return (
      <div className="messages__item message-item">
         <div className="message-item__body">{body}</div>
      </div>
   )
}


export default Message;