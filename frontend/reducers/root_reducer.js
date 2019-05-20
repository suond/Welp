import sessionReducer from './session_reducer'
import entitiesReducer from './entities_reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer
})

export default rootReducer