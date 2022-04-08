import { Grid } from '@mui/material';
import React from 'react';
import DashboardAppointment from '../DashboardAppointment/DashboardAppointment';
import Calender from '../Shared/Calender/Calender';


const DashBoardHome = () => {
    
  const [date, setDate] = React.useState(new Date());

    return (
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={12} md={7}>
            <DashboardAppointment date={date}></DashboardAppointment>
          </Grid>
        </Grid>
    );
};

export default DashBoardHome;