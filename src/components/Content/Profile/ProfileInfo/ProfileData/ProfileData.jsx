import React from "react";
import './ProfileData.scss';
import ava from '../../../../../defaults/defaultAvatar.jpg'

import Loader from '../../../../Loader/Loader';
import Status from "../Status/Status";
import ProfileContacts from "../ProfileContacts/ProfileContacts";
import AvatarForm from "../AvatarForm/AvatarForm";

const ProfileData = ({ profile, status, updateStatus, uploadAvatar, setEditMode, isOwner }) => {

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
                  {isOwner
                     && <div className="avatar__options options">
                        <AvatarForm uploadAvatar={uploadAvatar} />
                        <button
                           className="options__open-editor"
                           onClick={setEditMode}
                        >
                           Редактировать профиль
                        </button>
                     </div>}
               </div>
               <div className="profile-info__main main-info">
                  <div className="main-info__column">
                     <div className="main-info__name">
                        {profile.fullName}
                     </div>
                     <Status
                        status={status}
                        updateStatus={updateStatus}
                        isOwner={isOwner}
                     />
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
                        <div className="main-info__job-about">
                           <span>About me:</span> {profile.aboutMe}
                        </div>
                     </div>
                  </div>
               </div>
               <ProfileContacts profile={profile} />
            </div>
         </div>
         : <Loader />
   )
}

export default ProfileData;