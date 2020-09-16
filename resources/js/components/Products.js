import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import {connect} from "react-redux";
import {fetchProducts} from "../actions/productActions";
import Product from "./Product";
import ProductModal from "./ProductModal";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    openModal = (product) => {
        this.setState({ product });
    }
    closeModal = () => {
        this.setState({ product: null });
    }

    render() {
        const {product} = this.state;
        return (
            <div>
                {
                    !this.props.products ? <div>Loading...</div>:
                    (<ul className="products">
                    {this.props.products.map(product => (
                        <Product key={product.id} product={product} openModal={this.openModal} />
                    ))}
                    </ul>)
                }
                {product && (<ProductModal product={product} closeModal={this.closeModal} />)}
            </div>
        );
    }
}

export default connect((state) => ({
    products: state.products.filteredItems
}), {
    fetchProducts,
})(Products);
