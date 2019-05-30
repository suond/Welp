import React from 'react'

import {connect} from 'react-redux'
import {updateRestaurant, fetchRestaurant, clearErrors} from '../../actions/restaurant_actions'
import RestaurantForm from './restaurant_form'

class RestaurantEditForm extends React.Component {

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.restaurantId !== this.props.match.params.restaurantId){
            this.props.fetchRestaurant(this.props.match.params.restaurantId)
        }
    }

    render() {
        const { restaurant, formtype, processData, errors } = this.props;
        if (!restaurant) return null;
        return (
            <RestaurantForm formtype={formtype} processData={processData} restaurant={restaurant} errors={errors} clearErrors={this.props.clearErrors}/>
        ) 
    }
} 


const mapStateToProps = (state, ownProps) => {
    const rest = state.entities.restaurants[ownProps.match.params.restaurantId];
    
    if (rest) {
        rest["opening_time"] = rest.opening_time_str
        rest["closing_time"] = rest.closing_time_str
    }
    return {
        restaurant: rest,
        formtype: "edit",
        errors: state.errors.restaurant
    }

}

const mapDispatchToProps = dispatch => {
    return {
        processData: (restaurant,id) => dispatch(updateRestaurant(restaurant,id)),
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantEditForm)