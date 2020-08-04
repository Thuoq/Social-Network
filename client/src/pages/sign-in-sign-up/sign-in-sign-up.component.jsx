import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import FooterLogin from '../../components/footer-login/footer-login.component';

const SignInSignUp = () => {
    return ( 
        <div>
            <SignIn/>
            <SignUp/>
            <FooterLogin/>
        </div>
    )
}

export default SignInSignUp;   