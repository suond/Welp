import {connect} from 'react-redux'
import Splash from './splash'
import {fetchSearchRestaurants} from '../../actions/restaurant_actions'

const mapStateToProps = (state) => {
    return{
        restaurants: state.restaurants.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchRestaurants: (query) => dispatch(fetchSearchRestaurants(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)