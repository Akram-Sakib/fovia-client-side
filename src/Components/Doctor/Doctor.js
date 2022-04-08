import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {

    const {_id, name,title,image, } = doctor;
    
    return (
      <div className="single-doctor-box">
        <div className="doctor-image">
          <img src={`data:image/jpeg;base64,${image}`} alt="image" />
          <Link to={`/doctor/${_id}`} className="details-btn">
            <i className="fas fa-plus"></i>
          </Link>
        </div>

        <div className="doctor-content">
          <h3>
            <a href="#">{name}</a>
          </h3>
          <span>{title}</span>

          <ul className="social">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Doctor;