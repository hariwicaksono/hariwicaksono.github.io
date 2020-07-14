import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" className="bg-primary py-5">

<Container>
          <Row>
            <Col md="12">
              <h2 className="text-light">
              Feel free to contact me for any work or suggestions below
              </h2>
            </Col>

            <Col md="12">
           
            <h4 className="text-light font-weight-light">E-mail:<br/>{resumeData.website}</h4>
            
            </Col>
          </Row>
          </Container>
        </section>
        );
  }
}