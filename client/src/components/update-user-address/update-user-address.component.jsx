import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import axios from 'axios';
import {
    ModalContainer,
    EditContainer,
    CloseIconContainer
} from '../update-user-detail/update-user-detail';
import { toggleUpdateAddress,setCurrentUSer } from '../../redux/user/user.action';
import { selectUpdateAddress, selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


class UpdateUserAddress extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            country: "",
            district : "",
            state : " "
        }
    }
    componentDidMount() {
        const {currentUser} = this.props;
        if(!currentUser.country || !currentUser.district || !currentUser.state) {
            return;
        }
        this.setState({
            country: currentUser.country,
            district: currentUser.district,
            state : currentUser.state
        })
        
    }
    handleChange = e => {
        const {name, value } = e.target; 
        this.setState({
            [name] : value
        })
        console.log(this.state);
    }

    handleSubmit  = e => {
        e.preventDefault();
        const {country,district,state} = this.state;
        const {setCurrentUSer} = this.props;
        if(!country || !district || !state) {
            alert("Invalid Country district state")
            this.setState({
                country: "",
                district : "",
                state : " "
            })
            return;

        }
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
        const {updateAddress,toggleUpdateAddress,currentUser} = this.props;
        return(
            <ModalContainer className="animate" style ={updateAddress ? {"display":"block"} : {"display" :'none'}}>
                <EditContainer >
                <CloseIconContainer onClick = {() => toggleUpdateAddress()}  title="Close Modal">×</CloseIconContainer>
                <h2 align="center">Address Edit</h2>
                <form action="#" onSubmit = {this.handleSubmit} >
                    <br />
                    <label htmlFor="country">Country</label>
                    <br />
                    <FormInput 
                        type="text" 
                        defaultValue = {currentUser.country}
                        id="country" 
                        name = "country"
                        handleChange = {this.handleChange}
                        placeholder="Enter Country" 
                        required />
                    <br />
                    <label htmlFor="state">State</label>
                    <br />
                    <FormInput 
                        type="text" 
                        name ="state"
                        handleChange = {this.handleChange}
                        id="state" 
                        defaultValue = {currentUser.state}
                        placeholder="Enter State" 
                        required />
                    <br />
                    <label htmlFor="district">District</label>
                    <br />
                    <FormInput 
                        type="text" 
                        name ="district"
                        handleChange = {this.handleChange}
                        id="district" 
                        defaultValue = {currentUser.district}
                        placeholder="Enter District" 
                        required />
                    <br />
                    
                    <button onClick = {() => toggleUpdateAddress()} type="submit" >Update</button>
                    <br />
                    <button type="button" onClick = {() => toggleUpdateAddress()}  className="cancelbtn" >Cancel</button>
                    <br />
                </form>
                </EditContainer>
            </ModalContainer>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    updateAddress: selectUpdateAddress,
    currentUser : selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    toggleUpdateAddress :   () => dispatch(toggleUpdateAddress()),
    setCurrentUSer : (user) => dispatch(setCurrentUSer(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserAddress) ; 