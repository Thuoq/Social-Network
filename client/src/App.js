import React from 'react';
import { connect } from 'react-redux';
import {Switch , Route} from 'react-router-dom';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {GlobalStyle } from './app.styles';
import MainContent from './pages/main-content/main-content.component';
import SuggestUser from './components/suggest-user/suggest-user.component';
import FooterUser from './components/footer-user/footer-user.component';
import ProfileUser from './pages/profile-user/profile-user.component';
import Header from './components/header/header.component'; 
class App extends React.Component {
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
                    <Route exact path="/profile" component= {ProfileUser} />
                    <Route  path="/"  component = {MainContent} />
                </Switch>
                <SuggestUser/>
                <FooterUser/>
              </div>
            </>
          ) : <Route path="/" exact component ={SignInSignUp}/>
        }
      </div>
    ) 
  }
  
}

const mapStateToProps =  state => ({
  currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(App);
