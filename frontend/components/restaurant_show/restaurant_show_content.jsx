import React from 'react'
import RestaurantShowPhotoItem from './restaurant_show_photo_item';
import RestaurantShowPhotoAll from './restaurant_show_photo_all'
import GoogleMapDisplay from './google_map'


const RestaurantShowContent = (props) => {
    const restaurant = props.restaurant;
    let photoItems = null;
    if (restaurant.photoUrl.length > 3) {
        //render the collage with the 4 images in a block
        photoItems = (
            <>
                <RestaurantShowPhotoItem url={restaurant.photoUrl[0]} />
                <RestaurantShowPhotoItem url={restaurant.photoUrl[1]} />
                <RestaurantShowPhotoAll photos={restaurant.photoUrl} />
            </>
        )
    } else {
         photoItems = restaurant.photoUrl.map((url,idx) => {
        return (
            <RestaurantShowPhotoItem url={url} key={idx}/>
        )
    })
    }
    let websiteLink = null;
    if (restaurant.website){
        if (restaurant.website.substring(0,8) === "https://"){
            websiteLink = <a href={restaurant.website}>{restaurant.website}</a>;    
        } else {
            let webLink = "https://"+ restaurant.website;
            websiteLink = <a href={webLink}>{webLink}</a>
        }
        
    }
    return (
        <div className="show-restaurant-content">
                <div className="show-restaurant-location-detail">
                <GoogleMapDisplay />
                    <div className="show-restaurant-address">
                        <div>
                            <i className="fas fa-map-marker-alt"></i> <span>{restaurant.address}</span>
                        </div>
                        <p>{restaurant.city}, {restaurant.state} {restaurant.zipcode}</p>
                        <div>
                            <i className="fas fa-phone"></i> <span>{restaurant.phone_number}</span>    
                        </div>
                        
                        {websiteLink}

                    </div>
                </div>
                <div className="show-photo-collection">
                    {photoItems}
                </div>
            </div>
    )
}

export default RestaurantShowContent;