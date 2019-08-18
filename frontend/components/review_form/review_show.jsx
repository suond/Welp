import React from 'react'
import {Link} from 'react-router-dom'
import ReviewUserInfo from './review_user_info'
import ReviewShowItem from './review_show_item'
const ReviewShow = (props) => {
    const {restaurant, currentUser, reviews} = props
    const reviewsArr = reviews ? Object.values(reviews) : null;

    const reviewListItems = !reviewsArr ? null : reviewsArr.map( (review,idx) => {
        return (
            <div className="review-item" key={idx}>
                <ReviewUserInfo user={review.user} />
                <ReviewShowItem review={review} />
            </div>
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
                {reviewListItems}
            </div>
        </div>
    )
}

export default ReviewShow