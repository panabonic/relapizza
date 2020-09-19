import {AUTH_FAILED, LOGIN_USER, LOGOUT_USER} from "../types";

const authReducer = (state = {
    name: localStorage.getItem('userName'),
    email: localStorage.getItem('userEmail'),
    token: localStorage.getItem('accessToken')
}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {name: action.payload.name, email: action.payload.email, token: action.payload.token};
        case LOGOUT_USER:
            return {name: null, email: null, token: null};
        case AUTH_FAILED:
            return {errorMessage: action.payload};
        default:
            return state;
    }
}

export {authReducer};
