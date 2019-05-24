import React from 'react'

import {Route } from 'react-router-dom'
import SignUpFormContainer from './session/signup_form_container'    
import LoginFormContainer from './session/login_form_container'    
import GreetingContainer from '../components/greeting/greeting_container'
import UserNavBar from '../components/greeting/user_navbar_container'

import {AuthRoute, ProtectedRoute} from '../util/route_util'
const App = (props) => {
    
    return (
        <div>
            <ProtectedRoute  path="/restaurants" component={UserNavBar} />
            
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} redirect="/restaurants" />
            <AuthRoute exact path="/login" component={LoginFormContainer} redirect="/restaurants"/>

            <footer id="foot">
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