import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LoginScreen extends Component {
    render() {
        return (
            <div className="form-center">
                <div className="auth-form">
                    <div className="form-title">Login</div>
                    <div className="form-fields">
                        <div className="field">
                            <label>Email</label>
                            <input type="text" name="email" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" />
                        </div>
                        <button type="submit" className="button primary">Proceed</button>
                    </div>
                    <div className="form-bottom">
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;
