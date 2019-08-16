import React from 'react'
import {Link} from 'react-router-dom'
import StarRating from './star_rating'

class RestaurantIndexItem extends React.Component{

    constructor(props){
        super(props)
    }


    // ratingValue(restaurant){
    //     let rating = restaurant.averageReviewScore
    // }

    render() {
        
        const restaurant = this.props.restaurant;
        // const rating = restaurant.numReviews > 0 ? "four_five-reg star-rating star-reg" : "five-reg star-rating star-reg"
        // console.log(restaurant.averageReviewScore)
        let thumb = null;
        if (restaurant.photoUrl)
            thumb = restaurant.photoUrl[0];
        return (
        
            <div className="card">
                <div className="card-photo">
                    <Link to={`/restaurants/${restaurant.id}`}> 
                        <img src={thumb} alt="no image available"/>
                    </Link>
                </div>
                <div className="card-content">
                    <h3 className="card-content-title">
                        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                    </h3>
                    <div className="star-n-num-review-container">
                    <StarRating averageScore={restaurant.averageReviewScore}  size="reg" />
                        <span>{restaurant.numReviews} reviews</span>
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