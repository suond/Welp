import React from 'react'

const RestaurantShowPhotoItem = ({url}) => {
    return (
        <div className="show-photo-div">
            <img src={url} alt="" className="img-show"/>
            <div className="show-photo-caption"><span className="show-caption">photo caption</span></div>
        </div>
    )
}

export default RestaurantShowPhotoItem