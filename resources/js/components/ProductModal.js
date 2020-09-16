import React, {Component} from 'react';
import formatCurrency from "../util";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import {addToCart} from "../actions/cartActions";
import {connect} from "react-redux";

class ProductModal extends Component {
    render() {
        const product = this.props.product;
        return (
            <Modal
                isOpen={true}
                onReqestClose={this.closeModal}
                appElement={document.getElementById('app')}
            >
                <Zoom>
                    <button className="close-modal" onClick={this.props.closeModal}>x</button>
                    <div className="product-details">
                        <img src={product.image} alt={product.title} />
                        <div className="product-details-description">
                            <p>
                                <strong>{product.title}</strong>
                            </p>
                            <p>
                                {product.description}
                            </p>
                            <p>
                                Choose Size:{" "}
                                {['Small', 'Standard', 'Big', 'Huge'].map(x => (
                                    <span key={x}> { " " } <button className="button">{x}</button></span>
                                ))}
                            </p>
                            <div className="product-price">
                                <div>{ formatCurrency(product.price) }</div>
                                <button className="button primary" onClick={() => {
                                    this.props.addToCart(product);
                                    this.props.closeModal();
                                }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </Modal>
        );
    }
}

export default connect((state) => ({
    //products: state.products.filteredItems
}), {
    addToCart
})(ProductModal);
