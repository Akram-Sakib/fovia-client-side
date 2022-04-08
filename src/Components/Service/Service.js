import React from 'react';

import { Grid } from '@mui/material';

import {  useNavigate } from 'react-router-dom';
import "./Service.css";

import serviceImg1 from "./../../Images/Services/doctor.png";
import serviceImg2 from "./../../Images/Services/dental-chair.png";
import serviceImg3 from "./../../Images/Services/care.png";
import serviceImg4 from "./../../Images/Services/brain.png";

const Service = ({service}) => {

    // const { id, name, desc, img } = service;
    // const navigate = useNavigate();

    // const handleDetails = (id) => {
    //   navigate(`/hospital-details/${id}`);
    // };

    return (
      <>
        <Grid item xs={3} sm={3} md={3}>
          <div className="main-services-box">
            <div className="icon">
              <img src={serviceImg1} alt="" />
            </div>
            <h3>
              <a href="/advancecare">Advanced Care</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consecte adipiscing elit sed do
              eiusincidunt.
            </p>
          </div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div className="main-services-box">
            <div className="icon">
              <img src={serviceImg2} alt="" />
            </div>
            <h3>
              <a href="/advancecare">Internal Medicine</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consecte adipiscing elit sed do
              eiusincidunt.
            </p>
          </div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div className="main-services-box">
            <div className="icon">
              <img src={serviceImg3} alt="" />
            </div>
            <h3>
              <a href="/advancecare">Otolaryngology</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consecte adipiscing elit sed do
              eiusincidunt.
            </p>
          </div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div className="main-services-box">
            <div className="icon">
              <img src={serviceImg4} alt="" />
            </div>
            <h3>
              <a href="/advancecare">Ophthalmology</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consecte adipiscing elit sed do
              eiusincidunt.
            </p>
          </div>
        </Grid>
      </>
    );
};

export default Service;