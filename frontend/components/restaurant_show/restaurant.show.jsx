import React from 'react'
// import {Link} from 'react-router-dom'

import RestaurantShowHeader from './restaurant_show_header'
import RestaurantShowContent from './restaurant_show_content'
import RestaurantShowHours from './restaurant_show_hours';

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            opening_time_str: "",
            closing_time_str: ""
        }
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    render(){
        //if !restaurant return null
        const restaurant = this.props.restaurant;
        const displayH = restaurant ? <RestaurantShowHeader restaurant={restaurant}/> : null;

        const displayC = restaurant ? <RestaurantShowContent restaurant={restaurant}/> : null

        const displayHours = restaurant ? <RestaurantShowHours restaurant={restaurant}/> : null

        return (
            <div>
                {/* <UserNavBarContainer /> */}
                <div className="show-content-container">
                    {displayH}
                    {displayC}
                    {displayHours}
                </div>
            </div>
        );
    }
}

export default RestaurantShow;