import React from 'react'

const ReviewUserInfo = (props) => {
    const {user} = props 
    const avatar = user.photoUrl|| window.icon_url;
    return (
        <div className="review-user-info">
            <img src={avatar} alt="not found" id="user-avatar-inner"/>
            <div className="span-name-review">
                <span>{`${user.fName} ${user.lName[0]}.`}</span>  
            </div>
        </div>
    )
}

export default ReviewUserInfo;