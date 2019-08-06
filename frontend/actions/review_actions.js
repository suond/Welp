import * as APIUtils from '../util/review_api_util'

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"


const receiveAllReviews = reviews => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}
const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const removeReview = review => {
    return {
        type: REMOVE_REVIEW,
        restId: review.id
    }
}

const receiveReviewErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


export const fetchReviews = () => dispatch => {
    return APIUtils.fetchReviews()
    .then(reviews => dispatch(receiveAllReviews(reviews)))
}
export const fetchReview = (id) => dispatch => {
    return APIUtils.fetchReview(id)
    .then(review => dispatch(receiveReview(review)))
}
//check for errors later here
export const createReview = review => dispatch => {
    return APIUtils.createReview(review).then(review => dispatch(receiveReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON))
    )
}
//check for errors later here
export const updateReview = (review, id) => dispatch => {
    return APIUtils.updateReview(review,id )
    .then(review => dispatch(receiveReview(review)),
     err => dispatch(receiveReviewErrors(err.responseJSON))
    )
}

export const fetchSearchReviews = (query) => dispatch => {
    return APIUtils.searchReview(query)
    .then(reviews => {
        
        return dispatch(receiveSearchReviews(reviews))
    
    })
}

export const deleteReview = id => dispatch => {
    return APIUtils.deleteReview(id)
    .then(review => dispatch(removeReview(review)))
}