import React, { Component, Fragment } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

class Fotter extends Component {
 render() {
  return (
<Fragment className="float-right">
<Container fluid={true} className="fotterSection text-center ">
<Row>
<Col lg={3} md={6} sm={12} className=" p-5 text-justify" >
<h4>Follow Me</h4>
<a className="SocialLink" href="#1"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
<a className="SocialLink" href="#1"><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
</Col>
<Col lg={3} md={6} sm={12} className=" p-5  text-justify"  >
<h4 className=" text-justify ">Address</h4>
<p  className=" text-justify fotteLink">Abidarpara,Agrbad,Chattagram</p>
<p   className=" text-justify fotteLink"><FontAwesomeIcon icon={faEnvelope}/>homrcise8@gmail.com</p>
<p className=" text-justify fotteLink"><FontAwesomeIcon icon={faPhone}/>880-1786686408</p>
</Col>
<Col lg={3} md={6} sm={12} className=" p-5 text-justify" >
<h4>Information</h4>
<a className="fotteLink" href="#1">About Me</a><br/>
<a className="fotteLink" href="#1">My Resume</a><br/>
<a className="fotteLink" href="#1">Contact</a><br/>



</Col>
<Col lg={3} md={6} sm={12} className=" p-5 text-justify" >
<h4>Legal</h4>
<a  className="fotteLink" href="#1">Refund Policy</a><br/>
<a  className="fotteLink" href="#1">Terms & Condition</a><br/>
<a className="fotteLink" href="#1">Privacy Policy</a><br/>

</Col>
</Row>
</Container>
<Container fluid={true} className=" text-center CopyRight">

<a className="CopyRightText" href="https://codermynul.blogspot.com/" >coder-mynul.com &copy;2020</a>

</Container>



</Fragment>
  );
 }
}

export default Fotter;