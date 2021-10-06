import MyPosts from "../lesson1/content/Profile/MyPosts/MyPosts";
import { connect } from "react-redux";
import { addPost, updatePost } from '../actions/actionCreator';

let mapStateToProps = state => {
   return {
      posts: state.profilePage.posts,
      value: state.profilePage.newPostContent,
   }
};

let dispatchToProps = {
   postContentUpdate: updatePost,
   addPost: addPost,
}

const MyPostsContainer = connect(
   mapStateToProps,
   dispatchToProps,
)(MyPosts);

export default MyPostsContainer;