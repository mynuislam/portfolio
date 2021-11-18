import React, { Component, Fragment } from 'react';
import AllPageTop from '../Components/AllPageTop/AllPageTop';
import ContactSEction from '../Components/ContactSection/ContactSEction';
import Navigation from '../Components/Navigation/Navigation';
import Fotter from '../Components/Fotter/Fotter';

class ContactPage extends Component {
 render() {
  return (
   <Fragment>
    <Navigation tittle="Contact"/>
    <AllPageTop PageText="Contact"/>
    <ContactSEction/>
    <Fotter/>
   </Fragment>
  );
 }
}

export default ContactPage;