import React from 'react'

const RestaurantShowHours = (props) => {
    const restaurant = props.restaurant
    return (
        <div className="flex justify-end">
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