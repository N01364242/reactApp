import React, { Component } from "react";
import Img from "../../images/event-manage.jpg";
import Img1 from "../../images/img1.png";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";
import Img4 from "../../images/img4.jpg";
import Img5 from "../../images/img5.jpg";
import Img6 from "../../images/img6.jpg";
import Img7 from "../../images/img7.jpg";
import Img8 from "../../images/img8.jpg";
import Img9 from "../../images/img9.jpg";
import Img10 from "../../images/img10.jpg";
import Img11 from "../../images/img11.jpg";
import Img12 from "../../images/img12.jpg";
import Col from "react-bootstrap/Col";
import { Image, Row } from "react-bootstrap";
import '../../App.css';
function UserDashBoard() {
    return(
        <>
        
        <hr />
        <Image src={Img} width='100%' />
        <div className='text-center'>
        <Row>    
  <Col xs={12} md={3}>
            <a href=''>
                  <Image src={Img1} rounded width='304px' height='236px' />
                    <span>November 27, 2019 </span>
                    <b>In Flames </b>
                    <i>Toronto </i>
            </a>
</Col>

<Col xs={12} md={3}>
            <a href=''>
                    <img src={Img2} rounded width='304px' height='236px' />
                    <span>November 02, 2019 </span>
                    <b>Toronto Vegan Christmas Market </b>
                    <i>8 Adelaide St E, Toronto </i>
                </a>
                </Col>

                <Col xs={12} md={3}>
                <a href=''>
                    <img src={Img3} rounded width='304px' height='236px' />
                    <span>November 15, 2019 </span>
                    <b>Cannibal Corpse </b>
                    <i>The Opera House </i>
                </a>
                </Col>

                <Col xs={12} md={3}>
                <a href=''>
                    <img src={Img4} rounded width='304px' height='236px' />
                    <span>October 30, 2019 </span>
                    <b>Intel Experience Day </b>
                    <i>The Westin Harbour Castle </i>
                </a>
                    </Col>

        <Col xs={12} md={3}>
           <a href=''>
               <img src={Img5} rounded width='304px' height='236px' />
               <span>November 08, 2019 </span>
               <b>4th Annual CGLCC Black & White Goa </b>
               <i>The Carlu, Toronto </i>
           </a>
        </Col>

        <Col xs={12} md={3}>
        <a href=''>
                    <img src={Img6} rounded width='304px' height='236px' />
                    <span>November 05, 2019 </span>
                    <b>Tech Talent Toronto </b>
                    <i>Steam Whistle Brewing,London ON </i>
                </a>
        </Col>

        <Col xs={12} md={3}>
        <a href=''>
                    <img src={Img7} rounded width='304px' height='236px' />
                    <span>January 25, 2020 </span>
                    <b>Trade Show Event </b>
                    <i>Hilton Toronto </i>
                </a>
        </Col>

        <Col xs={12} md={3}>
        <a href=''>
                    <img src={Img8} rounded width='304px' height='236px' />
                    <span>December 08, 2019 </span>
                    <b>Women In Innovation Conference </b>
                    <i>George Center Computer, Toronto </i>
                </a>
        </Col>

        <Col xs={12} md={3}>
        <a href=''>
                    <img src={Img9} rounded width='304px' height='236px' />
                    <span>December 19, 2019 </span>
                    <b>The Nutcracker 2019 </b>
                    <i>Centennial Hall,London </i>
                    </a>
        </Col>

        <Col xs={12} md={3}>
        <a href=''>
        <img src={Img10} rounded width='304px' height='236px' />
                    <span>October 31, 2019 </span>
                    <b>TORONTO HALLOWEEN FEST 2019 </b>
                    <i>1653 Eglinton Ave W, York </i>     
                </a>
        </Col>

        <Col xs={12} md={3}>
        <a href=''>
        <img src={Img11} rounded width='304px' height='236px' />
                    <span>December 25, 2019 </span>
                    <b>Christmas Gleaming Stamp a Stack </b>
                    <i>110 Church St, Markham, ON </i>  
        </a>
        </Col>

        <Col xs={12} md={3}>
        <a href=''>
        <img src={Img12} rounded width='304px' height='236px' />
                    <span>December 31, 2019 </span>
                    <b>Stars - New Years Eve All Inclusive Toronto </b>
                    <i>Mirage Banquet & Convention Centre Toronto </i>
                </a>
        </Col>                     
 </Row>
 </div> 
        </>
            );
}

export default UserDashBoard;