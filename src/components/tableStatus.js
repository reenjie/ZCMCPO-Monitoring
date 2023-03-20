import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Alert,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import { FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import "../assets/css/dashboard.css";
import { notify } from "./Sweetalert";

import "react-toastify/dist/ReactToastify.css";
export default function TableStatus({
  trans,
  id,
  setRefresh,
  UpdateDates,
  extendDis,
  setExtenddis,
}) {
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
        ) : status == 5 ? (
          <span className="CustomBadge warning">Extended</span>
        ) : (
          ""
        )}
      </div>
      <h5>Status</h5>
      <br />
      <TableContainer component={Paper} id="tablestatus">
        <Table sx={{ width: 300 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#E1EEDD" }}>
              <TableCell>Extended</TableCell>
              <TableCell align="center">Extended Times</TableCell>
              <TableCell align="center">Emailed </TableCell>
              <TableCell align="center">Due </TableCell>
              <TableCell align="center">Extended </TableCell>

              <TableCell align="center">Delivered </TableCell>
              <TableCell align="center">Completed </TableCell>
              <TableCell align="center">Cancelled </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {extendedCount >= 1 && (
                  <>
                    {" "}
                    <FiCheckCircle style={{ color: "#658864" }} /> yes
                  </>
                )}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
                align="center"
              >
                {extendedCount >= 1 ? extendedCount : ""}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
                align="center"
              >
                {emailed_date != null && (
                  <Input
                    id="component-simple"
                    defaultValue="Composed TextField"
                    type="date"
                    value={emailed_date}
                    style={{
                      fontWeight: "Bold",
                      fontSize: "14px",
                    }}
                    onChange={(e) => {
                      console.log(e.target.value);
                      //notifyUser();
                    }}
                    readOnly
                  />
                )}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
                align="center"
              >
                {DueDate && (
                  <FormControl variant="standard">
                    <Input
                      id="component-simple"
                      defaultValue="Composed TextField"
                      type="date"
                      value={DueDate}
                      style={{
                        fontWeight: "Bold",
                        fontSize: "14px",
                        color: "#F55050",
                      }}
                      onChange={(e) => {
                        UpdateDates(id, e.target.value, "DueDate");
                        setExtenddis(false);
                      }}
                      readOnly={completed_date || cancelled_date ? true : false}
                    />
                  </FormControl>
                )}
              </TableCell>

              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
                align="center"
              >
                {duration_date && (
                  <FormControl variant="standard">
                    <Input
                      id="component-simple"
                      defaultValue="Composed TextField"
                      type="date"
                      value={duration_date}
                      style={{
                        fontWeight: "Bold",
                        fontSize: "14px",
                        color: "#F0A04B",
                      }}
                      onChange={(e) => {
                        UpdateDates(id, e.target.value, "duration_date");
                        setExtenddis(false);
                      }}
                      readOnly={completed_date || cancelled_date ? true : false}
                    />
                  </FormControl>
                )}
              </TableCell>

              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
                align="center"
              >
                {delivered_date != null && (
                  <Input
                    id="component-simple"
                    defaultValue="Composed TextField"
                    type="date"
                    value={delivered_date}
                    style={{
                      fontWeight: "Bold",
                      fontSize: "14px",
                      color: "#1F8A70",
                    }}
                    onChange={(e) => {
                      console.log(e.target.value);
                      //notifyUser();
                    }}
                    readOnly
                  />
                )}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
                align="center"
              >
                {completed_date && (
                  <Input
                    id="component-simple"
                    defaultValue="Composed TextField"
                    type="date"
                    value={completed_date}
                    style={{
                      fontWeight: "Bold",
                      fontSize: "14px",
                      color: "#1F8A70",
                    }}
                    onChange={(e) => {
                      console.log(e.target.value);
                      //notifyUser();
                    }}
                    readOnly
                  />
                )}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
                align="center"
              >
                {cancelled_date != null && (
                  <Input
                    id="component-simple"
                    defaultValue="Composed TextField"
                    type="date"
                    value={cancelled_date}
                    style={{
                      fontWeight: "Bold",
                      fontSize: "14px",
                      color: "#F55050",
                    }}
                    onChange={(e) => {
                      console.log(e.target.value);
                      //notifyUser();
                    }}
                    readOnly
                  />
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {remarks != null && (
        <>
          <br />
          <h5>Remarks :</h5>
          <span style={{ fontSize: "15px", color: "#F55050" }}>{remarks}</span>
        </>
      )}
    </>
  );
}
