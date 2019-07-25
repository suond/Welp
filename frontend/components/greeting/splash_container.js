import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions'

// import IndexNavBar from '../ui/index_navbar';
import Splash from '../ui/splash'
import {fetchSearchRestaurants} from '../../actions/restaurant_actions'
const mapStateToProps = (state, ownProps) => {
    const cUser = state.entities.users[state.session.currentUserId]
    const rests = state.entities.restaurants.items
    return {
        currentUser : cUser,
        restaurants: rests
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchSearchRestaurants: (query) => dispatch(fetchSearchRestaurants(query))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Splash)