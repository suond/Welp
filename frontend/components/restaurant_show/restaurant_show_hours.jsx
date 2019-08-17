import React from 'react'
import {Link} from 'react-router-dom'

import ReviewShow from '../review_form/review_show'
const RestaurantShowHours = (props) => {
    // const restaurant = props.restaurant
    // const currentUser = props.currentUser
    const {restaurant, currentUser} = props
    console.log(currentUser)
    const reviews = props.reviews ? Object.keys(props.reviews).map( idx => {
        console.log(idx)
        return (
        <div key={idx}>
            <p>{props.reviews[idx].body}</p>
            <p>{props.reviews[idx].rating}</p>
            <p>By: {props.reviews[idx].user.fName} {props.reviews[idx].user.lName}</p>
            <p>zipcode: {props.reviews[idx].user.zipcode}</p>
            <br></br>
        </div>
        )
    }) : null;
    return (
        <div className="show-review-hours-container">
            
                <ReviewShow restaurant={restaurant} reviews={props.reviews} currentUser={currentUser}/>
                
                
                {/* {reviews} */}
            
        <div className="hour-container">
            <h2 className="hour-h2">Hours</h2>
             <table>
                 <tbody>
                    <tr>
                        <th>Mon</th>
                        <td>{restaurant.opening_time_str} - {restaurant.closing_time_str}</td>
                    </tr>

                    <tr>
                        <th>Tue</th>
                        <td>{restaurant.opening_time_str} - {restaurant.closing_time_str}</td>
                    </tr>
                    <tr>
                        <th>Wed</th>
                        <td>{restaurant.opening_time_str} - {restaurant.closing_time_str}</td>
                    </tr>
                    <tr>
                        <th>Thur</th>
                        <td>{restaurant.opening_time_str} - {restaurant.closing_time_str}</td>
                    </tr>
                    <tr>
                        <th>Fri</th>
                        <td>{restaurant.opening_time_str} - {restaurant.closing_time_str}</td>
                    </tr>
                    <tr>
                        <th>Sat</th>
                        <td>{restaurant.opening_time_str} - {restaurant.closing_time_str}</td>
                    </tr>
                    <tr>
                        <th>Sun</th>
                        <td>{restaurant.opening_time_str} - {restaurant.closing_time_str}</td>
                    </tr>
                     
                 </tbody>
             </table>
        </div>
    </div>
    )
}

export default RestaurantShowHours;