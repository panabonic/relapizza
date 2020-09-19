import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchOrders } from "../actions/orderActions";
import formatCurrency from "../util";

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    render() {console.log(this.props.token);
        const { orders } = this.props;
        return !orders ? (
            <div>
                {!this.props.token && <Redirect to="/" />}
                <div>You does not have orders yet.</div>
            </div>
        ) : (
            <div className="orders">
                {!this.props.token && <Redirect to="/" />}
                <h2>Orders</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>
                        <th>ITEMS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.created_at}</td>
                            <td> {formatCurrency(order.total, order.currency, false, true)}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>
                                {order.cart_items.map((item) => (
                                    <div>
                                        {item.count} {" x "} {item.title}
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default connect((state) => ({
    orders: state.order.orders,
    token: state.auth.token
}), {
    fetchOrders,
}
)(Orders);
