import React from 'react'
import {TimeLineContainer, 
        ContainerLeft,
        ContainerRight,
        TContent} from  './profile-timeline.styles';
import ProfileUserAddress from '../profile-user-address/profile-user-address.components';
import ProfileUserDetail from '../profile-user-detail/profile-user-detail.component';
import ProfileUserPri from '../profile-user-pri/profile-user-pri.component';
import ProfileUserInterest from '../profile-user-interest/profile-user-interest.component';
import ProfileUserSecond from '../profile-user-second/profile-user-second.component';

const ProfileTimeLine = () => {
    return (
        <TimeLineContainer >
            <ContainerLeft >
                <p className ="slideEdit2" title ="Edit">&#9998;</p>
            
                <TContent >
                    
                    <ProfileUserDetail/>

                </TContent>
            </ContainerLeft>
            {/* RIGHT */}
            <ContainerRight >
                <p className ="slideEdit2" title ="Edit">&#9998;</p>
            
                <TContent >
                    <ProfileUserPri/>
                </TContent>
            </ContainerRight>
            {/* END RIGHT */}
            {/* LEFT */}
            <ContainerLeft >
                <p className ="slideEdit2" title ="Edit">&#9998;</p>
                <TContent>
                    <ProfileUserSecond/>
                </TContent>
            </ContainerLeft>
            {/* END-LEFT */}
            {/* RIGHT */}
            <ContainerRight >
                <p className ="slideEdit2" title ="Edit">&#9998;</p>
           
                <TContent >
                    <ProfileUserAddress/>
                </TContent>
            </ContainerRight>
            {/* END RIGHT */}
            {/* LEFT */}
            <ContainerLeft>
                <p className ="slideEdit2" title ="Edit">&#9998;</p>
            
                <TContent >
                    <ProfileUserInterest/>
                </TContent>
            </ContainerLeft>
            {/* END-LEFT */}
        </TimeLineContainer>
    )
}
export default ProfileTimeLine;