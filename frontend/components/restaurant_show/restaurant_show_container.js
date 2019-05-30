import {connect} from 'react-redux'
import RestaurantShow from './restaurant.show';
import {fetchRestaurant, deleteRestaurant} from '../../actions/restaurant_actions'


const mapStateToProps = (state, ownProps) => {
    
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
        deleteRestaurant: (id) => dispatch(deleteRestaurant(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow)