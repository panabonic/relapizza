import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import OrdersScreen from "./screens/OrdersScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="grid-container">
                        <Header />
                        <main>
                            <Route path="/orders" component={OrdersScreen} />
                            <Route path="/login" component={LoginScreen} />
                            <Route path="/register" component={RegisterScreen} />
                            <Route path="/" component={HomeScreen} exact />
                        </main>
                        <footer>Test task for Innoscripta.</footer>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
