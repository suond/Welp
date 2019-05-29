import React from 'react'
// import {Link} from 'react-router-dom'

import RestaurantShowHeader from './restaurant_show_header'
import RestaurantShowContent from './restaurant_show_content'
import RestaurantShowHours from './restaurant_show_hours';

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    render(){
        const restaurant = this.props.restaurant;
        if (!restaurant) return null
        const displayH =  <RestaurantShowHeader restaurant={restaurant}/>

        const displayC =  <RestaurantShowContent restaurant={restaurant}/> 

        const displayHours =  <RestaurantShowHours restaurant={restaurant}/> 

        return (
            <div>
                
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