import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import EditDataTableList from "../EditDataTableList/EditDataTableList";import { Toaster, toast } from "react-hot-toast";

const DataTableModal = ({ doctor, setDoctors, doctors }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    fetch(`https://fovia.herokuapp.com/doctors/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Doctor Removed successfully!");
          const newData = doctors.filter((del) => del._id !== id);
          setDoctors(newData);
        }else{
          toast.error("Failed to Remove!");
        }
      });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <TableRow
        key={doctor._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {doctor.name}
        </TableCell>
        <TableCell align="right">{doctor.title}</TableCell>
        <TableCell align="right">
          <img
            src={`data:image/jpeg;base64,${doctor.image}`}
            style={{ width: "60px" }}
            alt=""
          />
        </TableCell>
        <TableCell align="right">
          {doctor.description.slice(0, 50)}...
        </TableCell>
        <TableCell align="right">
          <Button onClick={() => handleOpen(doctor._id)} variant="contained">
            Edit
          </Button>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon
              onClick={() => handleDelete(doctor._id)}
              fontSize="inherit"
            />
          </IconButton>
        </TableCell>
      </TableRow>
      <EditDataTableList
        doctors={doctor}
        click={{ open, handleClose, handleOpen }}
      />
    </>
  );
};

export default DataTableModal;
