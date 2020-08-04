import React from 'react';
import {FooterContainer } from './footer-login.styles';
import {WrapperContainer} from '../sign-in/sign-in.styles';


const FooterLogin = () => { 
    return(
        <FooterContainer >
            <WrapperContainer>
                <ul>
                    <li><a href = ''  >About</a></li>
                    <li><a href = 'd'  >Contact</a></li>
                    <li><a href = '' >Privacy and Policy</a></li>
                    <li><a href = '' >Help</a></li>
                </ul>
                <p>Copyright © www.cowut.desgin.co 2020 All Rights Reserved.</p>
            </WrapperContainer>
        </FooterContainer>
        )
}
export default FooterLogin;