import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component';
import {toggleUpdateInterested} from '../../redux/user/user.action';
import {
    ModalContainer,
    EditContainer,
    CloseIconContainer
} from '../update-user-detail/update-user-detail';
class UpdateUserInterested extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hobby : " ",
      language : " "
    }
  }
  handleChange = e => {
    const {name,value} = e.target;
    this.setState({[name] : value })
  }

  render() {
    const {updateInterested,toggleUpdateInterested} = this.props;
    return (
      <ModalContainer className=" animate" style = {updateInterested ? {"display":"block"} : {"display" :'none'}}>
        <EditContainer >
          <CloseIconContainer  onClick = {() =>toggleUpdateInterested()} title="Close Modal" >×</CloseIconContainer>
          <h2 align="center">More About You Edit</h2>
          <form action="#" >
            <br />
            <label htmlFor="hobby">Hobby</label>
            <br />
            <FormInput 
              type="text" 
              id="hobby" 
              placeholder="Enter Hobby" 
              
              required />
            <br />
            <label htmlFor="lknown">Language Known</label>
            <br />
            <FormInput type="text" id="lknown" placeholder="Enter Language Known" required />
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
  toggleUpdateInterested: () => dispatch(toggleUpdateInterested())
})

const mapStateToProps = ({user : {hidden : {updateInterested}}}) => ({
  updateInterested,
})

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserInterested) ;