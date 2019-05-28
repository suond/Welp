import React from 'react'

const RestaurantShowPhotoAll = (props) => {
    const arrs_photos = props.photos;
    return (
        <div className="show-photo-collage show-photo-div relative">
            <div className="img-div-two">
                <img src={arrs_photos[0]} alt=""/>
                <img src={arrs_photos[0]} alt=""/>
            </div>
            <div className="img-div-two">
                <img src={arrs_photos[0]} alt=""/>
                <img src={arrs_photos[0]} alt=""/>
            </div>
            <span className="span-cover-collage"><i className="fas fa-th-large"></i> All the photos</span> 
        </div>
    )
}

export default RestaurantShowPhotoAll