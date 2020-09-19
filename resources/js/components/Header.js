import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {logoutUser} from "../actions/authActions";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return (
            <header>
                <Link className="logo" to="/">RelaPizza</Link>
                {this.props.token ? (
                    <div>
                        <span>{this.props.email}</span>
                        <Link to="/orders">My orders</Link>
                        <a href="#" onClick={this.props.logoutUser}>Exit</a>
                    </div>) :
                    (
                        <Link to="/login">Log in / Sign up</Link>
                    )
                }

            </header>
        );
    }
}

export default connect((state) => ({
    name: state.auth.name,
    email: state.auth.email,
    token: state.auth.token
}), {
    logoutUser
})(Header);
