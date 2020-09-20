import React, {Component} from 'react';
import {Link} from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

class RegisterScreen extends Component {
    render() {
        return (
            <div className="form-center">
                <div className="auth-form">
                    <div className="form-title">Welcome! Please, sign up</div>
                    <RegisterForm />
                    <div className="form-bottom">
                        <Link to="/login">Already have an account? Log in</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterScreen;
