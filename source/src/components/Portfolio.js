import React, { Component } from 'react';
import {Container, Card, CardColumns} from 'react-bootstrap';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" className="bg-light py-5">
        <div className="py-4">
        <Container>

          <h3 className="mb-3">Portfolio</h3>
          <CardColumns >
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <Card key={item.id}>
                  <Card.Link href={item.link}><Card.Img variant="top" src={`${item.imgurl}`} /></Card.Link>
                  <Card.Body>
                    
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>

                  </Card.Body>
                </Card>
              )
            })
          }
          </CardColumns>
      </Container>
      </div>
  </section>
        );
  }
}