import React, {Component} from 'react';
import {connect} from "react-redux";
import {registerUser} from "../actions/authActions";
import {Redirect} from "react-router-dom";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        };
    }


    registerUser = (e) => {
        e.preventDefault();
        const credentials = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.passwordConfirmation,
        }
        this.props.registerUser(credentials);
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="form-fields">
                {this.props.token && <Redirect to="/" />}
                <form onSubmit={this.registerUser}>
                    <div className="error-message">{this.props.error}</div>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" required onChange={this.handleInput} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" required onChange={this.handleInput} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" required minLength="6" onChange={this.handleInput} />
                    </div>
                    <div className="field">
                        <label>Password confirmation</label>
                        <input type="password" name="passwordConfirmation" minLength="6" required onChange={this.handleInput} />
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
    registerUser
})(RegisterForm);

