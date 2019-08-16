import React from 'react'
import {Link} from 'react-router-dom'
const SearchResultItem = (props) => {
        let phoneNumber = props.restaurant.phone_number;
        
        return (
            <li >
                <div className="search-res-item-container">
                    <div>
                        <img src={props.restaurant.photoUrl[0] } alt="nothing" className="search-res-icon"/>
                    </div>
                    <div className="search-result-after-img">
                        <div className="upper-search-result">
                            <div className="search-res-left">
                                <div>
                                    <span>{props.num + 1}. </span>
                                    <Link to={`/restaurants/${props.restaurant.id}`} className="search-link-span">
                                        <span>{props.restaurant.name}</span>
                                    </Link>    
                                    <div className="four_five-reg star-rating star-reg"></div>
                                    
                                </div>
                            </div>
                            <div className="search-res-right">
                                <p><i className="fas fa-phone"></i> {phoneNumber}</p>
                                <p><span>{props.restaurant.address}</span></p>
                            </div>
                            
                        </div>
                        {/* <div>
                            brief description
                        </div> */}
                    </div>
                </div>
            </li>
       )
    
}

export default SearchResultItem