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
import { addDays } from "date-fns";
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
  const handleDateChange = (e) => {
    setValue(e.currentTarget.value);
    if (sort.length >= 1) {
      for (let { labelled } of sort) {
        if (labelled === label) {
          const update = {
            labelled: label,
            value: e.currentTarget.value,
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
          value: e.currentTarget.value,
          table: "dateandtime",
        },
      ]);
      return;
    } else {
      setSort([
        {
          labelled: label,
          value: e.currentTarget.value,
          table: "dateandtime",
        },
      ]);
      return;
    }
  };
  return (
    <FormControl fullWidth size="small" sx={{ marginTop: "10px" }}>
      <h5 style={{ color: "grey" }}> {label}</h5>
      <TextField type={"date"} onChange={handleDateChange}></TextField>
    </FormControl>
  );
};
