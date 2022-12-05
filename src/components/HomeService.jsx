import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ThreeTextSection from "./ThreeTextSection";
import ButtonAll from "./ButtonAll";
import service1 from "../assets/img/service1.jpg";
import service2 from "../assets/img/service2.jpg";
import service3 from "../assets/img/service3.jpg";
import service4 from "../assets/img/service4.jpg";

const HomeService = () => {
  return (
    <>
      <Container className="paddin_top_must">
        <Row>
          <Col lg={6}>
            <div className="service_left">
              <ThreeTextSection
                heading="WHAT WE DO?"
                title="We Build Digital 
                        Experiences"
                text="We create custom sof
                tware for customers who want more than just off-the-shelf solutions or for customers with unique software requirements. As a Leading software development Company, we also provide skilled programmers to companies that need more intelligence, and we share more than 6+years of experience advising companies on crucial IT-related matters worldwide."
                serv="hello"
              />
              <ButtonAll title="Our Services" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="service_right">
              <Row>
                <Col xsm={6}>
                  <div className="content pt_200">
                    <img src={service1} className="img-fluid" alt="" />
                  </div>
                  <div className="content">
                    <img src={service2} className="img-fluid" alt="" />
                  </div>
                </Col>
                <Col xsm={6}>
                  <div className="content pt_200">
                    <img src={service3} className="img-fluid" alt="" />
                  </div>
                  <div className="content">
                    <img src={service4} className="img-fluid" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeService;
