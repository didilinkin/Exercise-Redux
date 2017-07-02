import { combineReducers } from 'redux'
import {
    LOGIN_IN,
    LOGIN_OUT
} from '../constants/ActionTypes'

const auth = (state = false, action) => {
    switch (action.type) {
        case LOGIN_IN:
            return true
        case LOGIN_OUT:
            return false
        default:
            return false
    }
}

export default combineReducers({ auth })

export const getAuth = (state) =>
    state.auth