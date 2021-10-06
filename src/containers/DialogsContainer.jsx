import { connect } from "react-redux";
import { compose } from "redux";
import Dialogs from "../lesson1/content/Dialogs/Dialogs";

import withAuthRedirect from "../HOC/withAuthRedirect";

const DialogsContainer = (props) => {
   return (
      <Dialogs {...props} />
   )
}

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogsList,
   }
}

export default compose(
   connect(mapStateToProps),
   withAuthRedirect,
)(DialogsContainer);

