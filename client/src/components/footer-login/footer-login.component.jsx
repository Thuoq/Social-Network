import React from 'react';
import {FooterContainer } from './footer-login.styles';
import {WrapperContainer} from '../sign-in/sign-in.styles';
import {Link} from 'react-router-dom'


const FooterLogin = () => { 
    return(
        <FooterContainer >
            <WrapperContainer>
                <ul>
                    <li><Link to="/a"  >About</Link></li>
                    <li><Link to="/a"  >Contact</Link></li>
                    <li><Link to="/a" >Privacy and Policy</Link></li>
                    <li><Link to="/a" >Help</Link></li>
                </ul>
                <p>Copyright © www.cowut.desgin.co 2020 All Rights Reserved.</p>
            </WrapperContainer>
        </FooterContainer>
        )
}
export default FooterLogin;