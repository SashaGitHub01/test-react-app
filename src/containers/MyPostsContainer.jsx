import MyPosts from "../lesson1/content/Profile/MyPosts/MyPosts";
import { connect } from "react-redux";
import { addPost, updatePost } from '../actions/actionCreator';

let mapStateToProps = state => {
   return {
      posts: state.profilePage.posts,
   }
};

let dispatchToProps = {
   addPost: addPost,
}

const MyPostsContainer = connect(
   mapStateToProps,
   dispatchToProps,
)(MyPosts);

export default MyPostsContainer;