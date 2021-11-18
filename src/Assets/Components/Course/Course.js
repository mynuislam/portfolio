import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseImage from '../../Images/pexels-pixabay-207691.jpg'
class Course extends Component {
 render() {
  return (
   <Fragment>
    <Container>
    <h1 className="AllSectionTittle text-center">Course</h1>

<Row> 
   <Col lg={6} md={12} sm={12}  className=" p-2 ">
       <Row>
          <Col lg={6} md={6} sm={12}  className=" p-2">
<img src={CourseImage} alt='' width="100%" />
          </Col>
          <Col lg={6} md={6} sm={12}  className=" p-2">
              <h4 className="text-justify CourseTittle">Web Development</h4>
          <p className="text-justify CourseDes  p-lg-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dignissimos maiores accusamus dolore in delectus sit odio ex exercitationem, itaque nulla atque consequatur. Consequatur aliquid dolore, voluptatum fuga omnis error.</p>
          <a className="CourseDetails" href="#1">Details</a>
          </Col>
      </Row>
    </Col>

    <Col  lg={6} md={12} sm={12}  className=" p-2  ">
       <Row>
          <Col lg={6} md={6} sm={12}  className=" p-2">
          <img src={CourseImage} alt='' width="100%" />

          </Col>
          <Col lg={6} md={6} sm={12}  className=" p-2">
              <h4 className="text-justify CourseTittle" >Web Development</h4>

              <p className="text-justify CourseDes p-lg-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dignissimos maiores accusamus dolore in delectus sit odio ex exercitationem, itaque nulla atque consequatur. Consequatur aliquid dolore, voluptatum fuga omnis error.</p>
              <a className="CourseDetails" href="#1">Details</a>

          </Col>
      </Row>
    </Col>
</Row>

<Row className=" mt-5">
   <Col lg={6} md={12} sm={12}  className=" p-2 ">
       <Row>
          <Col lg={6} md={6} sm={12}  className=" p-2">
<img src={CourseImage} alt='' width="100%" />
          </Col>
          <Col lg={6} md={6} sm={12}  className=" p-2">
              <h4 className="text-justify CourseTittle">Web Development</h4>
          <p className="text-justify CourseDes p-lg-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dignissimos maiores accusamus dolore in delectus sit odio ex exercitationem, itaque nulla atque consequatur. Consequatur aliquid dolore, voluptatum fuga omnis error.</p>
          <a className="CourseDetails" href="#1">Details</a>
          </Col>
      </Row>
    </Col>

    <Col  lg={6} md={12} sm={12}  className=" p-2 ">
       <Row>
          <Col lg={6} md={6} sm={12}  className=" p-2">
          <img src={CourseImage} alt='' width="100%" />

          </Col>
          <Col lg={6} md={6} sm={12}  className=" p-2">
              <h4 className="text-justify CourseTittle" >Web Development</h4>

              <p className="text-justify CourseDes p-lg-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dignissimos maiores accusamus dolore in delectus sit odio ex exercitationem, itaque nulla atque consequatur. Consequatur aliquid dolore, voluptatum fuga omnis error.</p>
              <a className="CourseDetails" href="#1">Details</a>

          </Col>
      </Row>
    </Col>
</Row>





    </Container>








   </Fragment>
  );
 }
}

export default Course;