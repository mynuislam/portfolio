import React, { Component, Fragment } from 'react';
import AllCourse from '../Components/AllCourse/AllCourse';
import AllPageTop from '../Components/AllPageTop/AllPageTop';
import Fotter from '../Components/Fotter/Fotter';
import Navigation from '../Components/Navigation/Navigation';

class AllCoursePage extends Component {
 render() {
  return (
   <Fragment>
    <Navigation tittle="Course"/>
    <AllPageTop PageText="All Courses"/>
    <AllCourse/>
    <Fotter/>
   </Fragment>
  );
 }
}

export default AllCoursePage;