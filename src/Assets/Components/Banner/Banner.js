import React, { Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
class Banner extends Component {
 render() {
  return (

<Fragment>

<Container className="topBanner p-0">
<div className='topBannerLayer'>
<Container>
<Row>
<Col className="topConTent">
<h1 className="topConTent1">Web Designer & Developer</h1>
<h4 className="topConTent2">Mobile & Web Application</h4>
<Button variant="primary">More Info</Button>
</Col>
</Row>
</Container>
</div>
</Container>


</Fragment>










  );
 }
}

export default Banner;