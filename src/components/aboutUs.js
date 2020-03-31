import React, { useState,useEffect } from "react";
import decode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../src/App.css';
import Header from '../components/header';
import history from "./history";
import axios from 'axios';

function AboutUs() {
    const colors = {
        Sea: '#FFFFFF',
       
      }
      const [color, setColor] = useState(colors.Sea)
      useEffect(
        () => {
          document.body.style.background = color
        },
        [color]
      )    
    return(
       
        <>
         <Header />
        <div className="jumbotron text-center">
  <h1>EventBoard</h1> 
  <p>Make Any Occassion Unforgettable!!</p> 
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>Our Mission</h2>
      <p>EventBoard is a global platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives. From music festivals, marathons, conferences, community rallies, and fundraisers, to gaming competitions and air guitar contests. Our mission is to bring the world together through live experiences.</p>
      <button className="btn btn-primary btn-lg text-center">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <span className="logo1"></span>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="logo"></span>
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2>     
      <p>We develop relationships that make a positive difference in our customers lives.</p>
      <p>We uphold the highest standards of integrity in all of our actions.</p>
      <p>We work togethor, across boundaries, to meet the needs of our customers and to help our Company Win.</p>
    </div>
  </div>
</div>

         </>
            );
}

export default AboutUs;