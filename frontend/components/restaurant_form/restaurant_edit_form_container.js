import React from 'react'

import {connect} from 'react-redux'
import {updateRestaurant, fetchRestaurant} from '../../actions/restaurant_actions'
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
        const { restaurant, formtype, processData } = this.props;
        if (!restaurant) return null;
        return (
            <RestaurantForm formtype={formtype} processData={processData} restaurant={restaurant} />
        ) 
    }
} 


const mapStateToProps = (state, ownProps) => {
    
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        formtype: "edit"
    }

}

const mapDispatchToProps = dispatch => {
    return {
        processData: (restaurant,id) => dispatch(updateRestaurant(restaurant,id)),
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantEditForm)