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
import {
  CustomSelect,
  CustomButton,
  CustomDatePicker,
} from "./CustomComponents.js";
import { CiViewList } from "react-icons/ci";

export const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const [value, setValue] = useState("");

  const supplier = [
    ...new Set(
      props.rows[0].map((x) => {
        return x.supplier;
      })
    ),
  ];

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
            fontWeight: "normal",
            color: "#379237",
            fontSize: 35,
            textTransform: "uppercase",
          }}
          variant="h2"
          id="tableTitle"
          component="div"
        >
          Purchased Order Status
        </Typography>
      )}
      <Search
        setSearch={props.setSearch}
        search={props.search}
        rows={props.rows}
        contentSearch={props.contentSearch}
      />

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
              sx={{ marginTop: "-25px", marginLeft: "5px" }}
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

                  <CustomSelect label="Supplier" data={supplier} />
                  <CustomSelect label="Category" data={[]} />
                  <CustomSelect label="Units" data={[]} />
                  <CustomButton
                    label="Custom View"
                    Icon={
                      <CiViewList
                        style={{ marginLeft: "2px", fontSize: "17px" }}
                      />
                    }
                  />

                  <h6 style={{ color: "grey" }}>Transaction</h6>

                  <CustomButton
                    label="Recent"
                    Icon={
                      <BiTimeFive
                        style={{ marginLeft: "2px", fontSize: "17px" }}
                      />
                    }
                  />

                  <CustomButton
                    label="Extension"
                    Icon={
                      <BiTimeFive
                        style={{ marginLeft: "2px", fontSize: "17px" }}
                      />
                    }
                  />

                  <CustomDatePicker
                    value={value}
                    setValue={setValue}
                    label="Emailed Date"
                  />

                  <CustomDatePicker
                    value={value}
                    setValue={setValue}
                    label="Delivered Date"
                  />

                  <CustomDatePicker
                    value={value}
                    setValue={setValue}
                    label="Completed Date"
                  />

                  <CustomDatePicker
                    value={value}
                    setValue={setValue}
                    label="Due Date"
                  />
                </Box>
              </Box>
              <Box padding={5}>
                <Button
                  sx={{ marginTop: "10px", float: "right" }}
                  variant="contained"
                  color="info"
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
