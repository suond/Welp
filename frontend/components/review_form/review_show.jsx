import React from 'react'
import {Link} from 'react-router-dom'
import ReviewUserInfo from './review_user_info'
import ReviewShowItem from './review_show_item'
import StarRating from '../restaurant/star_rating'
const ReviewShow = (props) => {
    const {restaurant, currentUser, reviews} = props
    const reviewsArr = reviews ? Object.values(reviews) : null;

    const revAvatar = reviewsArr.map( (review,key) => {
        return(
                <ReviewUserInfo user={review.user} key={key}/>
        )
    })
    const revContent = reviewsArr.map( (review, key) => {
        return(
                <ReviewShowItem review={review} key={key}/>
        )
    })
    
    return (
        <div className="review-container">
            <h2 className="review-header"><strong>Reviews </strong>for {restaurant.name} </h2>
            <div className="start-review-container">
                <ReviewUserInfo user={currentUser} />
                <div className="create-review-container">
                    <Link to={`/restaurants/${restaurant.id}/reviews/new`} className="create-review-link">
                            <span>Start your review of <strong>{restaurant.name}</strong></span>
                    </Link>
                </div>
            </div>
            <div className="review-list-container">
                <div className="review-item-user">
                    {revAvatar}
                </div>
                <div className="review-item-content">
                    {revContent}
                </div>
            </div>
        </div>
    )
}

export default ReviewShow