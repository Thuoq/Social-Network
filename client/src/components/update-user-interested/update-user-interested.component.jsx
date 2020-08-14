import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import FormInput from '../form-input/form-input.component';
import {toggleUpdateInterested,setCurrentUSer} from '../../redux/user/user.action';
import {
    ModalContainer,
    EditContainer,
    CloseIconContainer
} from '../update-user-detail/update-user-detail';
import { createStructuredSelector } from 'reselect';
import { selectUpdateInterested, selectCurrentUser } from '../../redux/user/user.selector';
class UpdateUserInterested extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hobby : " ",
      language : " "
    }
  }
  componentDidMount() {
    const {currentUser} = this.props;
    this.setState({
      hobby : currentUser.hobby,
      language: currentUser.language
    })
  }
  handleChange = e => {
    const {name,value} = e.target;
    this.setState({[name] : value })
  }
  handleSubmit = e => {
    e.preventDefault();
    const {hobby , language} = this.state;
    if(!hobby || !language) {
      alert("Invalid hobby or Languages");
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
    const {updateInterested,toggleUpdateInterested,currentUser} = this.props;
    
    
    return (
      <ModalContainer className=" animate" style = {updateInterested ? {"display":"block"} : {"display" :'none'}}>
        <EditContainer >
          <CloseIconContainer  onClick = {() =>toggleUpdateInterested()} title="Close Modal" >×</CloseIconContainer>
          <h2 align="center">More About You Edit</h2>
          <form action="#" onSubmit = {this.handleSubmit} >
            <br />
            <label htmlFor="hobby">Hobby</label>
            <br />
            <FormInput 
              type="text" 
              id="hobby" 
              name = "hobby"
              placeholder="Enter Hobby" 
              defaultValue = {currentUser.hobby}
              required />
            <br />
            <label htmlFor="lknown">Language Known</label>
            <br />
            <FormInput 
              type="text"
              id="lknown"
              name = "language"
              defaultValue = {currentUser.language}
              placeholder="Enter Language Known" 
              required />
            <br />
            <button type="submit" >Update</button>
            <br />
            <button  onClick = {() =>toggleUpdateInterested()} type="button" className="cancelbtn" >Cancel</button>
            <br />
          </form>
        </EditContainer>
      </ModalContainer>

    )
  }
}


const mapDispatchToProps = dispatch =>({
  toggleUpdateInterested: () => dispatch(toggleUpdateInterested()),
  setCurrentUSer : user => dispatch(setCurrentUSer(user))
})
const mapStateToProps = createStructuredSelector({
  updateInterested : selectUpdateInterested,
  currentUser : selectCurrentUser
})



export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserInterested) ;