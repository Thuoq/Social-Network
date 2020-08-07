import React from 'react'
import FormInput from '../form-input/form-input.component';
import {connect} from 'react-redux';
import {toggleUpdateSchoolSec} from '../../redux/user/user.action';
import {
    ModalContainer,
    EditContainer,
    CloseIconContainer
} from '../update-user-detail/update-user-detail';
class UpdateUserSecond extends React.Component {

    render() {
        const {toggleUpdateSchoolSec,updateSchoolSec} = this.props;
        return(
        <ModalContainer className=" animate" style = {updateSchoolSec ? {display: 'block'} : {display :'none'}}>
            <EditContainer >
            <CloseIconContainer onClick = {() => toggleUpdateSchoolSec()}   title="Close Modal" >×</CloseIconContainer>
            <h2 align="center">Secondary School Edit</h2>
            <form action="#" >
                <br />
                <label htmlFor="sschool">Secondary School</label>
                <br />
                <FormInput type="text" id="sschool" placeholder="Enter Secondary School" required />
                <br />
                <label htmlFor="degree2">Degree</label>
                <br />
                <FormInput type="text" id="degree2" placeholder="Enter Degree" required />
                <br />
                <label htmlFor="fstudy2">Field of Study</label>
                <br />
                <FormInput type="text" id="fstudy2" placeholder="Enter Field of Study" required />
                <br />
                <label htmlFor="syear1">Start Year</label>
                <label style={{position: 'absolute', left: '50.6%'}} htmlFor="eyear1">End Year</label>
                <br />
                <FormInput style={{width: '49%'}} type="number" id="syear1" placeholder="Start Year" min={1970} max={2017} required />	 		
                <FormInput style={{width: '49%'}} type="number" id="eyear1" placeholder="End Year" min={1970} required />
                <br />
                <button type="submit" >Update</button>
                <br />
                <button  onClick = {() => toggleUpdateSchoolSec()} type="button" className="cancelbtn" >Cancel</button>
                <br />
            </form>
        </EditContainer>
      </ModalContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    toggleUpdateSchoolSec: () => dispatch(toggleUpdateSchoolSec())
})

const mapStateToProps = ({user : {hidden : {updateSchoolSec}}}) => ({
    updateSchoolSec,
})
export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserSecond) 