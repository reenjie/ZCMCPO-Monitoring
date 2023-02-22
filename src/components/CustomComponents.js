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
export const CustomSelect = ({ label, data }) => {
  return (
    <div>
      <FormControl fullWidth size="small" sx={{ marginTop: "10px" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={[]}
          label="Supplier"
        >
          {data.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select> */}

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={[]}
          options={data}
          disableClearable
          size={"small"}
          onChange={(event, newValue) => {
            console.log(newValue);
          }}
          sx={{ width: 700, pt: 3, mb: 1 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for PO Number"
              onChange={(event) => {
                console.log(event.target.value);
              }}
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
