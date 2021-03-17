import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todo from './components/Todo';
import Register from './components/register';
import Login from './components/login'
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const App = () => {
    const store = configureStore();
    return (
        <ReduxProvider store={store}>
            <div className="container-fluid">
                <Router>
                    <div className="app">
                        <Switch>
                            <Route path="/todo">
                                <Todo />
                            </Route>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route exact path="/">
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </ReduxProvider>
    )
}

export default App;