import React, { useState } from "react";
import { Button, Input, TextField, Stack } from "@mui/material";
import { Toaster, toast } from "react-hot-toast";

const AddFeedBack = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [feedback, setFeedback] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("title", title);
    formData.append("image", image);
    formData.append("feedback", feedback);
    formData.append("status", 1);

    fetch("https://fovia.herokuapp.com/feedback", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Feedback added successfully!");
        }else{
          toast.error("Failed to add Feedback!");
        }
      })
      .catch((error) => {
        toast.error("Failed to add Feedback!");
      });
  };

  return (
    <div className="text-center my-5">
      <Toaster position="top-right" reverseOrder={true} />
      <h2 className="mb-5 text-lg-start text-sm-center">Add Feedback</h2>
      <form onSubmit={handleSubmit} className="text-start">
        <TextField
          sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}
          label="Name"
          variant="standard"
          required
          onBlur={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          required
          sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}
          label="Title"
          variant="standard"
          onBlur={(e) => setTitle(e.target.value)}
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
          </label>
        </Stack>
        <br />
        <br />
        <TextField
          label="Feedback"
          multiline
          rows={8}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}
          onBlur={(e) => setFeedback(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Add Feedback
        </Button>
      </form>
    </div>
  );
};

export default AddFeedBack;
