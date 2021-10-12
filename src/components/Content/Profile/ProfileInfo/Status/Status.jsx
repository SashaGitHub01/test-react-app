import React, { useState } from "react";
import './Status.scss';
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

import MyInput from '../../../../../UI/MyInput/MyInput';
import MyButton from '../../../../../UI/MyButton/MyButton';

const Status = ({ status, updateStatus, isOwner }) => {
   let [editMode, setEditMode] = useState(false);

   const onSubmit = (values) => {
      setEditMode(false);

      updateStatus(values.status);
   }

   let initialValues = {
      status: status,
   }

   let validationSchema = Yup.object().shape({
      status: Yup.string().max(200, 'Статус не должен содержать более 200 символов!')
   })

   const handleStatusClick = () => {
      if (!isOwner) return;

      setEditMode(true);
   }

   return (
      <div className="main-info__status profile-status">
         <span onClick={handleStatusClick}>
            {isOwner
               ? (status || 'добавить статус')
               : ''}
         </span>
         {
            editMode &&
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
               validationSchema={validationSchema}
            >
               <Form className="profile-status__editor">
                  <Field
                     name='status'
                     type='text'
                     className='profile-status__input'
                     autoFocus={true}
                     component={MyInput}
                  />
                  <Field
                     type='submit'
                     children='Сохранить'
                     component={MyButton}
                  />
               </Form>
            </Formik>
         }
      </div>
   )
}

export default Status;