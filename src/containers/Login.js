import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginAction} from '../actions/usersActions';

class Login extends Component {

  componentDidMount(){
    if (this.props.isLogged === true){
      this.props.history.push('/');
    }

  } 

  handlerLogin = (username, password) => {
    this.props.login(username, password);
    this.props.history.push('/');
  }

  render() {
    return (
      
      <div className="login-form">   
        <LoginForm handlerLogin={this.handlerLogin} />
      </div>
    )
  }
}
const mapStateToProps = state => {
 return {
    isLogged:state.usersReducer.isLogged

  } 
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(loginAction(username, password));
 
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);