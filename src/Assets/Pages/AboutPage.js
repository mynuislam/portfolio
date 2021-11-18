import React, { Component, Fragment } from 'react';
import AboutDes from '../Components/AboutDes/AboutDes';
import AllPageTop from '../Components/AllPageTop/AllPageTop';
import Navigation from '../Components/Navigation/Navigation';
import Fotter from '../Components/Fotter/Fotter'
class AboutPage extends Component {
 render() {
  return (
   <Fragment>
<Navigation tittle="About"/>    
<AllPageTop PageText="About Me"/>
<AboutDes/>
<Fotter/>

   </Fragment>
  );
 }
}

export default AboutPage;