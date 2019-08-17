import React from 'react'
import {Link} from 'react-router-dom'
import ReviewUserInfo from './review_user_info'
import ReviewShowItem from './review_show_item'
import StarRating from '../restaurant/star_rating'
const ReviewShow = (props) => {
    const {restaurant, currentUser, reviews} = props
    // console.log(currentUser)
    // console.log(reviews)
    
    const reviewsList = reviews ? Object.keys(props.reviews).map( idx => {
        // console.log(props.reviews[idx].rating)
        return (
        <div key={idx}>
            <ReviewUserInfo user={props.reviews[idx].user}/>
            <p>{props.reviews[idx].body}</p>
            {/* <p>{props.reviews[idx].rating}</p> */}
            <StarRating averageScore={props.reviews[idx].rating} size="reg" />
            <p>By: {props.reviews[idx].user.fName} {props.reviews[idx].user.lName}</p>
            <p>zipcode: {props.reviews[idx].user.zipcode}</p>
            <ReviewShowItem reviewer={props.reviews[idx].user} review={props.reviews[idx]}/>
            <br></br>
        </div>
        )
    }) : null;
    return (
        <div className="review-container">
            <div className="start-review-container">
                <ReviewUserInfo user={currentUser} />
                <div className="create-review-container">
                    <Link to={`/restaurants/${restaurant.id}/reviews/new`} className="create-review-link">
                            <span>Start your review of <strong>{restaurant.name}</strong></span>
                    </Link>
                </div>
            </div>
            <div className="review-list-container">
                
                {reviewsList}
            </div>
        </div>
    )
}

export default ReviewShow