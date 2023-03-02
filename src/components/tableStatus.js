import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert } from "@mui/material";
import { FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import "../assets/css/dashboard.css";
export default function TableStatus({ trans, id }) {
  const [loaded, setLoaded] = useState(false);

  const {
    extendedCount,
    duration_date,
    emailed_date,
    received_date,
    delivered_date,
    completed_date,
    cancelled_date,
    DueDate,
    DueDate1,
    status,
    remarks,
  } = trans.filter((x) => x.FK_PoID == id)[0];

  return (
    <>
      <div style={{ float: "right" }}>
        {status == 0 ? (
          <span className="CustomBadge primary">Pending</span>
        ) : status == 1 ? (
          <span className="CustomBadge danger">Undelivered</span>
        ) : status == 2 ? (
          <span className="CustomBadge success">Delivered</span>
        ) : status == 3 ? (
          <span className="CustomBadge danger">Cancelled</span>
        ) : status == 4 ? (
          <span className="CustomBadge success">Completed</span>
        ) : (
          ""
        )}
      </div>
      <h5>Status</h5>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Extended</TableCell>
              <TableCell align="center">Extended Times</TableCell>
              <TableCell align="center">Due </TableCell>
              <TableCell align="center">Extended </TableCell>
              <TableCell align="center">Emailed </TableCell>
              <TableCell align="center">Delivered </TableCell>
              <TableCell align="center">Completed </TableCell>
              <TableCell align="center">Cancelled </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <FiCheckCircle style={{ color: "#658864" }} /> yes
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
