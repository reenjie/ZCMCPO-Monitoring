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
export const CustomSelect = ({ label, data }) => {
  return (
    <div>
      <FormControl fullWidth size="small" sx={{ marginTop: "10px" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={[]}
          label="Supplier"
        >
          {data.map((row) => {
            return <MenuItem value={row.value}>{row.value}</MenuItem>;
          })}
        </Select>
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
