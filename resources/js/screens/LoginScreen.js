import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoginForm from "../components/LoginForm";

class LoginScreen extends Component {
    render() {
        return (
            <div className="form-center">
                <div className="auth-form">
                    <div className="form-title">Welocme! Please, Log in</div>
                    <LoginForm />
                    <div className="form-bottom">
                        <Link to="/register">Don't have an account yet? Sign up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;
