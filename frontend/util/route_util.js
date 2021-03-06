import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
}

const Auth = ({component: Component, path, loggedIn, exact, redirect}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (<Component {...props} />) : (<Redirect to={redirect ? redirect : "/"} />)
    )} />
);

const Protected = ({component: Component, path, loggedIn, exact}) => {
    
    return (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ?  (<Redirect to="/login" />) : (<Component {...props} />)
    )} />)
};




export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));