import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { BiTimeFive } from "react-icons/bi";
import Search from "./Search";
import { SlClose } from "react-icons/sl";
import { FiCheckCircle } from "react-icons/fi";
import swal from "sweetalert";
import {
  CustomSelect,
  CustomButton,
  CustomDatePicker,
} from "./CustomComponents.js";
import { FaSort } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { CustomView } from "./CustomView";
export const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const [value, setValue] = useState("");
  const [openCustom, setOpenCustom] = useState(false);

  const supplier = [
    ...new Set(
      props.rows[0].map((x) => {
        return x.supplier;
      })
    ),
  ];

  const units = [
    ...new Set(
      props.rows[0].map((c) => {
        return c.unit;
      })
    ),
  ];

  const categories = [
    ...new Set(
      props.rows[0].map((c) => {
        return c.category;
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
        setscuFilter={props.setscuFilter}
        setSort={props.setSort}
      />

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="">
          <Box>
            <IconButton
              sx={{ marginTop: "-25px", marginLeft: "5px" }}
              onClick={() => {
                props.setOpendrawer(true);
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#F55050",
                  display: "flex",
                }}
              >
                FILTER <FaSort style={{ marginTop: "3px" }} />
              </span>{" "}
            </IconButton>
            <Drawer
              anchor="right"
              open={props.opendrawer ? true : false}
              onClose={props.opendrawer ? false : true}
            >
              <Box width={500} p={3}>
                <h4>Filter By</h4>
                <Box p={2}>
                  <h6 style={{ color: "grey" }}>Contents</h6>

                  <CustomSelect
                    label="Supplier"
                    data={supplier}
                    setSort={props.setSort}
                    sort={props.sort}
                  />
                  <CustomSelect
                    label="Category"
                    data={categories}
                    setSort={props.setSort}
                    sort={props.sort}
                  />
                  <CustomSelect
                    label="Units"
                    data={units}
                    setSort={props.setSort}
                    sort={props.sort}
                  />
                  <CustomButton
                    label="Custom View"
                    setOpenCustom={setOpenCustom}
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
                  sx={{ marginTop: "10px", float: "right", color: "#D3756B" }}
                  variant="outlined"
                  color="info"
                  onClick={() => {
                    props.setOpendrawer(false);
                  }}
                >
                  Close <SlClose style={{ marginLeft: "3px" }} />
                </Button>
                {!props.scuFilter && (
                  <Button
                    sx={{
                      marginTop: "10px",
                      float: "right",
                      marginRight: "5px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      if (props.sort.length >= 1) {
                        props.setscuFilter(true);
                        props.setOpendrawer(false);
                        props.setSelection([]);
                      } else {
                        swal(
                          "Unable to Proceed!",
                          "No type of filter selected",
                          "error"
                        );
                      }
                    }}
                  >
                    Proceed <FiCheckCircle style={{ marginLeft: "3px" }} />
                  </Button>
                )}
              </Box>
            </Drawer>
            <Drawer
              anchor="top"
              open={openCustom ? true : false}
              onClose={openCustom ? false : true}
            >
              <CustomView
                setOpenCustom={setOpenCustom}
                setColumnChoice={props.setColumnChoice}
                columnchoice={props.columnchoice}
                setOpendrawer={props.setOpendrawer}
              />
            </Drawer>
          </Box>
        </Tooltip>
      )}
    </Toolbar>
  );
};
