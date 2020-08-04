import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import {ReactComponent as Logo} from '../../assets/wattpad.svg';
import {ReactComponent as UserLogo} from '../../assets/001-user.svg';
import {ReactComponent as HomeLogo} from '../../assets/002-home.svg';
import {ReactComponent as ChattingLogo} from '../../assets/003-chatting.svg'
import {ReactComponent as NotificationLogo} from '../../assets/004-notification.svg'
import {ReactComponent as SocietyLogo} from '../../assets/005-society.svg' 
import {WrapperContainerHeader, 
    HeaderContainer,
    HeaderFixedContainer,
    FormContainer,
    IconBarContainer,
    NotificationContainer,
} from './header.styles';




const Header = () => {
    return (
        <HeaderFixedContainer >
       
        <HeaderContainer >
       
          <WrapperContainerHeader >
          
            <Link to ="/">
                <Logo  width={120} height={45}  />
            </Link>
            {/* Search bar */}
            <FormContainer >
              <FormInput type="text" name="search" placeholder="Search.."  />
            </FormContainer>
            {/* icon bar to navigate to all pages */}
            <IconBarContainer >
              <ul>
                {/* home */}
                <li>
                    <Link to="/">
                        <HomeLogo/>
                        
                       
                    </Link>
                </li>
                {/* profile */}
                <li>
                    <Link to="/profile">
                        <UserLogo/>
                    </Link>
                </li>
                {/* society */}
                <li>
                    <Link to="/society">
                        <SocietyLogo/>
                    </Link>
                </li>
                {/* message */}
                <li>
                    <Link to="/message" >
                        <ChattingLogo/>
                    </Link>
                </li>
                {/* notification */}
                <li>
                    <Link to="/notification">
                        <NotificationLogo/>
                    </Link>
                  <NotificationContainer id="notify" >
                    <p>No New Notification</p>
                    <hr style={{backgroundColor: 'white', width: '90%'}} />
                  </NotificationContainer>
                </li>
              </ul>	   
            </IconBarContainer>
          
          </WrapperContainerHeader>
         
        </HeaderContainer>
       
      </HeaderFixedContainer>
    )
}

export default Header;