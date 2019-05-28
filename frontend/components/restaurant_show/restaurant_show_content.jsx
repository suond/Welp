import React from 'react'
import RestaurantShowPhotoItem from './restaurant_show_photo_item';

//import photoCompnent


const RestaurantShowContent = (props) => {
    const restaurant = props.restaurant;

    // const photoItems = restaurant.photoUrl.map((url,idx) => {
    //     return (
    //         <RestaurantShowPhotoItem url={url} key={idx}/>
    //     )
    // })
    if (restaurant.photoUrl.length > 3) {
        //render the collage with the 4 images in a block
    } else {
        //just render a showphotoitem
    }

    return (
        <div className="show-restaurant-content">
                <div className="show-restaurant-location-detail">
                    <div className="gMap-show">
                        <p>MAP</p>
                    </div>
                    <div className="show-restaurant-address">
                        <i className="fas fa-map-marker-alt"></i>  {restaurant.address}
                        <p>{restaurant.city}, {restaurant.state} {restaurant.zipcode}</p>

                    </div>
                </div>
                <div className="show-photo-collection">
                    <RestaurantShowPhotoItem url={props.restaurant.photoUrl[0]}/>
                    <RestaurantShowPhotoItem url={props.restaurant.photoUrl[0]}/>
                    
                </div>
            </div>
    )
}

export default RestaurantShowContent;