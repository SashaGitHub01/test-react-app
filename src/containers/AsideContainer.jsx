import Aside from "../lesson1/aside/Aside";
import React from "react";
import { connect } from "react-redux";



const AsideContainer = ({ myId }) => {
   return (
      <Aside myId={myId} />
   )
}

let mapStateToProps = (state) => {
   return {
      myId: state.auth.userId,
   }
}

export default connect(
   mapStateToProps,
)(AsideContainer);
