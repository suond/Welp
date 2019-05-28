import {connect} from 'react-redux'
import RestaurantShow from './restaurant.show';
import {fetchRestaurant} from '../../actions/restaurant_actions'


const mapStateToProps = (state, ownProps) => {
    
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow)