import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {


  const { name, time, space } = booking;
  const [openBooking, setBookingOpen] = useState(false);
  const handleBookingOpen = () => {
    setBookingOpen(true);
  };
  const handleBookingClose = () => {
    setBookingOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          elevation={3}
          sx={{
            py: 5,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ color: "var(--main-color)", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            {space} Spaces Available
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            sx={{
              backgroundColor: "var(--main-color)",
              ":hover": {
                bgcolor: "#0cbc58", // theme.palette.primary.main
                color: "white",
              },
            }}
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        date={date}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
