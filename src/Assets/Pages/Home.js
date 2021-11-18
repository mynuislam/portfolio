import React, { Component, Fragment } from 'react';
import Navigation from '../Components/Navigation/Navigation'
import Banner from '../Components/Banner/Banner'
import Analysis from '../Components/Analysis/Analysis';
import RecenProjects from '../Components/Projects/RecenProjects';
import Services from '../Components/Services/Services';
import Course from '../Components/Course/Course';
import ClientReview from '../Components/ClientsReview/ClientReview';
import Fotter from '../Components/Fotter/Fotter';
import Video from '../Components/Video/Video';
import Summary from '../Components/Summary/Summary.js'
class Home extends Component {
 render() {
  return (
   <Fragment>
<Navigation tittle="Home"/>
<Banner/>
<Services/>
<Analysis/>
<Summary/>
<RecenProjects/>
<Course/>
<Video/>
<ClientReview/>
<Fotter/>
</Fragment>
  );
 }
}
export default Home;