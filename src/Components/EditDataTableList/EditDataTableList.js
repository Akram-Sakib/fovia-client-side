import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Input = styled("input")({
  display: "none",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height:600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow:"scroll"
};


const EditDataTableList = ({ click,doctors }) => {
  const { open, handleClose, handleOpen } = click;
  
  const { _id,name, title, email, image, description } = doctors;
  const [picture, setPicture] = useState(image);

  console.log(picture.name);

  const initialInfo = {
    id: _id,
    name: name,
    email: email,
    title: title,
    newImage: picture,
    description: description,
  };
  
  const [doctorInfo, setDoctorInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...doctorInfo };
    newInfo[field] = value;
    setDoctorInfo(newInfo);
  };
  
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  

  const handleBookSubmit = (e) => {
    e.preventDefault();
    console.log(doctorInfo);
  };

  const [imgData, setImgData] = useState(
    `data:image/jpeg;base64,${image}`
  );


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{ textAlign: "center", mb: 2 }}
            variant="h6"
            component="h2"
          >
            Update Doctor Details
          </Typography>
          <form onSubmit={handleBookSubmit}>
            <img
              src={imgData}
              style={{
                height: "300px",
                width: "100%",
                objectFit: "cover",
                padding: "10px",
              }}
              alt=""
            />
            <label htmlFor="icon-button-file" className="my-2">
              <Input
                accept="image/*"
                id="icon-button-file"
                name='image'
                onChange={onChangePicture}
                type="file"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>

            <TextField
              id="outlined-size-small"
              defaultValue={name}
              name="name"
              onBlur={handleOnBlur}
              size="small"
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              defaultValue={title}
              name="title"
              onBlur={handleOnBlur}
              size="small"
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              name="description"
              multiline
              rows={4}
              defaultValue={description}
              onBlur={handleOnBlur}
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              placeholder="Facebook"
              name="fblink"
              size="small"
              sx={{ width: "100%", m: 1 }}
              onBlur={handleOnBlur}
            />
            <TextField
              id="outlined-size-small"
              placeholder="Twitter"
              name="twlink"
              size="small"
              sx={{ width: "100%", m: 1 }}
              onBlur={handleOnBlur}
            />
            <TextField
              id="outlined-size-small"
              placeholder="Linked In"
              size="small"
              name="lnlink"
              sx={{ width: "100%", m: 1 }}
              onBlur={handleOnBlur}
            />
            <TextField
              id="outlined-size-small"
              placeholder="Instagram"
              size="small"
              name="in"
              sx={{ width: "100%", m: 1 }}
              onBlur={handleOnBlur}
            />
            <Button type="submit" sx={{ m: 1 }} variant="contained">
              Update
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default EditDataTableList;