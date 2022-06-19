import { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DataTableModal from "../DataTableModal/DataTableModal";

const DataTableList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const url = `https://fovia.herokuapp.com/doctors`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <>
      <div>
        <TableContainer 
        sx={{overflowX:'scroll'}} component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Descrition</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((doctor) => (
                <DataTableModal
                  setDoctors={setDoctors}
                  key={doctor._id}
                  doctor={doctor}
                  doctors={doctors}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default DataTableList;
