import React, { Component ,Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
class ClientReview extends Component {
 render() {
  var settings = {
   dots: true,
   infinite: true,
   speed: 3000,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   vertical: true,
   verticalSwiping: true,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 };
  return (
   <Fragment>
    <Container>  
    <h1 className="AllSectionTittle text-center">RECENT PROJECTS</h1>

        <div>
        <Slider {...settings}>
          <div className="  " >

            <img className="ImageCircle" src="http://staryes.com/wp-content/uploads/2017/04/20170426150554-92.jpg" alt=""/>
            <h4 className="text-center">Web Development</h4>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis totam quo reprehenderit dolorem maxime sed quidem, ad doloribus, quam facilis ea deleniti. Molestias, voluptatem suscipit. Dignissimos eaque commodi eveniet voluptate?
            </p>
          </div>
          <div>
            <img className="ImageCircle" src="http://staryes.com/wp-content/uploads/2017/04/20170426150554-92.jpg" alt=""/>
            <h4 className="text-center">Web Development</h4>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis totam quo reprehenderit dolorem maxime sed quidem, ad doloribus, quam facilis ea deleniti. Molestias, voluptatem suscipit. Dignissimos eaque commodi eveniet voluptate?
            </p>
          </div>
          <div>
            <img className="ImageCircle" src="http://staryes.com/wp-content/uploads/2017/04/20170426150554-92.jpg" alt=""/>
            <h4 className="text-center">Web Development</h4>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis totam quo reprehenderit dolorem maxime sed quidem, ad doloribus, quam facilis ea deleniti. Molestias, voluptatem suscipit. Dignissimos eaque commodi eveniet voluptate?
            </p>
          </div>
        </Slider>
      </div>
      </Container>

   </Fragment>
  );
 }
}

export default ClientReview;