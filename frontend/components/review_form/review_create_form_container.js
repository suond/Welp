import {connect} from 'react-redux'
import {createReview, clearErrors} from '../../actions/review_actions'
import {fetchRestaurant} from '../../actions/restaurant_actions'
import ReviewForm from './review_create_form'
const mapStateToProps = state => {
    
    return {
        review: {
            title: "",
            body: "",
            restaurant_id: "",
            rating: "",
            owner_id: state.session.currentUserId, 
            
        },
        
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