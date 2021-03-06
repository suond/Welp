import React from 'react'

import {Route, Switch } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

import SignUpFormContainer from './session/signup_form_container'    
import LoginFormContainer from './session/login_form_container'    
// import IndexNavBarContainer from './greeting/index_navbar_container'
import UserNavBar from '../components/greeting/user_navbar_container'

// import IndexContentContainer from './ui/index_content_container'
import SplashContainer from './greeting/splash_container'
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant_show/restaurant_show_container'
import RestaurantCreateFormContainer from './restaurant_form/restaurant_create_form_container'
import RestaurantEditFormContainer from './restaurant_form/restaurant_edit_form_container'
import SearchResult from './search/search_container'
import ReviewCreateForm from './review_form/review_create_form_container'

const App = (props) => {
    
    return (
        <>
        <div className="content">
            <ProtectedRoute  path="/restaurants" component={UserNavBar} />
        <Switch>
            
            <ProtectedRoute exact path="/restaurants/:restaurantId/reviews/new" component={ReviewCreateForm} />
            <ProtectedRoute exact path="/restaurants" component={RestaurantIndexContainer} />
            <ProtectedRoute path="/restaurants/:restaurantId/edit" component={RestaurantEditFormContainer} />
            <ProtectedRoute path="/restaurants/new" component={RestaurantCreateFormContainer} />
            <ProtectedRoute exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
        </Switch>
            <Route exact path="/search/:query" component={SearchResult} />
            {/* <Route exact path="/" component={IndexNavBarContainer} /> */}
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} redirect="/restaurants" />
            <AuthRoute exact path="/login" component={LoginFormContainer} redirect="/restaurants"/>
            
        </div>
            <footer id="foot">
                <div>
                    <h3>About</h3>
                    <ul>
                        <li>About Welp</li>
                    </ul>
                </div>
                <div className="footer-img">

                </div>
                <small className="foot-copyright">Copyright © 2019–2019 Welp Inc. Welp </small>
            </footer>
            </>
    )
}
const Index1 = () => <h3>Random Index content <Link to="/restaurants">restaurants</Link></h3>;
export default App;