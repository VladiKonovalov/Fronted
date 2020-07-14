import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingupForm from '../components/SingupForm';
import { singupAction } from '../actions/usersActions';


class Singup extends Component {

  componentDidMount(){
    if (this.props.signup === true){
      this.props.history.push('/');
    }

  } 

  handlerSingup = (username, password,isadmin) => {
    console.log("is admin 1 ",isadmin)
    this.props.signup(username, password,isadmin);
    this.props.history.push('/');
  }

  render() {
    return (
      
      <div className="singup-form">
        <SingupForm handlerSingup={this.handlerSingup} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isSignup :state.usersReducer.isSignup

  } 
}

const mapDispatchToProps = dispatch => {
  return {
   signup:  (username, password,isadmin) => {

 dispatch(singupAction(username, password,isadmin));
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singup);