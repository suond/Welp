import React from 'react'

import RestaurantShowHeader from './restaurant_show_header'
import RestaurantShowContent from './restaurant_show_content'
import RestaurantShowHours from './restaurant_show_hours';
import {Redirect} from 'react-router-dom'

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            restaurantNotFound: false
        }
    }

    componentDidMount(){
        
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
        .then( () => {
        }, () => {
            
            this.setState({ restaurantNotFound: true})
        });
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.restaurantId != prevProps.match.params.restaurantId){
            this.props.fetchRestaurant(this.props.match.params.restaurantId)
            .then( null, () => {
                
                this.setState({ restaurantNotFound: true})
            });
        }
    }

    render(){
        if (this.state.restaurantNotFound){
            
            return(
                <Redirect to="/restaurants" />
            )
        }
        const restaurant = this.props.restaurant;
        if (!restaurant) return null
        const displayH =  <RestaurantShowHeader restaurant={restaurant} 
        deleteRestaurant={this.props.deleteRestaurant}
        currentUserId={this.props.currentUserId}
        />

        const displayC =  <RestaurantShowContent restaurant={restaurant}/> 

        const displayHours =  <RestaurantShowHours restaurant={restaurant}/> 
        
        return (
            <div className="bg-ghostwhite">
                
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