import React from 'react'
import {Link} from 'react-router-dom'
const ReviewShow = (props) => {
    const restaurant = props.restaurant
    return (
        <div className="review-container">
            <div className="start-review-container">
                <div className="review-user-info">
                    <img src={window.icon_url} alt="not found" id="user-avatar-inner"/>
                    <div className="span-name-review">
                       <span>{`${props.currentUser.fName} ${props.currentUser.lName[0]}.`}</span>  
                    </div>
                </div>
                <div className="create-review-container">
                    <Link to={`/restaurants/${restaurant.id}/reviews/new`} className="create-review-link">
                            <span>Start your review of <strong>{restaurant.name}</strong></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ReviewShow