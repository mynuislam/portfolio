import React, { Component, Fragment } from 'react';
import Project from '../../Images/pexels-screen-post-4526430.jpg';
import {Container, Row,Card,Button,Col} from 'react-bootstrap';

class AllProjects extends Component {
 render() {
  return (
   <Fragment>
     <Container >

<Row className=" mt-5">
<Col lg={4} md={6} sm={12} className=" p-2">
<Card className="Project">
  <Card.Img variant="top" src={Project} />
  <Card.Body>
    <Card.Title className='ProjectTittle'>Card Title</Card.Title>
    <Card.Text className="ProjectDes">
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, temporibus?
    </Card.Text>
    <Button className="ProjectBtn" variant="primary">Details</Button>
  </Card.Body>
</Card>
</Col>
<Col lg={4} md={6} sm={12}   className=" p-2">
<Card className="Project">
  <Card.Img variant="top" src={Project} />
  <Card.Body>
    <Card.Title className='ProjectTittle'>Card Title</Card.Title>
    <Card.Text className="ProjectDes">
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid?
    </Card.Text>
    <Button className="ProjectBtn" variant="primary">Details</Button>
  </Card.Body>
</Card>
</Col>
<Col lg={4} md={6} sm={12}   className=" p-2" >
<Card className="Project" >
  <Card.Img  variant="top" src={Project} />
  <Card.Body>
    <Card.Title className='ProjectTittle'>Card Title</Card.Title>
    <Card.Text className="ProjectDes">
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, ipsa!
      
    </Card.Text>
    <Button className="ProjectBtn" variant="primary">Primary</Button>  </Card.Body>
</Card>
</Col>

<Col lg={4} md={6} sm={12}   className=" p-2" >
<Card className="Project" >
  <Card.Img  variant="top" src={Project} />
  <Card.Body>
    <Card.Title className='ProjectTittle'>Card Title</Card.Title>
    <Card.Text className="ProjectDes">
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, ipsa!
      
    </Card.Text>
    <Button className="ProjectBtn" variant="primary">Primary</Button>  </Card.Body>
</Card>
</Col><Col lg={4} md={6} sm={12}   className=" p-2" >
<Card className="Project" >
  <Card.Img  variant="top" src={Project} />
  <Card.Body>
    <Card.Title className='ProjectTittle'>Card Title</Card.Title>
    <Card.Text className="ProjectDes">
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, ipsa!
      
    </Card.Text>
    <Button className="ProjectBtn" variant="primary">Primary</Button>  </Card.Body>
</Card>
</Col><Col lg={4} md={6} sm={12}   className=" p-2" >
<Card className="Project" >
  <Card.Img  variant="top" src={Project} />
  <Card.Body>
    <Card.Title className='ProjectTittle'>Card Title</Card.Title>
    <Card.Text className="ProjectDes">
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, ipsa!
      
    </Card.Text>
    <Button className="ProjectBtn" variant="primary">Primary</Button>  </Card.Body>
</Card>
</Col>

</Row>

    </Container>


   </Fragment>
  );
 }
}

export default AllProjects;