import {connect} from 'react-redux'
import SearchResult from './search_result'
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)