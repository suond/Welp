import React from 'react'
import RestaurantIndexItem from './restaurant_index_item'

class RestaurantIndex extends React.Component {
    
    constructor(props){
        super(props);
        
    }

    createRestaurants(){
        
        return this.props.restaurants.map(rest => {
            return (
                <RestaurantIndexItem key={rest.id} restaurant={rest} />
            )
        })
    }

    componentDidMount(){
        this.props.fetchRestaurants();
    }
    
    render(){
        let h3Dis = null;
        if (this.props.page === "restaurant_index"){
            h3Dis = "Some restaurants on Welp"
        } else if (this.props.page === "index" && !this.props.currentUser){
            h3Dis = "Login to check out the restaurants "
        }


        return (
            <div className="restaurant-index-container">
                <h3 className="restaurant-index-h3">{h3Dis} </h3>
                <div className="restaurant-card-container">
                    {this.createRestaurants()}  
                </div>
        </div>
        )
    }
}


export default RestaurantIndex