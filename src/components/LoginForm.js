import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super();
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }
  handlerChangeUser = (property, value) => {
    let user = this.state.user;
    user[property] = value;
   
   
    this.setState({
      user
    })
  }

  handlerSubmit = (e) => {
     e.preventDefault();
    this.props.handlerLogin(this.state.user.username, this.state.user.password);
  }

  render() {

    return (
      <form className="login-form" onSubmit={this.handlerSubmit}>
        <input type="text" value={this.state.user.username} onChange={(e) => this.handlerChangeUser('username', e.target.value)} id="username" className="form-control" name="username" placeholder="username" autoComplete="true"></input>
        <input type="password" value={this.state.user.password} onChange={(e) => this.handlerChangeUser('password', e.target.value)} id="password" className="form-control" name="login" placeholder="password" autoComplete="true"></input>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }
}

export default LoginForm;