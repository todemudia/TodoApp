import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todo from './components/Todo';
import Register from './components/register';
import Login from './components/login'
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { loadUser } from "./redux/actions/authActions";

const App = () => {
    const store = configureStore();

    useEffect(() => {
        store.dispatch(loadUser());
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

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