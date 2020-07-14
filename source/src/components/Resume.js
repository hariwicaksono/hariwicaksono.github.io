import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume" className="py-5">
         <div className="py-4">
<Container>

  <Row>
            <Col md="3">
               <h3>Education</h3>
            </Col>

            <Col md="9">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div>
                       <div>
                          <h4>{item.UniversityName}</h4>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </Col>
 </Row>
 <hr/>
 <Row>
            <Col md="3">
               <h3>Work</h3>
            </Col>

            <Col md="9">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div>
                       <div>
                          <h4>{item.CompanyName}</h4>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
         </Col>
</Row>
<hr/>
<Row>
            <Col md="3">
               <h3>Skills</h3>
            </Col>

            <Col md="9">

            {/*resumeData.skillsDescription*/}
          
   				   <ul className="list-inline">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li class="list-inline-item">
                      {item.skillname}
                      </li>
                    )
                  })
                }

   					</ul>

   			</Col>

      </Row>
      </Container>
         
         
         </div>

      </section>
    );
  }
}