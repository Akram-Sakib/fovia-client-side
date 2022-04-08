import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../Shared/Calender/Calender';
import chairImg from "./../../Images/chair.png";

const AppointmentCalender = ({date, setDate}) => {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Calender date={date} setDate={setDate} />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={chairImg} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default AppointmentCalender;