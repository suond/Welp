import * as APIUtils from '../util/restaurant_api_util'

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS"
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT"
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"


const receiveAllRestaurants = restaurants => {
    return {
        type: RECEIVE_ALL_RESTAURANTS,
        restaurants
    }
}
const receiveRestaurant = restaurant => {
    return {
        type: RECEIVE_RESTAURANT,
        restaurant
    }
}

const removeRestaurant = restaurant => {
    return {
        type: REMOVE_RESTAURANT,
        restId: restaurant.id
    }
}

const receiveRestaurantErrors = (errors) => {
    return {
        type: RECEIVE_RESTAURANT_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


export const fetchRestaurants = () => dispatch => {
    return APIUtils.fetchRestaurants()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)))
}
export const fetchRestaurant = (id) => dispatch => {
    return APIUtils.fetchRestaurant(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
}
//check for errors later here
export const createRestaurant = restaurant => dispatch => {
    return APIUtils.createRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant)),
    err => dispatch(receiveRestaurantErrors(err.responseJSON))
    )
}
//check for errors later here
export const updateRestaurant = (restaurant, id) => dispatch => {
    return APIUtils.updateRestaurant(restaurant,id )
    .then(restaurant => dispatch(receiveRestaurant(restaurant)),
     err => dispatch(receiveRestaurantErrors(err.responseJSON))
    )
}

export const deleteRestaurant = id => dispatch => {
    return APIUtils.deleteRestaurant(id)
    .then(restaurant => dispatch(removeRestaurant(restaurant)))
}