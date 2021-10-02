import UsersList from "../lesson1/content/UsersPage/UsersList/UsersList";
import { connect } from "react-redux";
import { setUsersActionCreator } from '../actions/actionCreator';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
   }
};

let dispatchStateToProps = {
   getUsers: setUsersActionCreator,
}

const UsersListContainer = connect(
   mapStateToProps,
   dispatchStateToProps,
)(UsersList);

export default UsersListContainer;