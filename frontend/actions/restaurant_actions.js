import * as APIUtils from '../util/restaurant_api_util'

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS"
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT"

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
    return APIUtils.createRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant))
    )
}
//check for errors later here
export const updateRestaurant = (restaurant, id) => dispatch => {
    return APIUtils.updateRestaurant(restaurant,id )
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
}

export const deleteRestaurant = id => dispatch => {
    return APIUtils.deleteRestaurant(id)
    .then(restaurant => dispatch(removeRestaurant(restaurant)))
}