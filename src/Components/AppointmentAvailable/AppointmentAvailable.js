import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Booking from '../Booking/Booking';

const bookings = [
  {
    id: 1,
    name:"Teeth Orthodonics",
    time:"08.00 AM - 09.00 AM",
    space:10
  },
  {
    id: 2,
    name:"Cosmetic Dentristry",
    time:"09.00 AM - 10.00 AM",
    space:8
  },
  {
    id: 3,
    name:"Teeth Orthodonics",
    time:"10.00 AM - 11.00 AM",
    space:9
  },
  {
    id: 4,
    name:"Cavity Protection",
    time:"11.00 AM - 12.00 PM",
    space:5
  },
  {
    id: 5,
    name:"Pediatric Dental",
    time:"06.00 AM - 07.00 PM",
    space:10
  },
  {
    id: 6,
    name:"Oral Surgery",
    time:"07.00 AM - 08.00 PM",
    space:10
  }
]

const AppointmentAvailable = ({ date }) => {
  const [bookingSucces, setBookingSuccess] = useState(false);


  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Typography
        variant="h3"
        sx={{ textAlign: "center", my: 3, color: "var(--dark-color)" }}
      >
        Available Appointments on {date.toDateString()}
      </Typography>
      {bookingSucces && <h2>Hello</h2>}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            setBookingSuccess={setBookingSuccess}
            date={date}
            key={booking.id}
            booking={booking}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AppointmentAvailable;