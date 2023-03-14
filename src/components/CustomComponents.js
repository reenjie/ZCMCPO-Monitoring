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
import { FetchRecent } from "../app/controllers/request/UserRequest";
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
                  const update = {
                    labelled: label,
                    value: newValue,
                  };
                  const index = sort.findIndex((item) =>
                    item.labelled.toLowerCase().includes(label.toLowerCase())
                  );
                  const updatedItems = [...sort];
                  updatedItems[index] = update;
                  setSort(updatedItems);
                  return;
                }
              }

              setSort([
                ...sort,
                {
                  labelled: label,
                  value: newValue,
                  table: "select",
                },
              ]);
              return;
            } else {
              setSort([
                {
                  labelled: label,
                  value: newValue,
                  table: "select",
                },
              ]);
              return;
            }
          }}
          sx={{ width: "auto" }}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      </FormControl>
    </div>
  );
};

export const CustomButton = ({
  label,
  Icon,
  setOpenCustom,
  setRecentfilter,
  closeDrawer,
  sort,
  setSort,
  setscuFilter,
}) => {
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
        onClick={() => {
          if (label === "Custom View") {
            setOpenCustom(true);
          } else if (label === "Recent") {
            setRecentfilter(true);
            closeDrawer(false);
          } else if (label === "Extension") {
            setSort([
              {
                labelled: label,
                value: "Extended Item/s",
                table: "search",
              },
            ]);
            closeDrawer(false);
            setscuFilter(true);
          }
        }}
      >
        {label} {Icon}
      </Button>
    </FormControl>
  );
};

export const CustomDatePicker = ({ value, setValue, label, sort, setSort }) => {
  const handleDateChange = (date) => {
    setValue(date.toISOString().split("T")[0]);
    if (sort.length >= 1) {
      for (let { labelled } of sort) {
        if (labelled === label) {
          const update = {
            labelled: label,
            value: date.toISOString().split("T")[0],
          };
          const index = sort.findIndex((item) =>
            item.labelled.toLowerCase().includes(label.toLowerCase())
          );
          const updatedItems = [...sort];
          updatedItems[index] = update;
          setSort(updatedItems);
          return;
        }
      }

      setSort([
        ...sort,
        {
          labelled: label,
          value: date.toISOString().split("T")[0],
          table: "dateandtime",
        },
      ]);
      return;
    } else {
      setSort([
        {
          labelled: label,
          value: date.toISOString().split("T")[0],
          table: "dateandtime",
        },
      ]);
      return;
    }
  };
  return (
    <FormControl fullWidth size="small" sx={{ marginTop: "10px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField
              size="small"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              {...params}
            />
          )}
          format="yyyy-MM-dd"
        />
      </LocalizationProvider>
    </FormControl>
  );
};
