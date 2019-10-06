import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../pages/App/App.css';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Project 4</header>

        <Switch>

        <Route exact path='/' render={() =>

          <NavBar/>
        
        }/>

        <Route exact path='/signup' render={({ history }) => 
         
         
         <SignupPage

         history={history}
         handleSignupOrLogin={this.handleSignupOrLogin}

         />
          

        }/>
        <Route exact path='/login' render={({ history }) => 
         
         
         <LoginPage

         history={history}
         handleSignupOrLogin={this.handleSignupOrLogin}

         />
          

        }/>

        </Switch>
      </div>
    );
  }
}



export default App;
