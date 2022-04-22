import React, { useEffect, useState } from "react";
import "./Doctors.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);


  const settings_1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: doctors.length > 4 ? 4 : doctors.length,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          <div className="row">
            <Slider {...settings_1}>
              {doctors.map((doctor) => (
                <Doctor doctor={doctor} key={doctor._id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
