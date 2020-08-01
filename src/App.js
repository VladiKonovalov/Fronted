import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from './containers/Home';
import Tasks from './containers/Tasks';
import Task from './containers/Task';
import Login from './containers/Login';
import Singup from './containers/Singup';
import Users from './containers/Users';
import PrivateRoute from './containers/PrivateRoute';
import { logoutAction } from './actions/usersActions';

class App extends Component {
  render() {
    let loginLink = <li className="nav-item">        <NavLink className="nav-link" to="/login"> Login </NavLink></li>;
    let SingUpLink = <li className="nav-item">        <NavLink className="nav-link" to="/singup"> Singup </NavLink></li>;

    if (this.props.isLogged === true) {
      loginLink = <li className="nav-item">        <Link className="nav-link" to="/login" onClick={this.handlerLogout}> logout </Link></li>;
      SingUpLink = <li className="nav-item">        <Link className="nav-link" to="/singup"  onClick={this.handlerLogout}>  </Link></li>;
    }
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <Link to="/">{this.props.siteName}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">            <NavLink className="nav-link" exact to="/"> Home </NavLink></li>
              <li className="nav-item">            <NavLink className="nav-link" exact to="/users"> Users </NavLink></li>

              <li className="nav-item">      <NavLink className="nav-link" to="/tasks"> Tasks </NavLink></li>
              <li className="nav-item">        <NavLink className="nav-link" to="/task/1"> Create new task </NavLink></li>
              {loginLink}
              {SingUpLink}

            </ul>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/singup" component={Singup} />
          <PrivateRoute path="/tasks/:pageNumber?" comp={Tasks} />
          <PrivateRoute path="/task/:taskId" comp={Task} />
          <PrivateRoute path="/users" comp={Users} />

        </div>
        
      </Router>
    );
  }
  handlerLogout = () => {
    this.props.logout();
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.usersReducer.isLogged
  }
}

const mapDispatchToProps = dispatch => {
  return {

    logout() {
      dispatch(logoutAction());
      window.localStorage.removeItem('Autorization');
      window.localStorage.removeItem('userName');
      window.localStorage.removeItem('isLogged');
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);