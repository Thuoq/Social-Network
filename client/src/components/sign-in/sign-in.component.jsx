import React from 'react';
import FormInput from '../form-input/form-input.component';
import axios from 'axios';
import {connect} from 'react-redux'; 
import {setCurrentUSer} from '../../redux/user/user.action';
import {ReactComponent as Logo } from '../../assets/wattpad.svg';
import { 
    WrapperContainer,
    HeaderContainer,
    FormContainer,
    TableContainer,
    ButtonLogin
} from './sign-in.styles';
import { createStructuredSelector } from 'reselect';
import { selectSocketClient } from '../../redux/socket/socket.selector';
class SignIn extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            email : "",
            password : ""
        }
    }
    
    handleChange = (e) => {
        const {value , name} = e.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email,password} = this.state;
        const {setCurrentUSer,socketClient} = this.props;
        
        if(!email || !password) {
            alert("Please provide email or password");

            this.setState({
                email: " ",
                password: " ",
            })
            return;
        }
        axios.post(`http://localhost:2565/login`,this.state)
        .then(({data: {data:{user},token}}) => {
           localStorage.setItem("login",JSON.stringify(token))
           setCurrentUSer(user);
           socketClient.emit("USER_CONNECTION",user.email)

        });
    }
    render(){ 
        return( 
            <HeaderContainer >
                <WrapperContainer >
                    <Logo width={160} height={70}   />
                    <FormContainer action="./login/home.html" onSubmit= {this.handleSubmit} className="loginuser">
                        <TableContainer className="login">
                            <tbody>
                                <tr style={{height: '20px'}}>
                                    <td>
                                        <label htmlFor="email">Email</label>
                                    </td>
                                    <td>
                                        <label htmlFor="logpassword">Password</label>
                                    </td>
                            
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <FormInput  
                                            handleChange = {this.handleChange}
                                            type="text" 
                                            id="email" 
                                            className="inputtext" 
                                            required 
                                            name = "email"/>
                                    </td>
                                    
                                    <td>
                                        <FormInput 
                                            handleChange = {this.handleChange}
                                            type="password" 
                                            id="logpassword" 
                                            className="inputtext" 
                                            name = "password"
                                            required />
                                    </td>
                                    <td >
                                        <ButtonLogin type ="submit" className="loginbutton" >Login </ButtonLogin>
 
                                    </td>
                                </tr>
                            </tbody>
                        </TableContainer>
                    </FormContainer>
                </WrapperContainer>
            </HeaderContainer>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    setCurrentUSer : user => dispatch(setCurrentUSer(user))

})
const mapStateToProps = createStructuredSelector({
    socketClient : selectSocketClient
})


export default connect(mapStateToProps,mapDispatchToProps)(SignIn) ;