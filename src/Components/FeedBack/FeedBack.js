import React, { useEffect, useState } from "react";
import "./FeedBack.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clientImg1 from "./../../Images/Clients/clients1.jpg";
import clientImg2 from "./../../Images/Clients/clients2.jpg";
import clientImg3 from "./../../Images/Clients/clients3.jpg";
import clientImg4 from "./../../Images/Clients/clients4.jpg";
import clientImg5 from "./../../Images/Clients/clients5.jpg";

const ClientFeedback = [
  {
    id: 1,
    img: clientImg1,
    name: "John Lucy",
    title: "Founding Partner",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Quis ipsum suspendisse ultricesgravida. Risus commodo viverra maecenas accumsan lacusvel facilisis.",
  },
  {
    id: 2,
    img: clientImg2,
    name: "John Smith",
    title: "Web Developer",
    feedback:
      "Risus commodo viverra maecenas accumsan lacus velfacilisis. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
  {
    id: 3,
    img: clientImg3,
    name: "Maxwel Warner",
    title: "Web Designer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Quis ipsum suspendisse ultricesgravida. Risus commodo viverra maecenas accumsan lacus vel facilisis",
  },
  {
    id: 4,
    img: clientImg4,
    name: "Ross Taylor",
    title: "Patient",
    feedback:
      "Risus commodo viverra maecenas accumsan lacus velfacilisis. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
  {
    id: 5,
    img: clientImg5,
    name: "James Anderson",
    title: "CEO",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Quis ipsum suspendisse ultricesgravida. Risus commodo viverra maecenas accumsan lacusvel facilisis.",
  },
  {
    id: 6,
    img: clientImg1,
    name: "Steven Smith",
    title: "Manager",
    feedback:
      "Risus commodo viverra maecenas accumsan lacus velfacilisis. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
  {
    id: 7,
    img: clientImg2,
    name: "Steven Lucy",
    title: "Patient",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Quis ipsum suspendisse ultricesgravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: 8,
    img: clientImg3,
    name: "John Terry",
    title: "Patient",
    feedback:
      "Risus commodo viverra maecenas accumsan lacus velfacilisis. Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
];


const FeedBack = () => {

const [nav1, setNav1] = useState({});
const [nav2, setNav2] = useState({});

const [feedback, setFeedback] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/feedback")
    .then((res) => res.json())
    .then((data) => setFeedback(data));
}, []);

console.log(feedback);

  const settings1 = {
    className: "slick-center",
    centerMode: true,
    pauseOnHover: false,
    centerPadding: "5px",
  };

  const settings2 = {
    fade: true,
    dots: true,
    arrows: true,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <section className="feedback-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Feedback</span>
            <h2>Our Happy Clients Says About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="feedback-slides">
            <div className="client-thumbnails">
              <div>
                <Slider
                  asNavFor={nav2}
                  slidesToShow={5}
                  ref={(slider1) => setNav1(slider1)}
                  {...settings1}
                >
                  {feedback.map((data) => {
                    return (
                      <div className="item">
                        <div className="img-fill">
                          <img
                            src={`data:image/jpeg;base64,${data?.image}`}
                            // src={data.img}
                            alt="client"
                            style={{width:"85px",height:"90px"}}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>

            <div className="client-feedback">
              <div>
                <Slider
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  {...settings2}
                >
                  {feedback.map((data) => {
                    return (
                      <div className="item">
                        <div className="single-feedback">
                          <h3>{data.name}</h3>
                          <span>{data.title}</span>
                          <p>{data.feedback}</p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>

              {/* <button className="prev-arrow slick-arrow">
                <i className="flaticon-left-arrow"></i>
              </button>

              <button className="next-arrow slick-arrow">
                <i className="flaticon-arrow-pointing-to-right"></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedBack;
