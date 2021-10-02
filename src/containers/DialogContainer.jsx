import { connect } from "react-redux";
import Dialog from "../lesson1/content/Dialogs/Dialog/Dialog";
import { addMessageActionCreator, updateMessageActionCreator } from '../actions/actionCreator';


let mapStateToProps = (state) => {
   return {
      messages: state.dialogsPage.messages,
      value: state.dialogsPage.newMessageContent,
   }
};

let dispatchToProps = {
   updateMessageContent: updateMessageActionCreator,
   addMessage: addMessageActionCreator,
}

const DialogContainer = connect(
   mapStateToProps,
   dispatchToProps,
)(Dialog);

export default DialogContainer;