import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from '../actions/session_actions'

const sessionErrorsReducer = (state = [], action) => {

    switch(action.type){
        case RECEIVE_ERRORS:
        const errs = action.errors
            return errs;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;