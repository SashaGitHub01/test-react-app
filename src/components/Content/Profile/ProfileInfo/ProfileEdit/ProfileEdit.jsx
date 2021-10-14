import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from 'yup';
import './ProfileEdit.scss';

import MyButton from "../../../../../UI/MyButton/MyButton";
import MyInput from "../../../../../UI/MyInput/MyInput";
import MyTextarea from "../../../../../UI/MyTextarea/MyTextarea";

const ProfileEdit = ({ profile, disableEditMode, uploadProfileData }) => {
   let [textarea, setTextarea] = useState(profile.lookingForAJob);

   const handleClick = () => {
      setTextarea(!textarea);
   }

   const validationSchema = Yup.object().shape({
      fullName: Yup.string()
         .max(20, 'Не более 20 символов')
         .min(2, 'Не менее 2 символов')
         .required('Обязательное поле'),
      aboutMe: Yup.string()
         .max(100, 'Не более 100 символов')
         .required('Обязательное поле'),
      lookingForAJobDescription: Yup.string()
         .max(100, 'Не более 100 символов')
         .required('Обязательное поле'),
   })

   const initialValues = {
      ...profile
   }

   const onSubmit = async (values, { setErrors, setFieldError }) => {
      const errors = await uploadProfileData(values);

      if (!errors) return;

      for (let error of errors) {
         const errArray = error.split(' ');
         const field = errArray[errArray.length - 1]
            .slice(1, -1)
            .toLowerCase()
            .split('->')
            .join('.');

         setFieldError(field, 'Invalid URL');
      }
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
               validationSchema={validationSchema}
            >
               {({ errors, isSubmitting }) => <Form className="edit__form edit-form">
                  <div className="edit-form__subtitle">Основное</div>
                  <div className="edit-form__main edit-main">
                     <div className="edit-main__column">
                        <div className="edit-main__name">Имя:</div>
                        <div className="edit-main__name">О себе:</div>
                     </div>
                     <div className="edit-main__column-inp edit-column-inp">
                        <div className="edit-column-inp__item">
                           <div className="edit-column-inp__input">
                              <Field
                                 className={errors.fullName ? 'error-input' : ''}
                                 autoFocus={true}
                                 type='input'
                                 name='fullName'
                                 component={MyInput}
                              />
                           </div>
                           <div className=".edit-form-error-m">{errors.fullName}</div>
                        </div>
                        <div className="edit-column-inp__item">
                           <div className="edit-column-inp__input">
                              <Field
                                 className={errors.aboutMe ? 'error-input' : ''}
                                 type='input'
                                 name='aboutMe'
                                 component={MyInput}
                              />
                           </div>
                           <div className="edit-column-inp__error">{errors.aboutMe}</div>
                        </div>
                     </div>
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
                           className={errors.lookingForAJobDescription ? 'error-input' : ''}
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
                        <div className="edit-contacts__item">
                           <div className="edit-contacts__input">
                              <Field
                                 className={errors.contacts?.github ? 'error-input' : ''}
                                 type='input'
                                 name='contacts.github'
                                 component={MyInput}
                              />
                           </div>
                           <div className="edit-form-error-m">
                              {errors.contacts?.github && errors.contacts.github}
                           </div>
                        </div>
                        <div className="edit-contacts__item">
                           <div className="edit-contacts__input">
                              <Field
                                 className={errors.contacts?.instagram ? 'error-input' : ''}
                                 type='input'
                                 name='contacts.instagram'
                                 component={MyInput}
                              />
                           </div>
                           <div className="edit-form-error-m">
                              {errors.contacts?.instagram && errors.contacts.instagram}
                           </div>
                        </div>
                        <div className="edit-contacts__item">
                           <div className="edit-contacts__input">
                              <Field
                                 className={errors.contacts?.facebook ? 'error-input' : ''}
                                 type='input'
                                 name='contacts.facebook'
                                 component={MyInput}
                              />
                           </div>
                           <div className="edit-form-error-m">
                              {errors.contacts?.facebook && errors.contacts.facebook}
                           </div>
                        </div>
                        <div className="edit-contacts__item">
                           <div className="edit-contacts__input">
                              <Field
                                 className={errors.contacts?.twitter ? 'error-input' : ''}
                                 type='input'
                                 name='contacts.twitter'
                                 component={MyInput}
                              />
                           </div>
                           <div className="edit-form-error-m">
                              {errors.contacts?.twitter && errors.contacts.twitter}
                           </div>
                        </div>
                        <div className="edit-contacts__item">
                           <div className="edit-contacts__input">
                              <Field
                                 className={errors.contacts?.vk ? 'error-input' : ''}
                                 type='input'
                                 name='contacts.vk'
                                 component={MyInput}
                              />
                           </div>
                           <div className="edit-form-error-m">
                              {errors.contacts?.vk && errors.contacts.vk}
                           </div>
                        </div>
                     </div>
                  </div>
                  <Field
                     type='submit'
                     disabled={isSubmitting}
                     component={MyButton}
                     children='Сохранить'
                  />
               </Form>}
            </Formik>
         </div>
      </div>
   )
}

export default ProfileEdit;