import React, { Component } from 'react';

class SingupForm extends Component {
  constructor(props) {
    super();
    this.state = {
      user: {
        username: '',
        password: '' ,
      isAdmin : false 
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
if (this.state.user.isAdmin ==='on'){
    this.props.handlerSingup(this.state.user.username,this.state.user.password,true);
}
else {
  this.props.handlerSingup(this.state.user.username,this.state.user.password,false);

}
  }

  render() {

    return (
      <form className="singup-form" onSubmit={this.handlerSubmit}>
        <input type="text" value={this.state.user.username} onChange={(e) => this.handlerChangeUser('username', e.target.value)} id="username" className="form-control" name="username" placeholder="username" ></input>
        <input type="password" value={this.state.user.password} onChange={(e) => this.handlerChangeUser('password', e.target.value)} id="password" className="form-control" name="login" placeholder="password" autoComplete="true"></input>
        <input type="checkbox" id="isAdmin" onChange={(e) => this.handlerChangeUser('isAdmin', e.target.value)} aria-label="Checkbox for following text input"/> is Admin ?
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

    )
  }
}

export default SingupForm;