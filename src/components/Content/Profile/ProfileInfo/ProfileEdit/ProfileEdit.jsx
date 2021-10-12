import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import './ProfileEdit.scss';

import MyButton from "../../../../../UI/MyButton/MyButton";
import MyInput from "../../../../../UI/MyInput/MyInput";
import MyTextarea from "../../../../../UI/MyTextarea/MyTextarea";

const ProfileEdit = ({ profile, disableEditMode, uploadProfileData }) => {
   let [profileData, setProfileData] = useState(profile);
   let [textarea, setTextarea] = useState(profile.lookingForAJob);

   const handleClick = () => {
      setTextarea(!textarea);
   }

   const initialValues = {
      ...profile
   }

   const onSubmit = (values) => {
      uploadProfileData(values);
   }

   return (
      <div className="edit">
         <div className="edit__modal">
            <div className="edit__title">
               <span>Редактирование профиля</span>
               <i className="fas fa-times" onClick={disableEditMode}></i>
            </div>
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
            >
               <Form className="edit__form edit-form">
                  <div className="edit-form__subtitle">Основное</div>
                  <div className="edit-form__item">
                     <span>Имя:</span>
                     <Field
                        autoFocus={true}
                        type='input'
                        name='fullName'
                        component={MyInput}
                     />
                  </div>
                  <div className="edit-form__item">
                     <span>О себе:</span>
                     <Field
                        type='input'
                        name='aboutMe'
                        component={MyInput}
                     />
                  </div>
                  <div className="edit-form__item">
                     <Field
                        id='jobCheckbox'
                        type='checkbox'
                        name='lookingForAJob'
                        onClick={handleClick}
                     />
                     <span>Ищу работу</span>
                  </div>
                  {textarea
                     && <div className="edit-form__item edit-form__item-textarea">
                        <span>Ваши навыки:</span>
                        <Field
                           type='textarea'
                           name='lookingForAJobDescription'
                           component={MyTextarea}
                        />
                     </div>}
                  <div className="edit-form__subtitle">Контакты</div>
                  <div className="edit-form__contacts edit-contacts">
                     <div className="edit-contacts__column">
                        <div className="edit-contacts__name">GitHub</div>
                        <div className="edit-contacts__name">Instagram</div>
                        <div className="edit-contacts__name">Facebook</div>
                        <div className="edit-contacts__name">Twitter</div>
                        <div className="edit-contacts__name">ВКонтакте</div>
                     </div>
                     <div className="edit-contacts__column-inp">
                        <div className="edit-contacts__input">
                           <Field
                              type='input'
                              name='contacts.github'
                              component={MyInput}
                           />
                        </div>
                        <div className="edit-contacts__input">
                           <Field
                              type='input'
                              name='contacts.instagram'
                              component={MyInput}
                           />
                        </div>
                        <div className="edit-contacts__input">
                           <Field
                              type='input'
                              name='contacts.facebook'
                              component={MyInput}
                           />
                        </div>
                        <div className="edit-contacts__input">
                           <Field
                              type='input'
                              name='contacts.twitter'
                              component={MyInput}
                           />
                        </div>
                        <div className="edit-contacts__input">
                           <Field
                              type='input'
                              name='contacts.vk'
                              component={MyInput}
                           />
                        </div>
                     </div>
                  </div>
                  <Field
                     type='submit'
                     component={MyButton}
                     children='Сохранить'
                  />
               </Form>
            </Formik>
         </div>
      </div>
   )
}

export default ProfileEdit;