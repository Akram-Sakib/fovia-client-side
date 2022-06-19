import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {

    const {_id, name,title,image, } = doctor;
    
    return (
      <div className="single-doctor-box mx-3">
        <div className="doctor-image">
          <img src={`data:image/jpeg;base64,${image}`} alt="doctor pic" />
          <Link to={`/doctor/${_id}`} className="details-btn">
            <i className="fas fa-plus"></i>
          </Link>
        </div>

        <div className="doctor-content">
          <h3>
            <a href="/#">{name}</a>
          </h3>
          <span>{title}</span>
        </div>
      </div>
    );
};

export default Doctor;