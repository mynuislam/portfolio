import React, { Component, Fragment } from 'react';
import AllPageTop from '../Components/AllPageTop/AllPageTop';
import Fotter from '../Components/Fotter/Fotter';
import Navigation from '../Components/Navigation/Navigation';
import Services from '../Components/Services/Services';

class ServicePage extends Component {
 render() {
  return (
   <Fragment>
    <Navigation tittle="Service"/>
    <AllPageTop PageText="My Service"/>
    <Services/>
    <Fotter/>
   </Fragment>
  );
 }
}

export default ServicePage;