import React from "react";
import './ProfileContacts.scss';

const ProfileContacts = ({ profile }) => {
   return (
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
   )
}

export default ProfileContacts;