import { connect } from "react-redux";
import UserItem from "../lesson1/content/UsersPage/UserItem/UserItem";
import { follow, unfollow } from '../thunks/thunkCreator'

let dispatchToProps = {
   follow,
   unfollow,
}

let mapStateToProps = state => {
   return {
      followingProgress: state.usersPage.followingProgress,
   }
}

const UserItemContainer = connect(
   mapStateToProps,
   dispatchToProps,
)(UserItem);

export default UserItemContainer;