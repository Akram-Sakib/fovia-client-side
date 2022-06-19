import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";
import Header from "../../Components/Shared/Header/Header";
import shape from "./../../Images/shape.png";
import "./DoctorDetails.css";

const DoctorDetails = () => {
  const { id } = useParams();

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch(`https://fovia.herokuapp.com/doctors/${id}`)
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
                  alt="Doctor Pic"
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
{/* 
                <div className="signature-image">
                  <img
                    src={`data:image/jpeg;base64,${doctor.signatureImg}`}
                    alt="signature"
                  />
                </div> */}
              </div>
            </div>
          </div>

          {/* <DoctorExperiance/>   */}
        </div>
        <div className="shape3">
          <img src={shape} className="wow fadeInLeft" alt="Shape" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DoctorDetails;
