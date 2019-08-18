import React from 'react'
import StarRating from '../restaurant/star_rating'
const ReviewShowItem = (props) => {
    const {review} = props
    return(
        <div className="review-list-item-content">
            <div className="review-list-item-score-date">
                <StarRating averageScore={review.rating} size="reg" />
                <span>created_at: {review.created_at_f}</span>
            </div>
            <div>
                <p>{review.body}</p>
            </div>
        </div>
    )
}


export default ReviewShowItem