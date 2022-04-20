import React, { useEffect, useState } from "react";
import "./Doctors.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import doctorImg1 from "./../../Images/Doctors/Doctor1.jpg";
import doctorImg2 from "./../../Images/Doctors/Doctor2.jpg";
import doctorImg3 from "./../../Images/Doctors/Doctor3.jpg";
import doctorImg4 from "./../../Images/Doctors/Doctor4.jpg";
import doctorImg5 from "./../../Images/Doctors/Doctor5.jpg";

import { Link } from "react-router-dom";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
  };

  return (
    <section className="doctor-area ptb-100 bg-fefefe">
      <div className="container">
        <div className="section-title">
          <span>Doctors</span>
          <h2>Meet Our Qualified Doctors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="doctor-slides">
          <Slider {...settings}>
            {doctors.map((doctor) => (
              <Doctor doctor={doctor} key={doctor._id}/>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
