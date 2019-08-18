import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import StarRating from '../restaurant/star_rating'

class RestaurantShowHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
        this.handleModalClick = this.handleModalClick.bind(this);
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
        
    }

    handleModalClick(){
        const {showModal} = this.state; 
        this.setState({showModal: !showModal})
        
    }

    handleDeleteEvent(e){
        this.props.deleteRestaurant(this.props.restaurant.id)
        .then((restaurant) => this.props.history.push('/restaurants'))
    }

    render(){
        const restaurant = this.props.restaurant;
        let delModal = null;
        
        if (this.props.currentUserId == restaurant.owner_id){
            delModal = (
                <>
                <button onClick={this.handleModalClick} className="delete-initializer">Delete Restaurant</button>
                        {this.state.showModal ? (
                            <div className="delete-modal-container">
                            <div className="modal" onClick={this.handleModalClick} ></div>
                            <div className="delete-modal-prompt">
                                <div>
                                    <span><i className="fas fa-skull-crossbones"></i></span>
                                    <span>This action cannot be undone...</span>
                                    <div className="delete-modal-button-container">
                                        <button onClick={this.handleDeleteEvent}>Delete</button>
                                        <button onClick={this.handleModalClick}> Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : null } 
                    </>  
            );
        }

        return (
            <div className="header-restaurant">
                    <div>
                        <h1>{restaurant.name}</h1>
                        {/* <div className="star-rating five-lg star-lg"></div> */}
                        <StarRating averageScore={restaurant.averageReviewScore}  size="lg" />
                         <Link to={`/restaurants/${restaurant.id}/edit`} className="link-btn show-header">Edit</Link>
                    </div>
                    <div className="show-restaurant-buttons"> 
                        {delModal}
                    </div>
                </div>
        )
    }
}


export default withRouter(RestaurantShowHeader)