import React from "react";
import './MyPosts.scss';
import Post from './Post/Post';
import { Formik, Field, Form, } from 'formik';

import MyTextarea from '../../../../UI/MyTextarea/MyTextarea';
import MyButton from '../../../../UI/MyButton/MyButton';

const MyPosts = ({ posts, addPost }) => {

   let initialValues = {
      postArea: '',
   }

   let onSubmit = (values) => {
      if (!values.postArea) return;

      addPost(values.postArea);
   }

   return (
      <section className="my-posts">
         <div className="my-posts__title section-title">My Posts</div>
         <Formik initialValues={initialValues}
            onSubmit={onSubmit}
         >
            <Form className="my-posts__form my-posts-form">
               <Field as='textarea'
                  rows='2'
                  name='postArea'
                  className="my-posts-form__textarea"
                  placeholder='Enter your post...'
                  component={MyTextarea}
               />
               <div className="my-posts-form__button">
                  <Field className='my-posts-form__submit btn'
                     type="submit"
                     component={MyButton}
                     children='Опубликовать'
                  />
               </div>
            </Form>
         </Formik>
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