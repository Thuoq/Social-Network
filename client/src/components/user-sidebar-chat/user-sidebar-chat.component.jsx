import React from 'react'
import {connect} from 'react-redux';
import {ContactUserContainer} from './user-sidebar-chat.style';
import {toggleUserChat} from '../../redux/chatting/chatting.action';

const UserSideBarChat = ({user,toggleUserChat}) => (
    <ContactUserContainer onClick = {() => toggleUserChat(user)} >
        <img src={user.photoAvatar}  alt="pho6"/>
        <p className="name">{`${user.firstName} ${user.lastName}`}</p>
    </ContactUserContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleUserChat : user => dispatch(toggleUserChat(user))
})

export default connect(null,mapDispatchToProps)(UserSideBarChat) ;