import MyPosts from "../components/Content/Profile/MyPosts/MyPosts";
import { connect } from "react-redux";
import { addPost } from '../actions/actionCreator';

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