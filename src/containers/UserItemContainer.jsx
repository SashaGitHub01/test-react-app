import { connect } from "react-redux";
import UserItem from "../lesson1/content/UsersPage/UserItem/UserItem";
import { toggleFollowActionCreator } from '../actions/actionCreator';

let dispatchToProps = {
   onToggleFollow: toggleFollowActionCreator,
}

const UserItemContainer = connect(
   null,
   dispatchToProps,
)(UserItem);

export default UserItemContainer;