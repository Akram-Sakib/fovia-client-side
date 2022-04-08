import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useAuth from "../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { user } = useAuth();
  const { name, time } = booking;
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    // Collect Data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          handleBookingClose();
          setBookingSuccess(true);
        }
      });
  };
  
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookSubmit}>
            <TextField
              disabled
              id="outlined-size-small"
              defaultValue={time}
              size="small"
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              defaultValue={user.displayName}
              name="patientName"
              onBlur={handleOnBlur}
              size="small"
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              defaultValue={user.email}
              name="email"
              onBlur={handleOnBlur}
              size="small"
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              defaultValue="Your Phone"
              size="small"
              onBlur={handleOnBlur}
              name="phone"
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              disabled
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
              sx={{ width: "100%", m: 1 }}
            />
            <Button type="submit" sx={{ m: 1 }} variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
