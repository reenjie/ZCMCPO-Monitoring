import React from "react";
import {
  Box,
  Button,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Chip,
} from "@mui/material";

import { SlClose } from "react-icons/sl";
import { FiCheckCircle } from "react-icons/fi";
import { HiTable } from "react-icons/hi";

export const CustomView = ({ setOpenCustom }) => {
  return (
    <Box height={"70vh"} p={5}>
      <Container maxWidth="lg">
        <h2>Custom Table Header</h2>
        <span style={{ fontSize: "12px" }}>Manage Table View</span>
        <div style={{ padding: "10px" }}>
          <span style={{ fontSize: "12px", color: "#5B8FB9" }}>
            Current View
          </span>
          <br />
          <Chip icon={<HiTable />} label="Status" variant="outlined" />
          <Chip
            icon={<HiTable />}
            label="P.O Number"
            color="success"
            onDelete={() => {}}
            variant="outlined"
          />
          <Chip
            icon={<HiTable />}
            label="Suppliers"
            color="success"
            onDelete={() => {}}
            variant="outlined"
          />
          <Chip
            icon={<HiTable />}
            label="Description"
            color="success"
            onDelete={() => {}}
            variant="outlined"
          />
          <Chip
            icon={<HiTable />}
            label="Category"
            color="success"
            onDelete={() => {}}
            variant="outlined"
          />
          <Chip
            icon={<HiTable />}
            label="Units"
            color="success"
            onDelete={() => {}}
            variant="outlined"
          />
          <Chip icon={<HiTable />} label="Action" variant="outlined" />
        </div>
        <div style={{ height: "40vh", overflowY: "scroll" }}>
          <FormGroup style={{ marginTop: "15px" }}>
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Disabled" />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Disabled" />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Disabled" />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Disabled" />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </div>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginLeft: "5px", float: "right", marginTop: "10px" }}
          onClick={() => {
            setOpenCustom(false);
          }}
        >
          Close <SlClose style={{ marginLeft: "3px" }} />
        </Button>
      </Container>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
        }}
      >
        {/* <Button
          variant="contained"
          onClick={() => {
            setOpenCustom(false);
          }}
          color="info"
        >
          Save Custom View <FiCheckCircle style={{ marginLeft: "3px" }} />
        </Button> */}
      </div>
    </Box>
  );
};
