import MyPosts from "../lesson1/content/Profile/MyPosts/MyPosts";
import { connect } from "react-redux";
import { addPostActionCreator, updatePostActionCreator } from '../actions/actionCreator';

let mapStateToProps = state => {
   return {
      posts: state.profilePage.posts,
      value: state.profilePage.newPostContent,
   }
};

let dispatchToProps = {
   postContentUpdate: updatePostActionCreator,
   addPost: addPostActionCreator,
}

const MyPostsContainer = connect(
   mapStateToProps,
   dispatchToProps,
)(MyPosts);

export default MyPostsContainer;