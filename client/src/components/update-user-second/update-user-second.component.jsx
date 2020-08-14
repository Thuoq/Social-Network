import React from 'react'
import FormInput from '../form-input/form-input.component';
import axios from 'axios'
import {connect} from 'react-redux';
import {toggleUpdateSchoolSec,setCurrentUSer} from '../../redux/user/user.action';
import {
    ModalContainer,
    EditContainer,
    CloseIconContainer
} from '../update-user-detail/update-user-detail';
import { selectCurrentUser, selectUpdateSchoolSec } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
class UpdateUserSecond extends React.Component {
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
          name : currentUser.school[1].name,
          degree: currentUser.school[1].degree,
          fieldStudy : currentUser.school[1].startYear,
          endYear : currentUser.school[1].endYear
        }) 
        
    
      }

    handleChange = e => {
        const {name , value } = e.target;

        this.setState({
            [name] : value
        })
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

          },
          data: this.state
        }).then(({data: {data:{user}}}) => {
          setCurrentUSer(user);
        });
      }
 
    render() {
        const {toggleUpdateSchoolSec,updateSchoolSec,currentUser} = this.props;
        return(
        <ModalContainer className=" animate" style = {updateSchoolSec ? {display: 'block'} : {display :'none'}}>
            <EditContainer >
            <CloseIconContainer onClick = {() => toggleUpdateSchoolSec()}   title="Close Modal" >×</CloseIconContainer>
            <h2 align="center">Secondary School Edit</h2>
            <form action="#" onSubmit = {this.handleSubmit} >
                <br />
                <label htmlFor="sschool">Secondary School</label>
                <br />
                <FormInput 
                    type="text" 
                    name = "name"
                    defaultValue = {currentUser.school[1] ? currentUser.school[1].name : " "}
                    handleChange = {this.handleChange}
                    id="sschool" 
                    placeholder="Enter Secondary School" 
                    required />
                <br />
                <label htmlFor="degree2">Degree</label>
                <br />
                <FormInput 
                    type="text" 
                    id="degree2"
                    defaultValue = {currentUser.school[1] ? currentUser.school[1].degree :  " "}
                    handleChange = {this.handleChange}
                    placeholder="Enter Degree"
                    required 
                    name ="degree"
                    />
                <br />
                <label htmlFor="fstudy2">Field of Study</label>
                <br />
                <FormInput 
                    type="text" 
                    handleChange = {this.handleChange}
                    id="fstudy2"
                    defaultValue ={currentUser.school[1] ? currentUser.school[1].fieldStudy : " "}
                    name ="fieldStudy"
                    placeholder="Enter Field of Study" 
                    required />
                <br />
                <label htmlFor="syear1">Start Year</label>
                <label style={{position: 'absolute', left: '50.6%'}} htmlFor="eyear1">End Year</label>
                <br />
                <FormInput 
                    style={{width: '49%'}} 
                    type="number" id="syear1" 
                    placeholder="Start Year" 
                    defaultValue  = {currentUser.school[1] ?  currentUser.school[1].startYear : " "}
                    handleChange = {this.handleChange}
                    name="startYear"
                    min={1970} max={2034} 
                    required />	 		
                <FormInput 
                    style={{width: '49%'}} 
                    type="number" 
                    defaultValue = {currentUser.school[1] ?  currentUser.school[1].endYear : " "}
                    name="endYear"
                    handleChange = {this.handleChange}
                    id="eyear1" 
                    placeholder="End Year" 
                    min={1970}
                    max={2034}  
                    required />
                <br />
                <button onClick = {() => toggleUpdateSchoolSec()} type="submit" >Update</button>
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
    toggleUpdateSchoolSec: () => dispatch(toggleUpdateSchoolSec()),
    setCurrentUSer : user => dispatch(setCurrentUSer(user))
})

const mapStateToProps = createStructuredSelector({
  updateSchoolSec: selectUpdateSchoolSec,
  currentUser :selectCurrentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserSecond) 