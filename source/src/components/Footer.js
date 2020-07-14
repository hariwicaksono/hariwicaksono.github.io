import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
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
                  <li className="list-inline-item">
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
            <li className="list-inline-item"><a id="go-top" title="Back to Top" href="#home"><i class="fa fa-chevron-up fa-2x" aria-hidden="true"></i></a></li>
          </ul>
          
      </Container>
    </footer>
    );
  }
}