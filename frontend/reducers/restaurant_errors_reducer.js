import {RECEIVE_RESTAURANT_ERRORS, RECEIVE_RESTAURANT, CLEAR_ERRORS} from '../actions/restaurant_actions'


const RestaurantErrorReducer = (state = [], action) => {

    switch(action.type){
        case RECEIVE_RESTAURANT_ERRORS:
        const errs = action.errors
            return errs;
        case RECEIVE_RESTAURANT:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default RestaurantErrorReducer;