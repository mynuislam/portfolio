import React, { Component, Fragment } from 'react';
import {Col, Container,Row,Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import ReactVisibilitySensor from "react-visibility-sensor";
class Summary extends Component {




 render() {

   return (
   <Fragment>
<Container className="Summary p-0 mt-5  text-center ">
<div className='SummaryLayer'>
<Container>
<Row  >
   <Col lg={8} md={12}  sm={12} >
<Row  className="MarginCount">

<Col>
<h1  className="countNumber" >


<CountUp start={0} end={100}>
  {({ countUpRef, start }) => (


<ReactVisibilitySensor onChange={start} delayedCall={true} >
<span ref={countUpRef} />    
</ReactVisibilitySensor>
   
   

  )}
</CountUp>


</h1>

<h4 className="countTittle"   >Total Projects</h4>
<hr className=" w-25 bg-white" />
</Col>


<Col>
<h1  className="countNumber" >


<CountUp start={0} end={100}>
  {({ countUpRef, start }) => (


<ReactVisibilitySensor onChange={start} delayedCall={true} >
<span ref={countUpRef} />    
</ReactVisibilitySensor>
   

  )}
</CountUp>

</h1>

<h4  className="countTittle"  >Total Clients</h4>
<hr className=" w-25 bg-white" />

</Col>

</Row>


</Col>


   <Col lg={4} md={12}  sm={12} >
   <Card  className="CardMargin" >

<Card.Body className="Card">
  <Card.Title >How i Work</Card.Title>
  <Card.Text>
<p className="CardSUbTittle" >
<FontAwesomeIcon  className="CheckIcon" icon={faCheckCircle} />   Requirement Gathering </p>

<p  className="CardSUbTittle">
<FontAwesomeIcon  className="CheckIcon" icon={faCheckCircle}  />  System Analysis 
</p>

<p className="CardSUbTittle"> 
<FontAwesomeIcon className="CheckIcon"  icon={faCheckCircle}  /> Code Testing 
 </p>

<p className="CardSUbTittle">
<FontAwesomeIcon className="CheckIcon"  icon={faCheckCircle}  /> Implementation  
</p>

  </Card.Text>
</Card.Body>
</Card>
   </Col>
</Row>
</Container>
</div>
</Container>
   </Fragment>
  );
 }
}
export default Summary;
