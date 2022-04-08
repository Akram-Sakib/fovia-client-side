import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DataTableModal from '../DataTableModal/DataTableModal';
import FeedbackData from '../FeedbackData/FeedbackData';

const FeedbackDataTable = () => {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
      const url = `http://localhost:5000/feedback`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setFeedback(data));
    }, []);

    return (
      <>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Feedback</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedback.map((fbk) => (
                  <FeedbackData
                    setFeedback={setFeedback}
                    key={fbk._id}
                    fbk={fbk}
                    feedbacks={feedback}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );

};

export default FeedbackDataTable;