import React, { Component, Fragment } from 'react';
import AllPageTop from '../Components/AllPageTop/AllPageTop';
import AllProjects from '../Components/AllProjects/AllProjects';
import Fotter from '../Components/Fotter/Fotter';
import Navigation from '../Components/Navigation/Navigation';

class PortfolioPage extends Component {
 render() {
  return (
   <Fragment>
    <Navigation tittle="Portfolio"/>
    <AllPageTop PageText="All Projects"/>
<AllProjects/>
<Fotter/>
   </Fragment>
  );
 }
}

export default PortfolioPage;