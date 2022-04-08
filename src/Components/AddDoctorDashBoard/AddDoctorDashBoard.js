import {
  Alert,
  Button,
  IconButton,
  Input,
  TextField,
  Stack,
  Typography
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import React, { useState } from "react";
import styled from "@emotion/styled";

const AddDoctorDashBoard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [signature, setSignature] = useState(null);
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

  const Input = styled("input")({
    display: "none",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("image", image);
    formData.append("signature", signature);
    formData.append("description", description);

    fetch("http://localhost:5000/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Doctor Added Successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="text-center my-5">
      {success && (
        <Alert severity="success">
          Doctor Added Successfully
        </Alert>
      )}
      <h2 className="mb-5">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="text-start">
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          variant="standard"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          required
          sx={{ width: "50%" }}
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          required
          sx={{ width: "50%" }}
          label="Title"
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
            />
            <Button variant="contained" component="span">
              Doctors Pic
            </Button>
          </label>
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => setSignature(e.target.files[0])}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <Typography variant="h6" sx={{ marginRight: "5px" }}>
                Add Signature
              </Typography>
              <PhotoCamera />
            </IconButton>
          </label>
        </Stack>
        <br />
        <br />
        <TextField
          label="Descrition"
          multiline
          rows={8}
          sx={{ width: "50%" }}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctorDashBoard;