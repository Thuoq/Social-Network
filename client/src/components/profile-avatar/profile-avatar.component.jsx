import React from 'react';
import FormInput from '../form-input/form-input.component';
import {SideBarLeftProfile} from './profile-avatar.style'
const ProfileAvatar = () => {
    return (
        <SideBarLeftProfile >
        {/* change image */}
            <FormInput type="file"
                        name="pic" 
                        className="chooseslide1" 
                        title="change profile pic" />
            <p className="slideEdit1">✎</p>
            {/* End change image */}
            <img src="/images/upload.png" alt="pho6" title="Profile Pic"  />
            <p className="sidename">Long Thuoq</p>
            <p className="nosociety">31</p>
            <p className="societyname"><a href="true">Society</a></p>
            <p className="logout"><a href="true">Log Out</a></p>
      </SideBarLeftProfile>
    )
}
export default ProfileAvatar;