import * as React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { FormLabel, Stack, TextField, Input } from "@mui/material";
import { useState, useRef } from "react";

export default function ActionCheckbox({ id, setSelected, setRemarks }) {
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

  return (
    <Box sx={{ transition: "ease-in-out .4s" }}>
      <FormLabel id={id}>Choose Transaction</FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <Stack>
          <FormControlLabel
            value="email"
            control={<Radio />}
            label="Set Emailed Date"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />
          <FormControlLabel
            value="cancel"
            control={<Radio />}
            label="Mark as Cancelled"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />
          <FormControlLabel
            value="undeliver"
            control={<Radio />}
            label="Mark as Undelivered"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />

          <FormControlLabel
            value="extend"
            control={<Radio />}
            label="Extend"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />

          <FormControlLabel
            value="deliver"
            control={<Radio />}
            label="Mark as Delivered"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
          />
          <FormControlLabel
            value="remarks"
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
