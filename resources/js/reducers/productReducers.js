import {FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE, SWITCH_CURRENCY} from "../types";

export const productsReducer = (
    state = {currency: localStorage.getItem('currency')},
    action) => {
    switch (action.type) {
        case SWITCH_CURRENCY:
            return {
                ...state,
                currency: action.payload.currency,
            }
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                items: action.payload.items,
            }
        case FETCH_PRODUCTS:
            return {...state, items: action.payload};
        default:
            return state;
    }
}
