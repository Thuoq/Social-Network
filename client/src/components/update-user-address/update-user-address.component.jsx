import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';

import {
    ModalContainer,
    EditContainer,
    CloseIconContainer
} from '../update-user-detail/update-user-detail';
import { toggleUpdateAddress } from '../../redux/user/user.action';


class UpdateUserAddress extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            country: "",
            district : "",
            state : " "
        }
    }
    handleChange = e => {
        const {name, value } = e.target; 

        this.setState({
            [name] : value
        })
    }
    
    render() {
        const {updateAddress,toggleUpdateAddress} = this.props;
        return(
            <ModalContainer className="animate" style ={updateAddress ? {"display":"block"} : {"display" :'none'}}>
                <EditContainer >
                <CloseIconContainer onClick = {() => toggleUpdateAddress()}  title="Close Modal">×</CloseIconContainer>
                <h2 align="center">Address Edit</h2>
                <form action="#" >
                    <br />
                    <label htmlFor="country">Country</label>
                    <br />
                    <FormInput 
                        type="text" 
                        id="country" 
                        name = "country"
                        placeholder="Enter Country" 
                        required />
                    <br />
                    <label htmlFor="state">State</label>
                    <br />
                    <FormInput 
                        type="text" 
                        name ="state"
                        id="state" 
                        placeholder="Enter State" 
                        required />
                    <br />
                    <label htmlFor="district">District</label>
                    <br />
                    <FormInput 
                        type="text" 
                        name ="district"
                        id="district" 
                        placeholder="Enter District" 
                        required />
                    <br />
                    
                    <button type="submit" >Update</button>
                    <br />
                    <button type="button" onClick = {() => toggleUpdateAddress()}  className="cancelbtn" >Cancel</button>
                    <br />
                </form>
                </EditContainer>
            </ModalContainer>
        )
    }
}

const mapStateToProps = ({user : {hidden : {updateAddress}}}) => ({
    updateAddress,
})
const mapDispatchToProps = dispatch => ({
    toggleUpdateAddress :   () => dispatch(toggleUpdateAddress())
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserAddress) ; 