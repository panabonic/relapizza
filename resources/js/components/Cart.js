import React, {Component} from 'react';
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {connect} from 'react-redux';
import {removeFromCart} from "../actions/cartActions";
import {clearOrder, createOrder} from "../actions/orderActions";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            deliveryPrice: 5,
            showCheckout: false
        };
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
            delivery_price: formatCurrency(this.state.deliveryPrice, this.props.currency, true),
            total: formatCurrency(this.props.cartItems.reduce((a,c) => (a + c.price * c.count),
                this.state.deliveryPrice),
                this.props.currency,
                true),
            currency: this.props.currency,
        }
        this.props.createOrder(order);
    }

    closeModal = () => {
        this.props.clearOrder();
    }

    render() {
        const {cartItems, order} = this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                        <div className="cart cart-header">Cart is empty</div>)
                    : (
                        <div className="cart cart-header">
                            You have {cartItems.length} in the cart{" "}
                        </div>
                    )
                }

                {
                    order && (
                        <Modal isOpen={true}
                               onRequestClose={this.closeModal}
                               appElement={document.getElementById('app')}>
                            <Zoom>
                                <button className="close-modal" onClick={this.closeModal}>x</button>
                                <div className="order-details">
                                    <h3 className="success-message">Your order has been placed.</h3>
                                    <h2>Order {order.id}</h2>
                                    <ul>
                                        <li>
                                            <div>Name:</div>
                                            <div>{order.name}</div>
                                        </li>
                                        <li>
                                            <div>Email:</div>
                                            <div>{order.email}</div>
                                        </li>
                                        <li>
                                            <div>Address:</div>
                                            <div>{order.address}</div>
                                        </li>
                                        <li>
                                            <div>Delivery price:</div>
                                            <div>{formatCurrency(order.delivery_price, this.props.currency, false, true)}</div>
                                        </li>
                                        <li>
                                            <div>Total:</div>
                                            <div>{formatCurrency(order.total, this.props.currency, false, true)}</div>
                                        </li>
                                        <li>
                                            <div>Cart items:</div>
                                            <div>{order.cartItems.map(item => (
                                                <div>{item.count} {" x "} {item.title}</div>
                                            ))}</div>
                                        </li>
                                    </ul>
                                </div>
                            </Zoom>
                        </Modal>
                    )
                }

                <div className="cart">
                    <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price, this.props.currency)} x {item.count}{" "}
                                            <button onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !== 0 && (
                    <div className="cart">
                        <div className="delivery-price">
                            Delivery price: {formatCurrency(this.state.deliveryPrice, this.props.currency)}
                        </div>
                        <div className="total">
                            <div>
                                Total:{" "}
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price * c.count, this.state.deliveryPrice), this.props.currency)
                                }
                            </div>
                            <button onClick={() => {
                                this.setState({ showCheckout: true })
                            }} className="button primary">Proceed</button>
                        </div>
                    </div>
                )}
                {(cartItems.length !== 0) && this.state.showCheckout && (
                    <div className="cart">
                        <form onSubmit={this.createOrder}>
                            <Fade right>
                                <ul className="form-container">
                                    <li>
                                        <label>Email</label>
                                        <input type="email" name="email" required onChange={this.handleInput}/>
                                    </li>
                                    <li>
                                        <label>Name</label>
                                        <input type="text" name="name" required onChange={this.handleInput}/>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <input type="text" name="address" required onChange={this.handleInput}/>
                                    </li>
                                    <li>
                                        <button className="button primary" type="submit" onSubmit={this.createOrder}>Checkout</button>
                                    </li>
                                </ul>
                            </Fade>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default connect((state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
    currency: state.products.currency,
}), {
    removeFromCart,
    createOrder,
    clearOrder
})(Cart);
