import * as React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import {
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Input,
  Checkbox,
} from "@mui/material";
import { useState, useRef } from "react";

export default function ActionCheckbox({
  setSelected,
  setRemarks,
  clicked,
  setClicked,
  emd,
  setEmd,
  error,
  setError,
  emd1,
  setEmd1,
}) {
  const [state, setState] = React.useState({
    cancelled: true,
    undelivered: false,
    extended: false,
  });
  const maxDate = new Date().toISOString().split("T")[0];
  const [uncheck, setUncheck] = useState(false);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ transition: "ease-in-out .4s", fontSize: "13px" }}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Choose Transaction
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <Stack>
          <FormControlLabel
            value="emaileddate"
            control={<Radio />}
            label="Set Emailed Date"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
            style={{ color: "#3E54AC" }}
          />
          {clicked == "emaileddate" && (
            <Box p={1}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type={"date"}
                error={error}
                style={{ marginBottom: "5px" }}
                onChange={(e) => {
                  setEmd(e.target.value);
                }}
                value={emd}
                inputProps={{
                  max: maxDate,
                }}
                disabled={uncheck}
              />

              {error && (
                <span style={{ color: "#F16767", fontSize: "12px" }}>
                  Please provide a Date
                </span>
              )}
              <br />
              <FormControlLabel
                onClick={(e) => {
                  if (e.target.checked == true) {
                    //uncheck
                    const thisday = new Date();
                    const isoString = thisday.toISOString();
                    const formattedDate = isoString.substring(0, 10);
                    setEmd(formattedDate);
                    setUncheck(true);
                    setError(false);
                  } else {
                    setEmd("");
                    setUncheck(false);
                  }
                }}
                control={<Checkbox />}
                label="Today"
              />
            </Box>
          )}
          <FormControlLabel
            value="Cancelled"
            control={<Radio />}
            label="Mark as Cancelled"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
            style={{ color: "#F16767" }}
          />
          <FormControlLabel
            value="undeliver"
            control={<Radio />}
            label="Mark as Undelivered"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
            style={{ color: "#F16767" }}
          />

          <FormControlLabel
            value="extend"
            control={<Radio />}
            label="Extend"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
            style={{ color: "#F0A04B" }}
          />

          <FormControlLabel
            value="deliver"
            control={<Radio />}
            label="Mark as Delivered"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
            style={{ color: "#03C988" }}
          />

          <FormControlLabel
            value="Complete"
            control={<Radio />}
            label="Mark as Completed"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
            style={{ color: "#03C988" }}
          />

          {clicked == "Delivered" && (
            <Box p={1}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type={"date"}
                error={error}
                style={{ marginBottom: "5px" }}
                onChange={(e) => {
                  setEmd1(e.target.value);
                }}
                value={emd1}
                inputProps={{
                  max: maxDate,
                }}
                disabled={uncheck}
              />

              {error && (
                <span style={{ color: "#F16767", fontSize: "12px" }}>
                  Please provide a Date
                </span>
              )}
              <br />
              <FormControlLabel
                onClick={(e) => {
                  if (e.target.checked == true) {
                    //uncheck
                    const thisday = new Date();
                    const isoString = thisday.toISOString();
                    const formattedDate = isoString.substring(0, 10);
                    setEmd1(formattedDate);
                    setUncheck(true);
                    setError(false);
                  } else {
                    setEmd1("");
                    setUncheck(false);
                  }
                }}
                control={<Checkbox />}
                label="Today"
              />
            </Box>
          )}
          <FormControlLabel
            value="remarks"
            control={<Radio />}
            label="Create a Remarks"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
            style={{ color: "#3E54AC" }}
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

          <FormControlLabel
            value="Undo"
            control={<Radio />}
            label="Undo"
            onClick={(e) => {
              setSelected(e.target.value);
              setClicked(e.target.value);
            }}
            style={{ color: "#F16767" }}
          />
        </Stack>
      </RadioGroup>
    </Box>
  );
}
