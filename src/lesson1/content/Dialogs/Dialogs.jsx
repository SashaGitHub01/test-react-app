import React from "react";
import './Dialogs.scss';

import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = ({ dialogs }) => {

   let yourDialogs = dialogs.map(({ name, surname, id, avatar }) => (
      <DialogsItem
         name={name}
         id={id}
         surname={surname}
         avatar={avatar}
         key={id} />
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