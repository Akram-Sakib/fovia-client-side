import React, { useEffect, useState } from "react";
import "./DoctorDetails.css";
import doctorImg from "./../../Images/Doctors/Doctor5.jpg";
import doctorSignature from "./../../Images/Doctors/signature.png";
import shape from "./../../Images/shape.png";
import Header from "../../Components/Shared/Header/Header";
import Footer from "../../Components/Shared/Footer/Footer";
import { useParams } from "react-router-dom";
// import DoctorExperiance from "./../../Components/DoctorExperiance/DoctorExperiance";

const DoctorDetails = () => {

  const {id} = useParams();
  
  const [doctor, setDoctor] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5000/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [id]);
  
  return (
    <>
      <Header />
      <section className="doctor-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="doctor-details-image">
                <img
                  src={`data:image/jpeg;base64,${doctor.image}`}
                  alt="image"
                />

                <h3>{doctor.name}</h3>
                <span>{doctor.title}</span>

                {/* <ul className="social">
                  <li>
                    <a href="/#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="doctor-details-desc">
                <h2>Hello i’m {doctor.name} Introducing My Self.</h2>

                <p>{doctor.description}</p>

                <div className="signature-image">
                  <img
                    src={`data:image/jpeg;base64,${doctor.signatureImg}`}
                    alt="signature"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <DoctorExperiance/>   */}
        </div>
        <div className="shape3">
          <img src={shape} className="wow fadeInLeft" alt="image" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DoctorDetails;
