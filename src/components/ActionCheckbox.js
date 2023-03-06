import * as React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Radio, RadioGroup, Stack, TextField, Input } from "@mui/material";
import { useState, useRef } from "react";

export default function ActionCheckbox({ setSelected, setRemarks }) {
  const [state, setState] = React.useState({
    cancelled: true,
    undelivered: false,
    extended: false,
  });
  const [clicked, setClicked] = useState();
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { cancelled, undelivered, extended } = state;
  return (
    <Box sx={{ transition: "ease-in-out .4s" }}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Choose Transaction
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <Stack>
          <FormControlLabel
            value="Cancelled"
            control={<Radio />}
            label="Mark as Cancelled"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />
          <FormControlLabel
            value="Undelivered"
            control={<Radio />}
            label="Mark as Undelivered"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />

          <FormControlLabel
            value="Extend"
            control={<Radio />}
            label="Extend"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />

          <FormControlLabel
            value="Delivered"
            control={<Radio />}
            label="Mark as Delivered"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />
          <FormControlLabel
            value="Remarks"
            control={<Radio />}
            label="Create a Remarks"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />
          {clicked == "Remarks" && (
            <Box p={1}>
              <TextField
                label={"Write your remarks here.."}
                fullWidth
                id="margin-normal"
                margin="normal"
                onChange={(e) => {
                  setRemarks(e.target.value);
                }}
              />
            </Box>
          )}
        </Stack>
      </RadioGroup>
    </Box>
  );
}
