import React, { useState } from "react";
import './ProfileInfo.scss';

import ProfileData from "./ProfileData/ProfileData";
import ProfileEdit from './ProfileEdit/ProfileEdit';

const ProfileInfo = ({ profile, status, updateStatus, uploadAvatar, uploadProfileData, isOwner }) => {
   let [editMode, setEditMode] = useState(false);

   return (
      <>
         {editMode
            && <ProfileEdit
               profile={profile}
               status={status}
               disableEditMode={() => setEditMode(false)}
               uploadProfileData={uploadProfileData}
            />}
         <ProfileData
            profile={profile}
            isOwner={isOwner}
            status={status}
            updateStatus={updateStatus}
            uploadAvatar={uploadAvatar}
            setEditMode={() => setEditMode(true)}
         />
      </>
   )
}

export default ProfileInfo;
