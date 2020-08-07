import React from 'react'
import FormInput from '../form-input/form-input.component';
import {connect} from 'react-redux';
import {toggleUpdateSchoolPri} from '../../redux/user/user.action';
import {
    ModalContainer,
    EditContainer,
    CloseIconContainer
} from '../update-user-detail/update-user-detail';

const UpdateUserPri = ({updateSchoolPri,toggleUpdateSchoolPri}) => {
    return (
        <ModalContainer className=" animate" style = {updateSchoolPri ? {display : 'block'} : {display: 'none'}}>
        <EditContainer >
          <CloseIconContainer onClick = {() =>toggleUpdateSchoolPri()}  title="Close Modal">×</CloseIconContainer>
          <h2 align="center">Primary School Edit</h2>
          <form action="#" >
            <br />
            <label htmlFor="pschool">Primary School</label>
            <br />
            <FormInput type="text" id="pschool" placeholder="Enter Primary School" required />
            <br />
            <label htmlFor="degree1">Degree</label>
            <br />
            <FormInput type="text" id="degree1" placeholder="Enter Degree" required />
            <br />
            <label htmlFor="fstudy1">Field of Study</label>
            <br />
            <FormInput type="text" id="fstudy1" placeholder="Enter Field of Study" required />
            <br />
            <label htmlFor="syear1">Start Year</label>
            <label style={{position: 'absolute', left: '50.6%'}} htmlFor="eyear1">End Year</label>
            <br />
            <FormInput style={{width: '49%'}} type="number" id="syear1" placeholder="Start Year"  required />	 		
            <FormInput style={{width: '49%'}} type="number" id="eyear1" placeholder="End Year"  required />
            <br />
            <button type="submit" >Update</button>
            <br />
            <button onClick = {() =>toggleUpdateSchoolPri()} type="button" className="cancelbtn" >Cancel</button>
            <br />
          </form>
        </EditContainer>
      </ModalContainer>
    )
}
const mapDispatchToProps = dispatch =>({
  toggleUpdateSchoolPri: () => dispatch(toggleUpdateSchoolPri())
})


const mapStateToProps = ({user : {hidden : {updateSchoolPri}}}) => ({
  updateSchoolPri,
})
export default  connect(mapStateToProps,mapDispatchToProps)(UpdateUserPri);