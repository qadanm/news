import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import userService from '../../utils/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    // TODO: implement in an elegant way
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal to toast in your apps instead of alert
      alert('Invalid Creds!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
      <div class="form-style-6">
          <h1>Log in</h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          
           
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />

          
           
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />

          

              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>

        </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
