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
            <div className="show-restaurant-content-container">
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
        return (
            <div>
                {/* <UserNavBarContainer /> */}
                <div className="show-content-container">
                    {displayH}
                    {displayC}
                </div>
            </div>
        );
    }
}

export default RestaurantShow;