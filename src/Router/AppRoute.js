import React, { Component, Fragment } from 'react';
import Home from '.././Assets/Pages/Home'
import PortfolioPage from'.././Assets/Pages/PortfolioPage'
import ServicePage from'.././Assets/Pages/ServicePage'
import ContactPage from'.././Assets/Pages/ContactPage'
import AllCoursePage from'.././Assets/Pages/AllCoursePage'
import AboutPage from'.././Assets/Pages/AboutPage'

import {
 Switch,
 Route,
} from "react-router-dom";

class AppRoute extends Component {
 render() {
  return (
   <Fragment>
           <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Service" component={ServicePage}/>
          <Route exact path="/AllCourse" component={AllCoursePage}/>
          <Route exact path="/Portfolio" component={PortfolioPage}/>
          <Route exact path="/Contact" component={ContactPage}/>
          <Route exact path="/About" component={AboutPage}/>
        </Switch>
   </Fragment>
  );
 }
}

export default AppRoute;