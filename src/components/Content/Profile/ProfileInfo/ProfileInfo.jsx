import React, { useState } from "react";
import './ProfileInfo.scss';
import ava from '../../../../defaults/defaultAvatar.jpg'
import { Form, Field, Formik } from "formik";

import Loader from '../../../Loader/Loader';
import Status from "./Status/Status";
import MyButton from "../../../../UI/MyButton/MyButton";

const ProfileInfo = ({ profile, status, updateStatus, uploadAvatar }) => {
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
   }

   return (
      profile
         ? <div className="profile-info">
            <div className="profile-info__row">
               <div className="profile-info__avatar avatar">
                  <div className="avatar__image">
                     <img src={profile.photos.large
                        ? profile.photos.large
                        : ava
                     } alt="ava"
                     />
                  </div>
                  <Formik initialValues={initialValues}
                     onSubmit={onSubmit}
                  >
                     <Form className='avatar__form avatar-form'>
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
               </div>
               <div className="profile-info__main main-info">
                  <div className="main-info__column">
                     <div className="main-info__name">{profile.fullName}</div>
                     <Status status={status} updateStatus={updateStatus} />
                     <div className="main-info__job">
                        <div className={profile.lookingForAJob
                           ? "main-info__job-status open"
                           : 'main-info__job-status'}
                        >
                           <span>Job:</span> {profile.lookingForAJob
                              ? 'Open for offers'
                              : 'Closed for offers'
                           }
                        </div>
                        {profile.lookingForAJob
                           ? <div className="main-info__job-description">
                              <span>My skills:</span> {profile.lookingForAJobDescription}
                           </div>
                           : null}
                     </div>
                  </div>
               </div>
               <div className="profile-info__socials">
                  {profile.contacts.github
                     && <a href={profile.contacts.github}><i className="fab fa-github"></i></a>}
                  {profile.contacts.vk
                     && <a href={profile.contacts.vk}><i className="fab fa-vk"></i></a>}
                  {profile.contacts.facebook
                     && <a href={profile.contacts.facebook}><i className="fab fa-facebook-f"></i></a>}
                  {profile.contacts.twitter
                     && <a href={profile.contacts.twitter}><i className="fab fa-twitter"></i></a>}
                  {profile.contacts.instagram
                     && <a href={profile.contacts.instagram}><i className="fab fa-instagram"></i></a>}
                  {profile.contacts.youtube
                     && <a href={profile.contacts.youtube}><i className="fab fa-youtube"></i></a>}
               </div>
            </div>
         </div>
         : <Loader />
   )
}

export default ProfileInfo;