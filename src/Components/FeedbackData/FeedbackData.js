import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import EditDataTableList from "../EditDataTableList/EditDataTableList";
import EditFeedbackData from "../EditFeedbackData/EditFeedbackData";

const FeedbackData = ({ fbk, setFeedback, feedbacks }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/feedback/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Data Deleted Successfully");
          const newData = feedbacks.filter((del) => del._id !== id);
          setFeedback(newData);
        }
      });
  };

  /* Checking github */

  const handleStatus = (id, status) => {
    fetch(`http://localhost:5000/feedback/${id}?status=${status}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
          if (data.modifiedCount) {
            alert("Status Changed")
          }
      });
  };

  return (
    <>
      <TableRow
        key={fbk?._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {fbk?.name}
        </TableCell>
        <TableCell align="right">{fbk?.title}</TableCell>
        <TableCell align="right">
          <img
            src={`data:image/jpeg;base64,${fbk?.image}`}
            style={{ width: "60px" }}
            alt=""
          />
        </TableCell>
        <TableCell align="right">{fbk?.feedback.slice(0, 20)}...</TableCell>
        <TableCell align="right">
          {fbk?.status === 1 ? (
            <Button
              onClick={() => handleStatus(fbk?._id, "pending")}
              variant="contained"
            >
              Pending
            </Button>
          ) : (
            <Button
              onClick={() => handleStatus(fbk?._id, "approved")}
              variant="contained"
            >
              Approved
            </Button>
          )}
        </TableCell>
        <TableCell align="right">
          <Button onClick={() => handleOpen(fbk?._id)} variant="contained">
            Edit
          </Button>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon
              onClick={() => handleDelete(fbk?._id)}
              fontSize="inherit"
            />
          </IconButton>
        </TableCell>
      </TableRow>
      <EditFeedbackData
        doctors={fbk}
        click={{ open, handleClose, handleOpen }}
      />
    </>
  );
};

export default FeedbackData;
