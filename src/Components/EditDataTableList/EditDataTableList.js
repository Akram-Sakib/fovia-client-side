import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Button, IconButton, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Input = styled("input")({
  display: "none",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const EditDataTableList = ({ click, doctors }) => {
  const { open, handleClose } = click;

  const { _id, name, title, email, image, description } = doctors;

  const [updName, setupdName] = useState(name);
  const [updEmail, setupdEmail] = useState(email);
  const [updTitle, setupdTitle] = useState(title);
  const [updPic, setUpdPic] = useState(image);
  const [updDescription, setupdDescription] = useState(description);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setUpdPic(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("id", _id);
    formData.append("name", updName);
    formData.append("email", updEmail);
    formData.append("title", updTitle);
    formData.append("image", updPic);
    formData.append("description", updDescription);
    formData.append("email", updEmail);

    fetch("https://fovia.herokuapp.com/doctors", {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data.insertedId) {
        //   setSuccess("Doctor Added Successfully");
        // }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [imgData, setImgData] = useState(`data:image/jpeg;base64,${image}`);

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
                name="image"
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
              onBlur={(e) => setupdName(e.target.value)}
              size="small"
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              defaultValue={title}
              name="title"
              onBlur={(e) => setupdTitle(e.target.value)}
              size="small"
              sx={{ width: "100%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              defaultValue={email}
              name="email"
              onBlur={(e) => setupdEmail(e.target.value)}
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
              onBlur={(e) => setupdDescription(e.target.value)}
              sx={{ width: "100%", m: 1 }}
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
