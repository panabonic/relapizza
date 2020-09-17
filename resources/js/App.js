import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import OrdersScreen from "./screens/OrdersScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="grid-container">
                        <header>
                            <Link className="logo" to="/">RelaPizza</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/orders">My orders</Link>
                        </header>
                        <main>
                            <Route path="/orders" component={OrdersScreen} />
                            <Route path="/login" component={LoginScreen} />
                            <Route path="/register" component={RegisterScreen} />
                            <Route path="/" component={HomeScreen} exact />
                        </main>
                        <footer>All right is reserved.</footer>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
