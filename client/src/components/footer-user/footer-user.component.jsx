import React from 'react'
import {ReactComponent as Logo } from '../../assets/wattpad.svg'
import {SuggestFixedContainer,SidebarRightContainer} from '../suggest-user/suggest-user.styles';
import {FooterContainer} from './footer-user.styles';
 const FooterUser = () => {
    return (
        <SuggestFixedContainer >
        <SidebarRightContainer style={{width: '280px', padding: '4px', marginTop: '20px', height: '150px'}}>
          <hr style={{top: '-25px'}} />
          <FooterContainer className="foot">
            <ul>
              <li><a href ="true">About</a></li>
              <li><a href ="true">Contact</a></li>
              <li><a href ="true">Privacy and Policy</a></li>
              <li><a href ="true">Help</a></li>
            </ul>
            <Logo />
            <p>Copyright © www.cownut.desgin.co All Rights Reserved.</p>
          </FooterContainer>
        </SidebarRightContainer>
      </SuggestFixedContainer>
    )
}
export default FooterUser;