import React, { Component, Fragment } from 'react';
import { Container, Row,Col} from 'react-bootstrap';
import Coding from "../../Images/coding (1).png";
import CSS3 from"../../Images/css-3.png";
import physics from "../../Images/physics (1).png";
class Services extends Component {
 render() {
  return (
<Fragment>
  <Container className="text-center serviceCenter" >
       <h1  className="AllSectionTittle">MY SERVICES</h1>
   <Row>
<Col lg={4} md={6} sm={12}>
<div className="Service">
<img src={Coding} alt=""/>
<h2>Front End Development</h2>
<p>Lorem ipsum dolor sit amet
   consectetur adipisicing elit.
    Dolores, iure? Quas qui ullam
     incidunt error fugit esse similique</p>
</div>
</Col>
<Col lg={4} md={6} sm={12}>
<div className="Service">
<img src={CSS3} alt=""/>
<h2>PSD To HTML & CSS</h2>
<p>Lorem ipsum dolor sit amet
   consectetur adipisicing elit.
    Dolores, iure? Quas qui ullam
     incidunt error fugit esse similique</p>
</div>
</Col>
<Col lg={4} md={6} sm={12} >
<div className="Service">
<img src={physics} alt=""/>
<h2>REACT.JS</h2>
<p>Lorem ipsum dolor sit amet
   consectetur adipisicing elit.
    Dolores, iure? Quas qui ullam
     incidunt error fugit esse similique
       </p>
</div>
</Col>
</Row>
</Container>
</Fragment> 
  );
 }
}
export default Services;