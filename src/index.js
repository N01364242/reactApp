import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import './login.scss';

import Routes from './Routes';

ReactDOM.render(
    <Router>
        <div className="root-container">
        <div className="box-container">
           
            <Routes />
        </div>
        </div>
    </Router>,
    document.getElementById('root')
);