import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Style.css'
import logo1 from "../../Images/favicon-32x32.png"
import logo2 from "../../Images/favicon-32x32 (1).png"
import {
  NavLink
 } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap'
class Navigation extends Component {
// স্ক্রল করলে কালার চেঞ্জ হয়ে যাওয়া এর রকম তৈরি 
// করতে হলে state এর মাধ্যমে তৈরি করতে হবে
constructor(props){
super();
this.state={
NavScrollState:"navTittle",
NabLogo:[logo2],
NabBg:"NavBackColor",
NavbVarItem:"NavItem",
NavVariant:"dark",
Pagetittle:props.tittle
}
}
onscroll=()=>{
if (window.scrollY>100) {
 this.setState({NavVariant:'light'
, NavScrollState:'navTittleScrl',NabLogo:[logo1],NabBg:'NavBackColorScrl',NavbBarItem:'NavItemScrl'})
}
else if (window.scrollY<100) {
this.setState({NavVariant:'dark',NavScrollState:'navTittle',NabLogo:[logo2],NabBg:'NavBackColor',NavbBarItem:'NavItem'})
} 
}
componentDidMount() {
 window.addEventListener('scroll',this.onscroll)
}
// automatically onscroll method টা 
// কাজ করার জন্য ComponentDidmount এর ব্যবহার 
render() {
  return (
   <Fragment>
     <title>{this.state.Pagetittle}</title>
    <Navbar variant={this.state.NavVariant} className={this.state.NabBg} collapseOnSelect expand="lg" bg="dark"  fixed="top" >
  <Navbar.Brand className={this.state.NavScrollState} href="#home"><img src={this.state.NabLogo} alt="" srcset="" width="33px" /> Coder-Mynul</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    </Nav>
    <Nav>
    <Nav.Link>
     <NavLink exact activeStyle={{color:"#00a8ee"}} className={this.state.NavbBarItem} to="/">HOME</NavLink>
     
     </Nav.Link> 
    <Nav.Link>     <NavLink  exact activeStyle={{color:"#00a8ee"}} className={this.state.NavbBarItem} to="/Service">SERVICES</NavLink></Nav.Link> 

    <Nav.Link> 
      <NavLink  exact activeStyle={{color:"#00a8ee"}} className={this.state.NavbBarItem} to="/AllCourse">COURSES</NavLink></Nav.Link> 

    <Nav.Link>
      <NavLink exact activeStyle={{color:"#00a8ee"}}  className={this.state.NavbBarItem} to="/Portfolio">PORTFOLIO</NavLink></Nav.Link> 

    <Nav.Link>
      <NavLink exact activeStyle={{color:"#00a8ee"}} className={this.state.NavbBarItem} to="/Contact">CONTACT</NavLink></Nav.Link> 

    <Nav.Link>
      <NavLink  exact activeStyle={{color:"#00a8ee"}} className={this.state.NavbBarItem} to="/About">ABOUT</NavLink></Nav.Link> 


    </Nav>
  </Navbar.Collapse>
</Navbar>
   </Fragment>
  );
 }
}
export default Navigation;