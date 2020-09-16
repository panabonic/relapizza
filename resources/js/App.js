import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import {Provider} from "react-redux";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        }
    }

    createOrder = (order) => {
        alert("Need to save " + order.name)
    }

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        const filtered = cartItems.filter(x => x.id !== product.id);
        this.setState({
            cartItems: filtered
        });
        localStorage.setItem("cartItems", JSON.stringify(filtered));
    }

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item => {
            if (item.id === product.id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cartItems.push({...product, count: 1});
        }
        this.setState({cartItems});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }


    render() {
        return (
            <Provider store={store}>
                <div className="grid-container">
                    <header>
                        <a href="/">RelaPizza</a>
                    </header>
                    <main>
                        <div className="content">
                            <div className="main">
                                <Filter />
                                <Products addToCart={this.addToCart} />
                            </div>
                            <div className="sidebar">
                                <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
                            </div>
                        </div>
                    </main>
                    <footer>Footer contents here</footer>
                </div>
            </Provider>
        );
    }
}

export default App;
