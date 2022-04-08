import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./AboutUs.css";
import { FcCheckmark } from "react-icons/fc";

const AboutUs = () => {
    return (
      <section className="about-section" id="about">
        <Container fluid>
          <Row>
            <Col md={12} lg={6}>
              <div className="about-image"></div>
            </Col>
            <Col md={12} lg={6}>
              <div className="about-content">
                <h4>About Us</h4>
                <h2>Short Story About Fovia Clinic Since 1999</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <ul>
                  <li>
                    <FcCheckmark></FcCheckmark>Scientific Skills For getting a
                    better result
                  </li>
                  <li>
                    <FcCheckmark></FcCheckmark>Communication Skills to getting
                    in touch
                  </li>
                  <li>
                    <FcCheckmark></FcCheckmark>A Career Overview opportunity
                    Available
                  </li>
                  <li>
                    <FcCheckmark></FcCheckmark>A good Work Environment For work
                  </li>
                </ul>
                <button className="primary-btn">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default AboutUs;