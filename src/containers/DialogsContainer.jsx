import { connect } from "react-redux";
import Dialogs from "../lesson1/content/Dialogs/Dialogs";

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogsList,
   }
}

const DialogsContainer = connect(
   mapStateToProps,
)(Dialogs);

export default DialogsContainer;