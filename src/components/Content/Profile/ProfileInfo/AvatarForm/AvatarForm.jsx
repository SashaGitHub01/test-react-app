import React, { useState } from "react";
import './AvatarForm.scss';

import { Form, Field, Formik } from "formik";
import MyButton from "../../../../../UI/MyButton/MyButton";

const AvatarForm = ({ uploadAvatar }) => {
   let [newImage, setNewImage] = useState('');

   const initialValues = {
      avatar: '',
   }

   const onSubmit = () => {
      let formData = new FormData();

      formData.append('image', newImage);

      uploadAvatar(formData);

      setNewImage('');
   }

   const handleChange = (e) => {
      setNewImage(e.target.files[0]);
   };

   return (
      <Formik initialValues={initialValues}
         onSubmit={onSubmit}
      >
         <Form className='options__form avatar-form'>
            <Field
               className='avatar-form__file'
               type='file'
               accept='.jpg, .jpeg, .png'
               name='avatar'
               id='avatarLoader'
               onChange={handleChange}
            />
            <label
               className='avatar-form__label'
               htmlFor="avatarLoader"
            >
               Изменить фото
            </label>
            {newImage && <Field
               type='submit'
               children='Загрузить'
               component={MyButton}
            />}
         </Form>
      </Formik>
   )
}

export default AvatarForm;