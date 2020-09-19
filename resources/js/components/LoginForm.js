import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import {Redirect} from "react-router-dom";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }


    loginUser = (e) => {
        e.preventDefault();
        const credentials = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(credentials);
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="form-fields">
                {this.props.token && <Redirect to="/" />}
                <form onSubmit={this.loginUser}>
                    <div className="error-message">{this.props.error}</div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" required onChange={this.handleInput} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" required onChange={this.handleInput} />
                    </div>
                    <button type="submit" className="button primary">Proceed</button>
                </form>
            </div>
        );
    }
}

export default connect((state) => ({
    token: state.auth.token,
    error: state.auth.errorMessage
}), {
    loginUser
})(RegisterForm);

