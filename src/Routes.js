import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage'
import Faqs from './pages/faq';

import LoginBox from "./components/login";
import RegisterBox from "./components/register";
import history from './components/history';
import AboutUs from './components/aboutUs'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LoginBox} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/faqs" component={Faqs} />
                    <Route path="/Register" exact component={RegisterBox} />
                    <Route path="/aboutUs" exact component={AboutUs} />
                </Switch>
            </Router>
        )
    }
}