import {connect} from 'react-redux'
import RestaurantIndex from './restaurant_index'
import {createRestaurant} from '../../actions/restaurant_actions'

const mapStateToProps = state => {
    
    return {
        restaurant: {
            name: "", 
            address: "",
            city: "",
            state: "",
            zipcode: "",
            website: "" 
        }
    }

}

const mapDispatchToProps = dispatch => {
    return {

        createRestaurant: () => dispatch(createRestaurant())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex)