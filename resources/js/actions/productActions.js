import {FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE, SWITCH_CURRENCY} from "../types";

export const fetchProducts = () => async(dispatch) => {
    const res = await fetch('/api/products');
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    });
}

export const switchCurrency = (currency) => (dispatch) => {
    dispatch({
        type: SWITCH_CURRENCY,
        payload: {
            currency: currency,
        }
    });
    localStorage.setItem('currency', currency);
}

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "latest") {
        sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === "lowest" ? a.price > b.price ? 1 : -1
                : a.price > b.price ? -1 : 1
        );
    }

    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    });
}
