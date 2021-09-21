import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Dialogs.scss';

import Dialog from "./Dialog/Dialog";


let dialogItems = [
   {
      name: 'Stew',
      surname: 'Yip',
      id: 1,
      avatar: '',
   },

   {
      name: 'Jake',
      surname: 'Runnyn',
      id: 2,
      avatar: '',
   },

   {
      name: 'Johny',
      surname: 'Bruhman',
      id: 3,
      avatar: '',
   },

   {
      name: 'Freddy',
      surname: 'Groover',
      id: 4,
      avatar: '',
   },
];



const Dialogs = (props) => {

   let yourDialogs = dialogItems.map(({ name, surname, id, avatar }) => (
      <Dialog name={name} surname={surname} avatar={avatar} key={id} />
   ));

   return (
      <section className="dialogs">
         <div className="dialogs__title section-title">Your Dialogs</div>
         <div className="dialogs__column">
            {yourDialogs}
         </div>
      </section>
   )
}


export default Dialogs;