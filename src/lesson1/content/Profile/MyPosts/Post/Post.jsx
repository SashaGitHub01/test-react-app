import React from 'react';
import ReactDOM from 'react-dom';
import './Post.scss';


const Post = ({ name, body, avatar }) => (
   <div className="my-posts__post post-item">
      <div className="post-item__main">
         <div className="post-item__avatar">
            <img src={avatar} alt="" />
         </div>
         <div className="post-item__row">
            <div className="post-item__name">{name}</div>
            <div className="post-item__body">{body}</div>
         </div>
      </div>
      <div className="post-item__functions post-funcs">
         <div className="post-funcs__elem func-elem">
            <button className='func-elem__like'>Like</button>
         </div>
         <div className="post-funcs__elem func-elem">
            <button className='func-elem__remove'>Delete</button>
         </div>
      </div>
   </div>
)

export default Post;