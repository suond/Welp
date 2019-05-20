import React from 'react'

import {Route } from 'react-router-dom'
import SignUpFormContainer from './session/signup_form_container'    
import LoginFormContainer from './session/login_form_container'    
import GreetingContainer from '../components/greeting/greeting_container'
const App = () => {
    return (
        <div>
            <header>
            <h1>Nav here prob with login and signup</h1>
            <GreetingContainer />

            </header>
            <Route exact path="/signup" component={SignUpFormContainer}/>
            <Route exact path="/login" component={LoginFormContainer}/>
            <p>auth route for login/signup</p>
            <p>restaurant stuff here</p>
        </div>
    )
}

export default App;