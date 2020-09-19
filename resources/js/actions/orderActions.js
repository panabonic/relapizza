import {CLEAR_CART, CLEAR_ORDER, CREATE_ORDER, FETCH_ORDERS} from "../types";

export const createOrder = (order) => (dispatch) => {
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };
    if (localStorage.getItem('accessToken')) {
        headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
    }
    fetch('/api/orders', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(order)
    }).then(res => res.json()).then((data) => {
           dispatch({type: CREATE_ORDER, payload: data});
           localStorage.setItem("cartItems", "[]");
           dispatch({
               type: CLEAR_CART
           });
        });
}

export const clearOrder = () => (dispatch) => {
    dispatch({type: CLEAR_ORDER});
}

export const fetchOrders = () => (dispatch) => {
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    if (localStorage.getItem('accessToken')) {
        headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
    }
    fetch("/api/orders", {
        method: "GET",
        headers: headers
    }).then((res) => res.json())
        .then((data) => {
            if (Array.isArray(data)) {
                dispatch({type: FETCH_ORDERS, payload: data});
            }
        });
};
