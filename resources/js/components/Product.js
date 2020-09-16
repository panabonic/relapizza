import React, {Component} from 'react';
import formatCurrency from "../util";
import {connect} from "react-redux";
import {addToCart} from "../actions/cartActions";
import Fade from "react-reveal/Fade";

class Product extends Component {
    render() {
        const product = this.props.product;
        return (
            <Fade>
                <li>
                    <div className="product">
                        <a href={"#" + product.id} onClick={() => this.props.openModal(product)}>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                        </a>
                        <div className="product-price">
                            <div>{formatCurrency(product.price)}</div>
                            <button onClick={() => this.props.addToCart(product)} className="button primary">Add to cart</button>
                        </div>
                    </div>
                </li>
            </Fade>
        );
    }
}

export default connect((state) => ({
    //products: state.products.filteredItems
}), {
    addToCart
})(Product);
