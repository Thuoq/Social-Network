import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {logOutCurrentUser} from '../../redux/user/user.action';
import {SideBarFixedContainer,
        SideBarContainer} from './side-bar-left.styles';

const SideBarLeft = ({logOutCurrentUser,currentUser}) => {
 
    return (
        <SideBarFixedContainer className="leftfixed">
        {/* start sidebar left */}
        <SideBarContainer className="sidebarleft">
          <img src={currentUser.photoAvatar} alt='user-1' />
          <p className="sidename">{`${currentUser.firstName} ${currentUser.lastName}`}</p>
          {/* <p className="ssn">Hello {`${currentUser.firstName} ${currentUser.lastName}`}</p>
          <p className="country">Viet Nam</p>
          <Link to = "/s" className="viewall">View All</Link>
          <hr />
          <p className="nosociety">31</p> */}
          <p className="societyname">
              <Link as="button">Society</Link>
            </p>
          <p className="logout"><Link as="button" onClick = {() =>logOutCurrentUser()}>Log Out</Link></p>
        </SideBarContainer>
        {/* End of sidebar left */}
      </SideBarFixedContainer>
    )
}
const mapStateToProps = ({user: {currentUser}}) => ({
  currentUser,
}) 

const mapDispatchToProps = dispatch => ({
  logOutCurrentUser: () => dispatch(logOutCurrentUser())
})
export default connect(mapStateToProps,mapDispatchToProps)(SideBarLeft);