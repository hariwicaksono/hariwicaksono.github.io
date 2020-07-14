import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import { Link } from "react-scroll";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer className="py-3">
 
    <Container>
          <ul className="list-inline float-right">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li className="list-inline-item" key={item.id}>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
            <li className="list-inline-item"><Link
        href=""
        className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}>
                <i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i>
        </Link>
        </li>
          </ul>
          
      </Container>
    </footer>
    );
  }
}