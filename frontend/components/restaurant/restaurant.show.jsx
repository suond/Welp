import React from 'react'
import {Link} from 'react-router-dom'

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            opening_time_str: "",
            closing_time_str: ""
        }
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    render(){
        //if !restaurant return null
        const restaurant = this.props.restaurant;
        const displayH = restaurant ? (
            <div className="header-restaurant">
                <div>
                    <h1>{restaurant.name}</h1>
                    <div className="star-rating four_five-lg"></div>
                     <Link to="/" className="link-btn show-header">Edit</Link>
                </div>
                <div className="show-restaurant-buttons">

                </div>
            </div>
            ) : null;

        const displayC = restaurant ? (
            <div className="show-restaurant-content">
                <div className="show-restaurant-location-detail">
                    <div className="gMap-show">
                        <p>MAP</p>
                    </div>
                    {restaurant.address}
                    <p>{restaurant.city}, {restaurant.state} {restaurant.zipcode}</p>
                </div>
                <div className="show-photo-collection">
                    PHOTO GALLERY
                </div>
            </div>
        ) : null

        const displayHours = restaurant ? (
            <div className="relative">
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
        ) : null

        return (
            <div>
                {/* <UserNavBarContainer /> */}
                <div className="show-content-container">
                    {displayH}
                    {displayC}
                    {displayHours}
                </div>
            </div>
        );
    }
}

export default RestaurantShow;