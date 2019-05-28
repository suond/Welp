import React from 'react'
import RestaurantShowPhotoItem from './restaurant_show_photo_item';

//import photoCompnent


const RestaurantShowContent = (props) => {
    const restaurant = props.restaurant;

    const photoItems = restaurant.photoUrl.map((url,idx) => {
        return (
            <RestaurantShowPhotoItem url={url} key={idx}/>
        )
    })

    return (
        <div className="show-restaurant-content">
                <div className="show-restaurant-location-detail">
                    <div className="gMap-show">
                        <p>MAP</p>
                    </div>
                    {restaurant.address}
                    <p>{restaurant.city}, {restaurant.state} {restaurant.zipcode}</p>
                </div>
                <div className="show-photo-collection">
                    {photoItems}
                </div>
            </div>
    )
}

export default RestaurantShowContent;