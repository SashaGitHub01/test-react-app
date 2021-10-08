import React from "react";
import './ProfileInfo.scss';
import ava from '../../../../defaults/defaultAvatar.jpg'

import Loader from '../../../Loader/Loader';
import Status from "./Status/Status";

const ProfileInfo = ({ profile, status, updateStatus }) => {
   return (
      profile
         ? <div className="profile-info">
            <div className="profile-info__row">
               <div className="profile-info__avatar">
                  <img src={profile.photos.large
                     ? profile.photos.large
                     : ava
                  } alt="ava"
                  />
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