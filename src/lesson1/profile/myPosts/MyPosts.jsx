import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './MyPosts.scss';

const MyPosts = (props) => {
   return (
      <section className="my-posts">
         <div className="my-posts__title section-title">My Posts</div>
         <form className="my-posts__form my-posts-form">
            <textarea rows='2' className="my-posts-form__textarea" placeholder='Enter your post...'></textarea>
            <div className="my-posts-form__button">
               <button className='my-posts-form__submit btn' type="submit">Post</button>
            </div>

         </form>
      </section>
   )
}


export default MyPosts;