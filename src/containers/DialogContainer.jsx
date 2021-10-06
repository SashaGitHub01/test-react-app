import { connect } from "react-redux";
import Dialog from "../lesson1/content/Dialogs/Dialog/Dialog";
import { addMessage, updateMessage } from '../actions/actionCreator';


let mapStateToProps = (state) => {
   return {
      messages: state.dialogsPage.messages,
      value: state.dialogsPage.newMessageContent,
   }
};

let dispatchToProps = {
   updateMessageContent: updateMessage,
   addMessage: addMessage,
}

const DialogContainer = connect(
   mapStateToProps,
   dispatchToProps,
)(Dialog);

export default DialogContainer;