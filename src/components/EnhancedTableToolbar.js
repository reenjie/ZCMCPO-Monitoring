import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button, TextField, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { BiTimeFive } from "react-icons/bi";
import Search from "./Search";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const [value, setValue] = useState("");
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{
            flex: "1 1 100%",
            fontStyle: "Roboto",
            fontWeight: 700,
            color: "#379237",
            fontSize: 35,
          }}
          variant="h2"
          id="tableTitle"
          component="div"
        >
          Purchased Order Status
        </Typography>
      )}
      <Search />

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <Box>
            <IconButton
              onClick={() => {
                props.setOpendrawer(true);
              }}
            >
              <FilterListIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={props.opendrawer ? true : false}
              onClose={props.opendrawer ? false : true}
            >
              <Box width={300} p={3}>
                <h4>Filter By</h4>
                <Box p={2}>
                  <h6 style={{ color: "grey" }}>Contents</h6>
                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ marginTop: "10px" }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Supplier
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={[]}
                      label="Supplier"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={[]}
                      label="Supplier"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  <h6 style={{ color: "grey" }}>Transaction</h6>
                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ marginTop: "10px" }}
                  >
                    <Button
                      color="primary"
                      variant="outlined"
                      style={{ textTransform: "capitalize" }}
                    >
                      Recent{" "}
                      <BiTimeFive
                        style={{ marginLeft: "2px", fontSize: "17px" }}
                      />
                    </Button>
                  </FormControl>

                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ marginTop: "10px" }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Emailed Date"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField size="small" {...params} />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>

                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ marginTop: "10px" }}
                  >
                    <Button
                      color="primary"
                      variant="outlined"
                      style={{ textTransform: "capitalize" }}
                    >
                      Delivered Date
                      <BiTimeFive
                        style={{ marginLeft: "2px", fontSize: "17px" }}
                      />
                    </Button>
                  </FormControl>

                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ marginTop: "10px" }}
                  >
                    <Button
                      color="primary"
                      variant="outlined"
                      style={{ textTransform: "capitalize" }}
                    >
                      Completed Date
                      <BiTimeFive
                        style={{ marginLeft: "2px", fontSize: "17px" }}
                      />
                    </Button>
                  </FormControl>
                </Box>
              </Box>
              <Box padding={5}>
                <Button
                  sx={{ marginTop: "10px", float: "right" }}
                  variant="contained"
                  color="success"
                  onClick={() => {
                    props.setOpendrawer(false);
                  }}
                >
                  Close
                </Button>
              </Box>
            </Drawer>
          </Box>
        </Tooltip>
      )}
    </Toolbar>
  );
};
