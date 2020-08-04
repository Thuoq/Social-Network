import React from 'react';
import ProfilePicture from '../../components/profile-picture/profile-picture.component';
import ProfileAvatar from '../../components/profile-avatar/profile-avatar.component';
import {LeftFixedContainer} from './profile-user.styles'
import ProfileTimeLine from '../../components/profile-timeline/profile-timeline.component';

const ProfileUser = () => {
    return (
        <LeftFixedContainer>
            <ProfilePicture/>
            <ProfileAvatar/>
            <ProfileTimeLine/>
        </LeftFixedContainer>
    )
}  
export default  ProfileUser;