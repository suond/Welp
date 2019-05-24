import {RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT, REMOVE_RESTAURANT} from '../actions/restaurant_actions'

const restaurantsReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_ALL_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:
            return Object.assign({},state, {[action.restaurant.id]: action.restaurant});
        case REMOVE_RESTAURANT:
            let newState = Object.assign({}, state)
            delete newState[action.restId]
            return newState;
        default:
            return state;
    }
}

export default restaurantsReducer;