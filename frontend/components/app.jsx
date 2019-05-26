import React from 'react'

import {Route } from 'react-router-dom'
import SignUpFormContainer from './session/signup_form_container'    
import LoginFormContainer from './session/login_form_container'    
import IndexNavBarContainer from './greeting/index_navbar_container'
import UserNavBar from '../components/greeting/user_navbar_container'
import {Link} from 'react-router-dom'

import {AuthRoute, ProtectedRoute} from '../util/route_util'
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container'

const App = (props) => {
    
    return (
        <div>

            <ProtectedRoute  path="/restaurants" component={UserNavBar} />
            <ProtectedRoute exact path="/restaurants" component={RestaurantIndexContainer} />
            <ProtectedRoute path="/restaurants/:restaurantId" component={RestaurantShowContainer} />

            <Route exact path="/" component={IndexNavBarContainer} />
            <Route exact path="/" component={Index1} />
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
const Index1 = () => <h3>Random Index content <Link to="/restaurants">restaurants</Link></h3>;
export default App;