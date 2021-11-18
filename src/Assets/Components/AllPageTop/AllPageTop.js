import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Style.css'
class AllPageTop extends Component {
 render() {
  return (
   <Fragment>
    <Container className="topPageBanner p-0">
<div className='topPageBannerLayer'>
<Container>
<Row>
<Col className="topPageConTent">
<h4 className="topPageConTent1">{this.props.PageText}</h4>

</Col>
</Row>
</Container>
</div>
</Container>
   </Fragment>
  );
 }
}

export default AllPageTop;