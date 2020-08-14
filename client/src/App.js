import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import axios from 'axios';
import {selectCurrentUser} from './redux/user/user.selector';
import {setCurrentUSer,logOutCurrentUser} from './redux/user/user.action';
import {Switch , Route,Redirect} from 'react-router-dom';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {GlobalStyle } from './app.styles';
import MainContent from './pages/main-content/main-content.component';
import SuggestUser from './components/suggest-user/suggest-user.component';
import FooterUser from './components/footer-user/footer-user.component';
import ProfileUser from './pages/profile-user/profile-user.component';
import Header from './components/header/header.component'; 

class App extends React.Component {
  componentDidMount() {
    const {setCurrentUSer} = this.props;
    let token  = "Bearer "  + JSON.parse(localStorage.getItem("login"));
  
    axios(`http://localhost:2565/refresh`, {
      method : "post",
      headers : {
        'Authorization': token
      }
     
    }).then(({data:{data: {user}}}) => {
      setCurrentUSer(user);
    }).catch(err  => {
      logOutCurrentUser();
    })
  }
  render(){  
    const {currentUser} = this.props;
    
   
    return (
      <div>
        <GlobalStyle/>
        {
          currentUser ?  (
            <>
            <Header/>
              <div className="wrapperContainer">
                <Switch>  
                    <Route exact path="/profile" 
                     render =  
                      { () => !currentUser 
                              ? (<Redirect to="/" />) 
                              : ( <ProfileUser/>)} />
                    <Route  path="/"  component = {MainContent} />
                </Switch>
                <SuggestUser/>
                <FooterUser/>
              </div>
            </>
            
          ) : <Switch>
                <Route exact path="/profile" 
                     render =  
                      { () => !currentUser 
                              ? (<Redirect to="/" />) 
                              : ( <ProfileUser/>)}  />
                <Route path="/" exact component ={SignInSignUp}/>
              </Switch>
          
        }
      </div>
    ) 
  }
  
}
const mapDispatchToProps = dispatch => ({
  setCurrentUSer: (user) => dispatch(setCurrentUSer(user)),
  logOutCurrentUser: () => dispatch(logOutCurrentUser())
})

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
