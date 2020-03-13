import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import LoginBox from "./login";
import RegisterBox from "./register";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LoginBox} />
                   
                    <Route path="/Register" exact component={RegisterBox} />
                </Switch>
            </Router>
        )
    }
}