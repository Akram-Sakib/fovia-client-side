import { Alert, Button, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const {token} = useAuth();

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

  const handleAdminSubmit = (e) => {
    const user = {email};
    console.log(user);

    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          setSuccess(true);
        }
      });
      e.preventDefault();
  };

  return (
    <div className="text-center">
      <h2>Make An Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          type="email"
          onBlur={handleOnBlur}
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
