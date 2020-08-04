import React from 'react'
import FormInput from '../form-input/form-input.component';
import axios  from 'axios';
import {    MainContainer, 
            LogoTopic,
            SignUpContainer,
            TableSignUpContainer,
            ButtonSignUpContainer 
} from './sign-up.styles';
import {WrapperContainer} from '../sign-in/sign-in.styles';
const imgSrc = require('../../assets/social-4.png');

class SignUp extends React.Component { 
    constructor(props) { 
        super(props);

        this.state =  { 
            firstName : "",
            lastName : "",
            email : "",
            password: "",
            confirmPassword: "",
            sex : "",
            birthDay:"" 
        }
    }
    handleChange = (e) => {
        const {value , name } = e.target;
        this.setState({[name]: value});
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {firstName,lastName,email,password,confirmPassword,sex,birthDay} = this.state;
        if(password !== confirmPassword) {
            alert("Password don't match !");
        }
        axios.post("http://localhost:2565/login",this.state)
        .then(res => console.log(res));
        
    }
    render() {
        return(
                <MainContainer className="main">
                    <WrapperContainer className="wrapper">
                    <LogoTopic as="img" src={imgSrc} alt="#" className="logopic"/>
                    <SignUpContainer className="signup">
                        <h1>Join CowNut Today</h1>
                        <form onSubmit ={this.handleSubmit}>
                        <TableSignUpContainer id="signuptable">
                            <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="fname">First Name:</label>
                                        </td>
                                        <td>
                                            <FormInput 
                                             type="text" 
                                             id="fname" 
                                             className="inputtext2" 
                                             name="firstName" 
                                             required 
                                             handleChange = {this.handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="lname">Last Name:</label>
                                        </td>
                                        <td>
                                            <FormInput 
                                                type="text" 
                                                id="lname" 
                                                className="inputtext2" 
                                                name="lastName" 
                                                required 
                                                handleChange = {this.handleChange}
                                                />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="emailadd"> Email:</label>
                                        </td>
                                        <td>
                                            <FormInput 
                                                type="email" 
                                                id="emailadd" 
                                                className="inputtext2" 
                                                name="email" 
                                                required 
                                                handleChange = {this.handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="pwd">Password:</label>
                                        </td>
                                        <td>
                                            <FormInput 
                                                type="password"  
                                                className="inputtext2 pwd" 
                                                name="password" 
                                                required 
                                                handleChange = {this.handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <label htmlFor="pwd">Confirm Password:</label>
                                        </td>
                                        <td>
                                            <FormInput 
                                                type="password"  
                                                className="inputtext2 pwd" 
                                                name="confirmPassword" 
                                                required 
                                                handleChange = {this.handleChange}/>
                                        </td>
                                    </tr>
                                    <tr className="fm">
                                        <td style={{textAlign: 'right'}}>
                                            <FormInput 
                                                type="radio" 
                                                name="sex" 
                                                id="male" 
                                                required 
                                                handleChange = {this.handleChange}/>
                                            <label htmlFor="male">Male</label>
                                        </td>
                                        <td style={{paddingLeft: '20px'}}>
                                            <FormInput 
                                                type="radio" 
                                                name="sex" 
                                                id="female" 
                                                required 
                                                handleChange = {this.handleChange}/>
                                            <label htmlFor="female" id="fm1">Female</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="date">Birthday:</label>
                                        </td>
                                        <td>
                                            <FormInput 
                                                className="dob" 
                                                    type="date" 
                                                    id="birthday" 
                                                    name="birthday"
                                                    handleChange = {this.handleChange}/>
                                            
                                        </td>
                                    </tr>
                                    <tr className="joinbut">
                                        <td colSpan={2} style={{paddingLeft: '40px', paddingRight: '0px'}}>
                                           <ButtonSignUpContainer>Join Now</ButtonSignUpContainer>
                                        </td>
                                    </tr>
                                </tbody>
                            </TableSignUpContainer>
                        </form>
                    </SignUpContainer>
                    </WrapperContainer>
                </MainContainer>
            );
    }
}

export default SignUp;