import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import {toggleUpdateInformation,setCurrentUSer} from '../../redux/user/user.action';
import FromInput from '../form-input/form-input.component';
import { 
    ModalContainer, 
    EditContainer,
    CloseIconContainer
} from './update-user-detail';
import { selectUpdateDetail, selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
class UpdateUserDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: " ",
            lastName : " ",
            email : " ",
            birthDay: " ",
            sex : " ",
        }
    }
    componentDidMount() {
        const {currentUser} = this.props;
        this.setState({
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            birthDay: currentUser.birthDay,
            sex: currentUser.sex
        })
    }

    handleChange =  (e) => {
        const {name,value} = e.target;
        this.setState({[name] : value})
    } 
    handleSubmit = e => {
        e.preventDefault();
        const {firstName, lastName, email , birthDay} = this.state;
        if(!firstName || !lastName  || !email ||!birthDay) {
            alert("Valid firstName or lastName or email or birthDay")
            this.setState({
                firstName: " ",
                lastName : " ",
                email : " ",
                birthDay: " ",
                sex : " ",
            })
            return;
        }
        const {setCurrentUSer} = this.props;
        let token  = "Bearer "  + JSON.parse(localStorage.getItem("login"));
        
        axios(`http://localhost:2565/updateDetail`, {
            method: "post",
            headers : {
                'Authorization': token
                },
            data: this.state 
        })  
        .then(({data: {data:{user}}}) => {
            setCurrentUSer(user);
        });
    }
    render() {
        
        const {updateDetail,toggleUpdateInformation,currentUser} = this.props;
        console.log(this.state);
        return (
            <ModalContainer className=" animate" style = {updateDetail ? {display:"block"} : {display :"none"}}>
            <EditContainer >
            <CloseIconContainer onClick = {() => toggleUpdateInformation()}  title="Close Modal" >×</CloseIconContainer>
            <h2 align="center">Personal Detail Edit</h2>
            <form action="#" onSubmit = {this.handleSubmit} >
                <br />
                <label htmlFor="firstName">First Name</label>
                <br />
                <FromInput 
                    type="text" 
                    name ="firstName"
                    id="firstName" 
                    handleChange= {this.handleChange}
                    defaultValue = {currentUser.firstName}
                    placeholder="Enter First Name" 
                    required />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <br />
                <FromInput 
                    type="text" 
                    defaultValue = {currentUser.lastName}
                    id="lastName"
                    handleChange = {this.handleChange}
                    name="lastName" 
                    placeholder="Enter Last Name" required />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <FromInput 
                    type="email"
                    handleChange = {this.handleChange}
                    name ="email"
                    defaultValue = {currentUser.email}
                    id="email" 
                    placeholder="Enter Email-ID" 
                    required />
                <br />
                <label htmlFor="date">Birthday:</label>
                <br />
                <br />
                <FromInput 
                    type="date"
                    handleChange = {this.handleChange}
                    name ="birthDay"
                    value={moment(currentUser.birthDay).format("YYYY-MM-DD")}
                    id="email" 
                    placeholder="Your birth Day" 
                    required />
                <br />
                <FromInput 
                    type="radio"
                    handleChange = {this.handleChange}
                    name="sex"
                    value ="Male"
                    id="male"
                    checked = {currentUser.sex === "male"}
                    required />
                <label htmlFor="male">Male</label>
                <FromInput 
                    type="radio" 
                    value = "Female"
                    handleChange = {this.handleChange}
                    name="sex" id="female"
                    checked = {currentUser.sex === "female"}
                    style={{marginBottom: '16px'}} 
                    required />
                <label htmlFor="female" id="fm1">Female</label>
                <br />
                <button onClick = {() => toggleUpdateInformation()}  type="submit" >Update</button>
                <br />
                <button  onClick = {() => toggleUpdateInformation()}  type="button" className="cancelbtn" >Cancel</button>
                <br />
            </form>
            </EditContainer>
         </ModalContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    toggleUpdateInformation : () => dispatch(toggleUpdateInformation()),
    setCurrentUSer : (user) => dispatch(setCurrentUSer(user))
})

const mapStateToProps = createStructuredSelector({
    updateDetail : selectUpdateDetail,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserDetail) ;