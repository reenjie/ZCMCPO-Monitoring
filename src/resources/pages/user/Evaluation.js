import React, { useState } from "react";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../../../data/NavData";
import Main from "../layouts/navs/Main";
import {
  Grid,
  Paper,
  Box,
  Badge,
  Tooltip,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  InputAdornment,
} from "@mui/material";
import { RiListSettingsLine } from "react-icons/ri";
import gif from "../../../assets/image/document.gif";
import { LoadingButton } from "@mui/lab";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";
export const Evaluation = () => {
  const [classification, setClassification] = useState([]);
  const [value, setValue] = useState();
  const [title, setTitle] = useState();
  const [count, setCount] = useState(1);
  const handleAdd = async () => {
    if (classification.length >= 1) {
      setClassification([...classification, { id: count, title: value }]);
    } else {
      setClassification([{ id: count, title: value }]);
    }
    setValue("");
    setCount(count + 1);
  };

  return (
    <div>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <Grid container spacing={2} mt={2}>
          <Grid xs={6} md={2}></Grid>
          <Grid xs={6} md={8}>
            <Grid container mt={2}>
              <Grid xs={6} md={6}>
                <h4 style={{ marginBottom: "5px" }}>All Evaluation Form</h4>

                <Paper
                  elevation={3}
                  sx={{ padding: "20px", marginBottom: "10px" }}
                >
                  <img
                    style={{ width: "50px", float: "right" }}
                    src={gif}
                    alt=""
                  />
                  <h4 style={{ color: "#146C94" }}>
                    Evaluation Form
                    <span
                      style={{
                        fontSize: "11px",
                        float: "right",
                        fontWeight: "normal",
                      }}
                    >
                      Created : 2022-05-05
                      <br />
                      Modified : 2022-05-05
                    </span>
                  </h4>
                  <Box p={1}>
                    <h5 style={{ fontWeight: "normal" }}>Type of Equipment:</h5>
                    <Box>
                      <select>
                        <option value="">Select Type of Equipment</option>
                      </select>
                      <button type="" style={{ marginLeft: "3px" }}>
                        Add <IoMdAddCircleOutline />
                      </button>
                      <h6>Available Items</h6>
                      <ul
                        style={{
                          fontSize: "13px",
                          height: "140px",
                          overflowY: "scroll",
                        }}
                      >
                        <li>carry</li>
                        <li>Indixa</li>
                        <li>India</li>
                        <li>India</li>
                        <li>India</li>
                        <li>India</li>
                      </ul>

                      <select>
                        <option value="">Select Supplier</option>
                      </select>
                      <button type="" style={{ marginLeft: "3px" }}>
                        Add <IoMdAddCircleOutline />
                      </button>
                      <h6>Available Items</h6>

                      <ul
                        style={{
                          fontSize: "13px",
                          height: "140px",
                          overflowY: "scroll",
                        }}
                      >
                        <li>carry</li>
                        <li>Indixa</li>
                        <li>India</li>
                        <li>India</li>
                        <li>India</li>
                        <li>India</li>
                      </ul>
                    </Box>
                  </Box>
                  <Box sx={{ padding: "10px" }}>
                    <Tooltip
                      title="Manage Evaluation Form Contents"
                      placement="top-start"
                    >
                      <LoadingButton variant="contained" size="small">
                        <h3 style={{ fontWeight: "normal" }}>
                          {" "}
                          Manage <RiListSettingsLine />
                        </h3>
                      </LoadingButton>
                    </Tooltip>
                    <Tooltip title="View All evaluations of end users">
                      <Badge badgeContent={4} color="primary">
                        <LoadingButton
                          variant="outlined"
                          size="small"
                          style={{ marginLeft: "5px" }}
                        >
                          <h3 style={{ fontWeight: "normal" }}> View</h3>
                        </LoadingButton>
                      </Badge>
                    </Tooltip>
                  </Box>
                </Paper>
              </Grid>

              <Grid xs={6} md={6}>
                <Box p={3}>
                  <h4 style={{ marginBottom: "10px" }}>Create New Form</h4>
                  <h5></h5>
                  <TextField
                    id="outlined-basic"
                    label="Form Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginBottom: "5px" }}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <Box p={3}>
                    <h5>Add Classification</h5>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      style={{ marginBottom: "5px" }}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                      value={value}
                    />
                    <Button
                      variant="outlined"
                      style={{ marginLeft: "5px" }}
                      onClick={handleAdd}
                    >
                      <h4>Add</h4>
                    </Button>

                    <Box>
                      {classification.map((row) => {
                        return (
                          <TextField
                            id="outlined-basic"
                            variant="standard"
                            size="small"
                            style={{ marginBottom: "5px" }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <Button
                                    color="error"
                                    onClick={() => {
                                      const data = classification.filter(
                                        (x) => x.id !== row.id
                                      );
                                      setClassification(data);
                                    }}
                                  >
                                    <FaRegTimesCircle />
                                  </Button>
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                            defaultValue={row.title}
                            onChange={(e) => {
                              /* Updating Items in an array */
                              for (let { id: Rowid } of classification) {
                                if (row.id === Rowid) {
                                  /* Set the new value */
                                  const update = {
                                    id: row.id,
                                    title: e.target.value,
                                  };
                                  /* Find the index of a specified key */
                                  const index = classification.findIndex(
                                    (item) => item.id == Rowid
                                  );
                                  /* Set a Default value of an array */
                                  const updateitem = [...classification];
                                  /* if index find. assign the new value */
                                  updateitem[index] = update;
                                  /* Save to state */
                                  setClassification(updateitem);
                                  return;
                                }
                              }
                            }}
                          />
                        );
                      })}
                    </Box>
                  </Box>
                  <Button sx={{ float: "right" }} variant="contained">
                    <h4 style={{ fontWeight: "normal" }}>Create </h4>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} md={2}></Grid>
        </Grid>
      </Main>
    </div>
  );
};
