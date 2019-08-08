import {connect} from 'react-redux'
import {createReview, clearErrors} from '../../actions/review_actions'
import {fetchRestaurant} from '../../actions/restaurant_actions'
import ReviewForm from './review_create_form'
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    
    return {
        review: {
            
            body: "",
            restaurant_id: "",
            rating: 3,
            user_id: state.session.currentUserId, 
            
        },
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        errors: state.errors.review
    }

}

const mapDispatchToProps = dispatch => {
    return {
        processData: (review) => dispatch(createReview(review)),
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)