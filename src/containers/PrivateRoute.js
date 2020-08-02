import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({ path, comp: Component, isLogged, ...rest }) => {
    return (
    <Route path={path}{...rest} render={props => {
            if (isLogged === true) {   

             if  (path === '/users' && window.localStorage.getItem('isAdmin')==='false'){
                return <Redirect to= "/"/>
            } 
                    return <Component {...props}{...rest} />;
        }
        return <Redirect to= "/login"/>
   }}/>
    
        );
    
}

const mapStateToProps = state => {
    return {
        isLogged: state.usersReducer.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);