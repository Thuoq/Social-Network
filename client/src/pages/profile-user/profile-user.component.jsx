import React from 'react';
import {connect} from 'react-redux';
import ProfilePicture from '../../components/profile-picture/profile-picture.component';
import ProfileAvatar from '../../components/profile-avatar/profile-avatar.component';
import {LeftFixedContainer} from './profile-user.styles'
import ProfileTimeLine from '../../components/profile-timeline/profile-timeline.component';
import UpdateUserDetail from '../../components/update-user-detail/update-user-detail.component';
import UpdateUserInterested from '../../components/update-user-interested/update-user-interested.component';
import UpdateUserAddress from '../../components/update-user-address/update-user-address.component';
import UpdateUserSecond from '../../components/update-user-second/update-user-second.component';
import UpdateUserPri from '../../components/update-user-pri/update-user-pri.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
const ProfileUser = ({currentUser}) => {
    return (
        <LeftFixedContainer>
            <ProfilePicture photoProfile={currentUser.photoProfile}/>
            <ProfileAvatar />
            <ProfileTimeLine />
            <UpdateUserDetail/>
            <UpdateUserAddress/>
            <UpdateUserInterested/>
            <UpdateUserSecond />
            <UpdateUserPri />
        </LeftFixedContainer>
    )                                                                                                                                                                                                                                                                                                                                             
}  

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(ProfileUser)  ;