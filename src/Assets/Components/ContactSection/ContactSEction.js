import React, { Component, Fragment } from 'react';
import { Col, Container, Row,Form,Button,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/Style/Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactSEction extends Component {
 render() {
  return (
   <Fragment>
    <Container className=" mt-5 mb-5">
<Row>
<Col lg={6} md={6} sm={12}>
<h2 className=" text-justify "> Quick Connect </h2>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="AboutDes">Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" />
 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="AboutDes">Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email Address" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="AboutDes" >Message</Form.Label>
    <Form.Control
      as="textarea"
      placeholder="Leave a Message here"
      style={{ height: '100px' }}
    />

  </Form.Group>




  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</Col>

<Col lg={6} md={6} sm={12}>
<h2 className=" text-justify ">Discuss Now</h2>
<p  className=" text-justify fotteLink">Abidarpara,Agrbad,Chattagram</p>
<p   className=" text-justify fotteLink"><FontAwesomeIcon icon={faEnvelope}/>homrcise8@gmail.com</p>
<p className=" text-justify fotteLink"><FontAwesomeIcon icon={faPhone}/>880-1786686408</p>
</Col>



</Row>

    </Container>
   </Fragment>
  );
 }
}

export default ContactSEction;