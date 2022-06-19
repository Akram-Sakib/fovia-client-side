import {
  Button,
  TextField,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Toaster, toast } from "react-hot-toast";

const AddDoctorDashBoard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

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
    formData.append("description", description);

    fetch("http://localhost:5000/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Doctor added successfully!");
        }else{
          toast.error("Failed to add Doctor!");
        }
      })
      .catch((error) => {
        toast.error("Failed to add Doctor!");
      });
  };

  return (
    <div className="text-center my-5">
      <Toaster position="top-right" reverseOrder={true} />
      <h2 className="mb-5 text-lg-start text-sm-center">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="text-start">
        <TextField
          sx={{ width: { sm: "100%", md: "50%" } }}
          label="Name"
          variant="standard"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          required
          sx={{ width: { sm: "100%", md: "50%" } }}
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          required
          sx={{ width: { sm: "100%", md: "50%" } }}
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
        </Stack>
        <br />
        <br />
        <TextField
          label="Descrition"
          multiline
          rows={8}
          sx={{ width: { sm: "100%", md: "50%" } }}
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