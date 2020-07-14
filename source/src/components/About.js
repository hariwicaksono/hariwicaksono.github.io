import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" className="bg-light py-5">
         <div className="py-4">
         <Container>
         <Row>

            <Col md="3">

               <Image className="img-fluid" src="assets/images/pp.jpg" alt="Hari Wicaksono" roundedCircle />

            </Col>

            <Col md="9">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       				</p>
               <a href="https://docs.google.com/document/d/1KS0eqPI3DXRjibrlIP1PGJOMEp2hdGfgOBhWYuuAr_Q/edit?usp=sharing" className="btn btn-outline-primary"><i className="fa fa-file-text-o" aria-hidden="true"></i> See Resume</a>
            </Col>
         </Row>
         
         </Container>
         </div>
      </section>
    );
  }
}