import {connect} from 'react-redux'
import {createRestaurant, clearErrors} from '../../actions/restaurant_actions'
import RestaurantForm from './restaurant_form'
const mapStateToProps = state => {
    
    return {
        restaurant: {
            name: "",
            owner_id: state.session.currentUserId, 
            address: "",
            city: "",
            state: "AL",
            zipcode: "",
            website: "",
            phone_number: "",
            opening_time: "7:00 am",
            closing_time: "7:00 pm",
            photos: [] 
        },
        formtype: "Create",
        errors: state.errors.restaurant
    }

}

const mapDispatchToProps = dispatch => {
    return {
        processData: (restaurant) => dispatch(createRestaurant(restaurant)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm)