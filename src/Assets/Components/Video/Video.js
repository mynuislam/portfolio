import React, { Component, Fragment } from 'react';
import { Col, Container,Row ,Modal,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Player,BigPlayButton} from 'video-react';
import '../Video/video-react.css'

class Video extends Component {

constructor(){
super();
 this.state={
show:false

 }
}
handleClose=()=>
this.setState({show:false})

handleOpen=()=>
 this.setState({show:true})
 
 
 render() {
  return (
   <Fragment>
    <Container>
<Row>
<Col lg={12} md={12} sm={12} >
<div className='VideoCard text-center'>
<p className="VideoTittle">How I Do</p>
<p className="VideoDes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis iure consequuntur totam dicta sequi laudantium nulla quae incidunt rerum. Consequuntur magnam repudiandae dolore quis repellat minima saepe eaque veniam soluta.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque sint obcaecati at fuga soluta, quam ullam nostrum distinctio ratione vel rem minus quas placeat, eius facere et perspiciatis ipsa.

</p>
<p><FontAwesomeIcon onClick={this.handleOpen} className="PlayBtn"  icon={faPlayCircle}  /> </p>


<Modal show={this.state.show} onHide={this.handleClose}
backdrop="static" keyboard={false}
      >
        <Modal.Body>
        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
      <BigPlayButton position="center" />
    </Player>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>








</div>
</Col>
</Row>
    </Container>










   </Fragment>
  );
 }
}

export default Video;