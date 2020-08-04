import React from 'react';
import {Switch , Route} from 'react-router-dom';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {GlobalStyle } from './app.styles';
import MainContent from './pages/main-content/main-content.component';
import SuggestUser from './components/suggest-user/suggest-user.component';
import FooterUser from './components/footer-user/footer-user.component';
import ProfileUser from './pages/profile-user/profile-user.component';
import Header from './components/header/header.component'; 
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =   {
      currentUser : false
    }
  }
  render(){ 
    const {currentUser} = this.state;
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

export default App;
