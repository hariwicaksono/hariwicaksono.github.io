import React, { Component } from 'react';
import {Navbar, Nav, Jumbotron} from 'react-bootstrap';
import { Link } from "react-scroll";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
<section id="home">
<Navbar className="shadow" bg="light" expand="lg" fixed="top">
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      
    <li className="nav-item">
        <Link
        href=""
        className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}>
                Home
        </Link>
     </li>
     <li className="nav-item">
        <Link
        href=""
        className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}>
                About
        </Link>
        </li>
        <li className="nav-item">
      <Link
      href=""
      className="nav-link"
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                duration={500}>
                Resume
        </Link>
        </li>
        <li className="nav-item">
        <Link
        href=""
        className="nav-link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}>
                Works
        </Link>
        </li>
        <li className="nav-item">
        <Link
        href=""
        className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}>
                Contact
        </Link>
        </li>
    </Nav>

  </Navbar.Collapse>
</Navbar>

<Jumbotron className="text-center mb-0" style={{background: '#0C49AA url(assets/images/header-background.png) no-repeat top center'}}>
  <h1 className="text-white mt-5">Hello, my name {resumeData.name}.</h1>
  <h3 className="text-white mb-3">I am a {resumeData.role}. {resumeData.roleDescription}
               </h3>
               <ul className="list-inline">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li className="list-inline-item" key={item.id}>
                                <a href={item.url} target="_blank" className="badge badge-light" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
               <br/>

    
    <Link
        href=""
        className="btn btn-dark"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </Link>
  

</Jumbotron>
</section>
      </React.Fragment>
    );
  }
}