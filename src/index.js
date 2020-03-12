import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import RegisterBox from './register';
import './login.scss';

class LoginBox extends React.Component {

    
    render() {
      return (
        <Router>
        <div className="root-container">
        <div className="box-container">
            
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
            >Login</button>
          </div>
          <p>Haven't yet registered?? <NavLink to={'/register'} className="nav-link" > Register </NavLink></p>
        </div>
     
        
         
        
        </div>

        </div>
        </Router>
      );
    }
  
  }

reactDOM.render(
  <LoginBox/>, document.getElementById("root"));