import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    infinite: true,
    fade: true,
    lazyLoad: true,
    autoplay: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="banner-section">
      <Row>
        <Slider {...settings}>
          <div className="carousel-img img-src1">
            <div className="carousel-div">
              <Container>
                <Row>
                  <Col md={8}>
                    <h4>Best Healing Service</h4>
                    <h1>Fovia is the No. 1 Hospital</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      Quis ipsumpsum dolor sit amet consectetur.
                    </p>
                    <Link to="/appointment" className="primary-btn me-2">
                      MAKE APPOINTMENT
                      <i className="far fa-calendar-check"></i>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="carousel-img img-src2">
            <div className="carousel-div">
              <Container>
                <Row>
                  <Col md={8}>
                    <h4>Women Care</h4>
                    <h1>Exceptional Care for Women</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      Quis ipsumpsum dolor sit amet consectetur.
                    </p>
                    <Link to="/appointment" className="primary-btn me-2">
                      MAKE APPOINTMENT
                      <i className="far fa-calendar-check"></i>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="carousel-img img-src3">
            <div className="carousel-div">
              <Container>
                <Row>
                  <Col md={8}>
                    <h4>Health Service</h4>
                    <h1>Your Health is Our Top Priority</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      Quis ipsumpsum dolor sit amet consectetur.
                    </p>
                    <Link to="/appointment" className="primary-btn me-2">
                      MAKE APPOINTMENT
                      <i className="far fa-calendar-check"></i>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Slider>
      </Row>
    </div>
  );
};

export default Banner;
