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
        return (
            <div className="restaurant-index-container">
            
            <ul>
                {this.createRestaurants()}
            </ul>
            
        </div>
        )
    }
}


export default RestaurantIndex