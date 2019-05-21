import * as APIUtils from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const login = user => dispatch => {
    APIUtils.login(user).then(cUser => dispatch(receiveCurrentUser(cUser)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
}

export const logout = () => dispatch => {
    APIUtils.logout().then( user => (
            dispatch(logoutCurrentUser())
        ))
}

export const signup = user => dispatch => {
    APIUtils.signup(user).then(cUser => dispatch(receiveCurrentUser(cUser)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
}