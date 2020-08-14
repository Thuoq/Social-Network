import React from 'react'
import axios from 'axios';
import FormInput from '../form-input/form-input.component';

import {connect} from 'react-redux';
import {toggleUpdateSchoolPri,setCurrentUSer} from '../../redux/user/user.action';
import {
    ModalContainer,
    EditContainer,
    CloseIconContainer
} from '../update-user-detail/update-user-detail';
import { createStructuredSelector } from 'reselect';
import { selectUpdateSchoolPri, selectCurrentUser } from '../../redux/user/user.selector';

class UpdateUserPri extends React.Component {
  constructor(props) {
    super(props);

    this.state  = {
      name: "" ,
      degree : " ",
      fieldStudy: " ",
      startYear: null,
      endYear: null
    }
  }
  componentDidMount() {
    const {currentUser} = this.props;
    if(!currentUser.school[0]) {
      return;
    }
    this.setState({
      name : currentUser.school[0].name,
      degree: currentUser.school[0].degree,
      fieldStudy : currentUser.school[0].startYear,
      endYear : currentUser.school[0].endYear
    }) 
    

  }
  handleChange = e => {
    const {name,value} = e.target;
    this.setState({[name] : value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const {name,fieldStudy,degree,startYear,endYear} = this.state;
    if(!name || !fieldStudy || !degree || !startYear || !endYear) {
      alert("In valid name or field Study or degree or startYear or endYear");

      this.setState({
        name: "" ,
        degree : " ",
        fieldStudy: " ",
        startYear: null,
        endYear: null
      })
      return;
    }

    let token  = "Bearer "  + JSON.parse(localStorage.getItem("login"));
    axios(`http://localhost:2565/updateSchool`, {
      method: "post",
      headers : {
        'Authorization': token,
        'uP' : 'pri'
      },
      data: this.state
    }).then(({data: {data:{user}}}) => {
      setCurrentUSer(user);
    });
  }

  render() {
    const {updateSchoolPri,toggleUpdateSchoolPri,currentUser} = this.props;
     return  (
        <ModalContainer className=" animate" style = {updateSchoolPri ? {display : 'block'} : {display: 'none'}}>
          <EditContainer >
            <CloseIconContainer onClick = {() =>toggleUpdateSchoolPri()}  title="Close Modal">×</CloseIconContainer>
            <h2 align="center">Primary School Edit</h2>
            <form action="#" onSubmit = {this.handleSubmit} >
              <br />
              <label htmlFor="pschool">Primary School</label>
              <br />
              <FormInput 
                type="text" 
                id="pschool" 
                defaultValue = {currentUser.school[0] ? currentUser.school[0].name : " "}
                handleChange = {this.handleChange}
                name  = "name"
                placeholder="Enter Primary School" 
                required />
              <br />
              <label htmlFor="degree1">Degree</label>
              <br />
              <FormInput 
                type="text" 
                id="degree1" 
                defaultValue = {currentUser.school[0] ? currentUser.school[0].degree :  " "}
                handleChange = {this.handleChange}
                name = "degree"
                placeholder="Enter Degree" 
                required />
              <br />
              <label htmlFor="fstudy1">Field of Study</label>
              <br />
              <FormInput 
                type="text" 
                defaultValue = {currentUser.school[0] ? currentUser.school[0].fieldStudy : " "}
                handleChange = {this.handleChange}
                id="fstudy1" 
                name= "fieldStudy"
                placeholder="Enter Field of Study" 
                required />
              <br />
              <label htmlFor="syear1">Start Year</label>
              <label style={{position: 'absolute', left: '50.6%'}} htmlFor="eyear1">End Year</label>
              <br />
              <FormInput style={{width: '49%'}} 
                type="number" 
                name ="startYear"
                defaultValue = {currentUser.school[0] ?  currentUser.school[0].startYear : " "}
                id="syear1" 
                handleChange = {this.handleChange}
                placeholder="Start Year"  
                required />	 		
              <FormInput 
                style={{width: '49%'}} 
                type="number"
                name = "endYear" 
                id="eyear1"
                defaultValue = {currentUser.school[0] ?  currentUser.school[0].endYear : " "}
                placeholder="End Year" 
                handleChange = {this.handleChange}
                required />
              <br />
              <button onClick = {() => toggleUpdateSchoolPri() } type="submit" >Update</button>
              <br />
              <button onClick = {() =>toggleUpdateSchoolPri()} type="button" className="cancelbtn" >Cancel</button>
              <br />
            </form>
          </EditContainer>
        </ModalContainer>
      )
  }
}

const mapDispatchToProps = dispatch =>({
  toggleUpdateSchoolPri: () => dispatch(toggleUpdateSchoolPri()),
  setCurrentUSer : user => dispatch(setCurrentUSer(user))
})

const mapStateToProps = createStructuredSelector({
  updateSchoolPri : selectUpdateSchoolPri,
  currentUser: selectCurrentUser
})
export default  connect(mapStateToProps,mapDispatchToProps)(UpdateUserPri);