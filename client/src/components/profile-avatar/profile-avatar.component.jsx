import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logOutCurrentUser} from '../../redux/user/user.action';
import FormInput from '../form-input/form-input.component';
import {SideBarLeftProfile} from './profile-avatar.style'
const ProfileAvatar = ({currentUser,logOutCurrentUser}) => {
    return (
        <SideBarLeftProfile >
        {/* change image */}
            <FormInput type="file"
                        name="pic" 
                        className="chooseslide1" 
                        title="change profile pic" />
            <p className="slideEdit1">✎</p>
            {/* End change image */}
            <img src={currentUser.photoAvatar} alt="pho6" title="Profile Pic"  />
            <p className="sidename">{`${currentUser.firstName} ${currentUser.lastName}`}</p>
            {/* <p className="nosociety">31</p>
            <p className="societyname"><a href="true">Society</a></p> */}
            <p className="logout"><Link onClick ={() => logOutCurrentUser()}>Log Out</Link></p>
      </SideBarLeftProfile>
    )
}

const mapStateToProps = ({user :{currentUser}}) => ({
    currentUser,
})

const mapDispatchToProps = dispatch => ({
    logOutCurrentUser  : () => dispatch(logOutCurrentUser())
})
export default connect(mapStateToProps,mapDispatchToProps)(ProfileAvatar) ;