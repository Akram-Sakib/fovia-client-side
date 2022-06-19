import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import EditFeedbackData from "../EditFeedbackData/EditFeedbackData";
import { Toaster, toast } from "react-hot-toast";

const FeedbackData = ({ fbk, setFeedback, feedbacks }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    fetch(`https://fovia.herokuapp.com/feedback/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Feedback Removed successfully!");
          const newData = feedbacks.filter((del) => del._id !== id);
          setFeedback(newData);      
        }else{
          toast.error("Failed to Remove feedback!");
        }
      });
  };

  /* Checking github */

  const handleStatus = (id, status) => {
    fetch(`https://fovia.herokuapp.com/feedback/${id}?status=${status}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Status Changed");
        }
      });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
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
            style={{ width: "50px", height: "50px" }}
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
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{ height: "40px", margin: "auto 0" }}
              onClick={() => handleOpen(fbk?._id)}
              variant="contained"
            >
              Edit
            </Button>
            <IconButton aria-label="delete" size="large">
              <DeleteIcon
                onClick={() => handleDelete(fbk?._id)}
                fontSize="inherit"
              />
            </IconButton>
          </Box>
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
