import { Button, TextField } from "@mui/material";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Toaster, toast } from "react-hot-toast";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    console.log(user);

    fetch("https://fovia.herokuapp.com/users/admin", {
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
          toast.success("Made Admin Successfully!");
        }else{
          toast.error("Failed to make admin!");
        }
      }).catch(err=>toast.error("Failed to make admin!"));
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <Toaster position="top-right" reverseOrder={false} />
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
    </div>
  );
};

export default MakeAdmin;
