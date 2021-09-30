import React from "react";
import './MyPosts.scss';
import Post from './Post/Post';

import MyTextarea from '../../../../UI/MyTextarea/MyTextarea';
import MyButton from '../../../../UI/MyButton/MyButton';
import { addPostActionCreator, updatePostActionCreator } from '../../../../actions/actionCreator';

const MyPosts = ({ state, dispatch }) => {

   const submit = (e) => {
      e.preventDefault();

      dispatch(addPostActionCreator());
   }

   const onChange = (e) => {
      dispatch(updatePostActionCreator(e.target.value));
   }

   return (
      <section className="my-posts">
         <div className="my-posts__title section-title">My Posts</div>
         <form className="my-posts__form my-posts-form" onSubmit={submit}>
            <MyTextarea rows='2'
               className="my-posts-form__textarea"
               placeholder='Enter your post...'
               value={state.newPostContent}
               onChange={onChange}
            />
            <div className="my-posts-form__button">
               <MyButton className='my-posts-form__submit btn' type="submit">Post</MyButton>
            </div>
         </form>
         <div className="my-posts__container">
            {state.posts.map(({ id, name, body, avatar }) => (
               <Post key={id}
                  name={name}
                  body={body}
                  avatar={avatar} />
            ))}
         </div>
      </section>
   )
}


export default MyPosts;