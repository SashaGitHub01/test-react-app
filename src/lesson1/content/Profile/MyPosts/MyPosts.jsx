import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './MyPosts.scss';
import Post from './Post/Post';



const MyPosts = ({ posts = [] }) => {
   return (
      <section className="my-posts">
         <div className="my-posts__title section-title">My Posts</div>
         <form className="my-posts__form my-posts-form">
            <textarea rows='2' className="my-posts-form__textarea" placeholder='Enter your post...'>
            </textarea>
            <div className="my-posts-form__button">
               <button className='my-posts-form__submit btn' type="submit">Post</button>
            </div>
         </form>
         <div className="my-posts__container">
            {posts.map(({ id, name, body, avatar }) => (
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