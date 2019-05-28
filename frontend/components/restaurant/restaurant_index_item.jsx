import React from 'react'
import {Link} from 'react-router-dom'
class RestaurantIndexItem extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        
        const restaurant = this.props.restaurant;
        const rating = "m".length === 1 ? "four_five-reg star-rating" : "five-rg star-rating"
        let thumb = null;
        if (restaurant.photoUrl)
            thumb = restaurant.photoUrl[0];
        return (
        
            <div className="card">
                <div className="card-photo">
                    <Link to={`/restaurants/${restaurant.id}`}> 
                        <img src={thumb} alt="image placeholder"/>
                    </Link>
                </div>
                <div className="card-content">
                    <h3 className="card-content-title">
                        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                    </h3>
                    <div className="star-n-num-review-container">
                    <div className={rating}></div>
                        <span># reviews</span>
                    </div>
                    <div className="location">
                        <h3>{restaurant.city}, {restaurant.state}</h3>
                    </div>
                </div>
            </div>
        
        )
    }

}

export default RestaurantIndexItem;