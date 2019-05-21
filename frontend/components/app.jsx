import React from 'react'

import {Route } from 'react-router-dom'
import SignUpFormContainer from './session/signup_form_container'    
import LoginFormContainer from './session/login_form_container'    
import GreetingContainer from '../components/greeting/greeting_container'

import {AuthRoute, ProtectedRoute} from '../util/route_util'
const App = () => {
    return (
        <div>
            <header>
            <nav id="navBar-top">
                <ul className="left-ul-list">
                    <li> <a href="#">Write a Review</a></li>
                </ul>
                <div className="logo-div">
                    logo
                </div>
                <GreetingContainer />
            </nav>
             
            </header>
            <Route exact path="/" render={() => ( <h1>Index Page</h1>)} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} redirect="/restaurant"/>
            {/* <ProtectedRoute  path="/restaurant" component={Protected1()} /> */}

            <footer>
                <div>
                    <h3>About</h3>
                    <ul>
                        <li>About Welp</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
const Protected1 = () => <h3>Protected Content</h3>;
export default App;