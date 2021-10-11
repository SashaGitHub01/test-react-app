import { connect } from "react-redux";
import Dialog from "../components/Content/Dialogs/Dialog/Dialog";
import { addMessage } from '../actions/actionCreator';


let mapStateToProps = (state) => {
   return {
      messages: state.dialogsPage.messages,
   }
};

let dispatchToProps = {
   addMessage: addMessage,
}

const DialogContainer = connect(
   mapStateToProps,
   dispatchToProps,
)(Dialog);

export default DialogContainer;