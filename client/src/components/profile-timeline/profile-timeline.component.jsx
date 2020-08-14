import React from 'react'
import {connect} from 'react-redux';
import {toggleUpdateInformation , 
        toggleUpdateAddress,
        toggleUpdateSchoolPri,
        toggleUpdateSchoolSec,
        toggleUpdateInterested} from '../../redux/user/user.action';

import {TimeLineContainer, 
        ContainerLeft,
        ContainerRight,
        TContent} from  './profile-timeline.styles';

import ProfileUserAddress from '../profile-user-address/profile-user-address.components';
import ProfileUserDetail from '../profile-user-detail/profile-user-detail.component';
import ProfileUserPri from '../profile-user-pri/profile-user-pri.component';
import ProfileUserInterest from '../profile-user-interest/profile-user-interest.component';
import ProfileUserSecond from '../profile-user-second/profile-user-second.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const ProfileTimeLine = ({currentUser,toggleUpdateInformation,toggleUpdateAddress,toggleUpdateInterested,toggleUpdateSchoolPri,toggleUpdateSchoolSec}) => {
    return (
        <TimeLineContainer >
            <ContainerLeft >
                <p onClick ={() => toggleUpdateInformation()}  className ="slideEdit2" title ="Edit">&#9998;</p>
            
                <TContent >
                    
                    <ProfileUserDetail currentUser = {currentUser}/>

                </TContent>
            </ContainerLeft>
            {/* RIGHT */}
            <ContainerRight >
                <p onClick ={() => toggleUpdateSchoolPri()} className ="slideEdit2" title ="Edit">&#9998;</p>
            
                <TContent >
                    <ProfileUserPri currentUser = {currentUser} />
                </TContent>
            </ContainerRight>
            {/* END RIGHT */}
            {/* LEFT */}
            <ContainerLeft >
                <p onClick ={() => toggleUpdateSchoolSec()} className ="slideEdit2" title ="Edit">&#9998;</p>
                <TContent>
                    <ProfileUserSecond currentUser = {currentUser} />
                </TContent>
            </ContainerLeft>
            {/* END-LEFT */}
            {/* RIGHT */}
            <ContainerRight >
                <p onClick ={() => toggleUpdateAddress()} className ="slideEdit2" title ="Edit">&#9998;</p>
           
                <TContent >
                    <ProfileUserAddress currentUser = {currentUser}/>
                </TContent>
            </ContainerRight>
            {/* END RIGHT */}
            {/* LEFT */}
            <ContainerLeft>
                <p onClick ={() => toggleUpdateInterested()} className ="slideEdit2" title ="Edit">&#9998;</p>
            
                <TContent >
                    <ProfileUserInterest currentUser = {currentUser}/>
                </TContent>
            </ContainerLeft>
            {/* END-LEFT */}
        </TimeLineContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleUpdateInformation : () => dispatch(toggleUpdateInformation()),
    toggleUpdateAddress : () => dispatch(toggleUpdateAddress()),
    toggleUpdateSchoolPri : () => dispatch(toggleUpdateSchoolPri()),
    toggleUpdateSchoolSec : () => dispatch(toggleUpdateSchoolSec()),
    toggleUpdateInterested: () => dispatch(toggleUpdateInterested())
})
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
})


export default connect(mapStateToProps,mapDispatchToProps)(ProfileTimeLine) ;