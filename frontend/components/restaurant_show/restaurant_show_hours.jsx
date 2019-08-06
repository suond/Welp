import React from 'react'
import {Link} from 'react-router-dom'
const RestaurantShowHours = (props) => {
    const restaurant = props.restaurant
    const reviews = Object.keys(props.reviews).map( idx => {
        console.log(idx)
        return (
        <div key={idx}>
            <h2>{props.reviews[idx].title}</h2>
            <p>{props.reviews[idx].body}</p>
            <p>{props.reviews[idx].rating}</p>
            <br></br>
        </div>
        )
    })
    return (
        <div className="show-review-hours-container">
            <div>
                <Link to={`/restaurants/${restaurant.id}/reviews/new`}>
                        add review
                </Link>
                
                {reviews}
            </div>
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