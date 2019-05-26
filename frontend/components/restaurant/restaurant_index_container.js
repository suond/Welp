import {connect} from 'react-redux'
import RestaurantIndex from './restaurant_index'
import {fetchRestaurants} from '../../actions/restaurant_actions'

const mapStateToProps = state => {
    
    return {
        restaurants: Object.values(state.entities.restaurants),
        h3text: "Some Restaurants on Welp"
    }

}

const mapDispatchToProps = dispatch => {
    return {

        fetchRestaurants: () => dispatch(fetchRestaurants())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex)