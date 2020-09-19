import React, {Component} from 'react';
import {connect} from "react-redux";
import {sortProducts, switchCurrency} from "../actions/productActions";

class Filter extends Component {
    render() {
        return !this.props.products ? (<div></div>) :
            (<div className="filter">
                <div className="filter-result">{this.props.products.length} Products</div>
                <div className="filter-sort">
                    Order{" "}
                    <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.products, e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="switch-currency">
                    Currency{" "}
                    <select value={this.props.currency} onChange={(e) => this.props.switchCurrency(e.target.value)}>
                        <option value="usd">USD</option>
                        <option value="euro">EUR</option>
                        <option value="gbp">GBP</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default connect((state => ({
    currency: state.products.currency,
    sort: state.products.sort,
    products: state.products.items,
})), {
    switchCurrency,
    sortProducts
})(Filter);
