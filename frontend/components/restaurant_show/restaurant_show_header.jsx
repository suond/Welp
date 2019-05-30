import React from 'react'
import {Link} from 'react-router-dom'

class RestaurantShowHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
    }

    render(){
        const restaurant = this.props.restaurant;
        return (
            <div className="header-restaurant">
                    <div>
                        <h1>{restaurant.name}</h1>
                        <div className="star-rating four_five-lg"></div>
                         <Link to={`/restaurants/${restaurant.id}/edit`} className="link-btn show-header">Edit</Link>
                    </div>
                    <div className="show-restaurant-buttons">
                        <button> add photo</button>
                    </div>
                </div>
        )
    }
}


export default RestaurantShowHeader