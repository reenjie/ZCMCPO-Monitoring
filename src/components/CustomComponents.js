import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
export const CustomSelect = ({ label, data, sort, setSort }) => {
  const [val, setVal] = useState();
  return (
    <div>
      <FormControl fullWidth size="small" sx={{ marginTop: "10px" }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={val}
          options={data}
          disableClearable
          size={"small"}
          onChange={(event, newValue) => {
            setVal(newValue);
            if (sort.length >= 1) {
              for (let { labelled } of sort) {
                if (labelled === label) {
                  /* 
                  UPDATE SORT ARRAY WITH SPECIFIC KEY
                  */
                  console.log(label);

                  return;
                }
              }

              setSort([
                ...sort,
                {
                  labelled: label,
                  value: newValue,
                },
              ]);
              return;
            } else {
              setSort([
                {
                  labelled: label,
                  value: newValue,
                },
              ]);
              return;
            }
          }}
          sx={{ width: "auto" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              // onChange={(event) => {
              //   console.log(event.target.value);
              // }}
            />
          )}
        />
      </FormControl>
    </div>
  );
};

//
export const CustomButton = ({ label, Icon }) => {
  return (
    <FormControl
      fullWidth
      size="small"
      sx={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <Button
        color="primary"
        variant="outlined"
        style={{ textTransform: "capitalize" }}
      >
        {label} {Icon}
      </Button>
    </FormControl>
  );
};

export const CustomDatePicker = ({ value, setValue, label }) => {
  return (
    <FormControl fullWidth size="small" sx={{ marginTop: "10px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              size="small"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              {...params}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
};
