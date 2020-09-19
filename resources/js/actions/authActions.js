import {AUTH_FAILED, LOGIN_USER, LOGOUT_USER} from "../types";

export const registerUser = (credentials) => (dispatch) => {
    fetch('/api/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(res => res.json()).then((data) => {
        if (data.token) {
            dispatch({type: LOGIN_USER, payload: data});
            save(data);
        } else {
            dispatch({type: AUTH_FAILED, payload: data.message});
        }
    });
}

export const loginUser = (credentials) => (dispatch) => {
    fetch('/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(res => res.json()).then((data) => {
        if (data.token) {
            dispatch({type: LOGIN_USER, payload: data});
            save(data)
        } else {
            dispatch({type: AUTH_FAILED, payload: data.message});
        }
    });
}

export const logoutUser = () => (dispatch) => {
    dispatch({type: LOGOUT_USER, payload: {}});
    save({name: null, email: null, token: null});
}

function save(data) {
    data.name ? localStorage.setItem('userName', data.name) : localStorage.removeItem('userName');
    data.email ? localStorage.setItem('userEmail', data.email) : localStorage.removeItem('userEmail');
    data.token ? localStorage.setItem('accessToken', data.token) : localStorage.removeItem('accessToken');
}


