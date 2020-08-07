import React from 'react';
import { connect } from 'react-redux';
import {toggleUpdateInformation} from '../../redux/user/user.action';
import FromInput from '../form-input/form-input.component';
import { 
    ModalContainer, 
    EditContainer,
    CloseIconContainer
} from './update-user-detail';
class UpdateUserDetail extends React.Component {
    render() {
        const {updateDetail,toggleUpdateInformation} = this.props;
        return (
            <ModalContainer className=" animate" style = {updateDetail ? {display:"block"} : {display :"none"}}>
            <EditContainer >
            <CloseIconContainer onClick = {() => toggleUpdateInformation()}  title="Close Modal" >×</CloseIconContainer>
            <h2 align="center">Personal Detail Edit</h2>
            <form action="#" >
                <br />
                <label htmlFor="firstName">First Name</label>
                <br />
                <FromInput 
                    type="text" 
                    name ="firstName"
                    id="firstName" 
                    placeholder="Enter First Name" 
                    required />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <br />
                <FromInput 
                    type="text" 
                    id="lastName"
                    name="lastName" 
                    placeholder="Enter Last Name" required />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <FromInput 
                    type="email"
                    name ="email"
                    id="email" 
                    placeholder="Enter Email-ID" 
                    required />
                <br />
                <label htmlFor="date">Birthday:</label>
                <br />
                <br />
                <FromInput 
                    type="date"
                    name ="birthDay"
                    id="email" 
                    placeholder="Your birth Day" 
                    required />
                <br />
                <FromInput 
                    type="radio"
                    name="sex"
                    id="male"
                    required />
                <label htmlFor="male">Male</label>
                <FromInput 
                    type="radio" 
            
                    name="sex" id="female"
                    style={{marginBottom: '16px'}} 
                    required />
                <label htmlFor="female" id="fm1">Female</label>
                <br />
                <button  type="submit" >Update</button>
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
    toggleUpdateInformation : () => dispatch(toggleUpdateInformation())
})

const mapStateToProps = ({user : {hidden : {updateDetail}}}) => ({
    updateDetail,
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserDetail) ;