import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

export default function ActionCheckbox() {
  const [state, setState] = React.useState({
    cancelled: true,
    undelivered: false,
    extended: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { cancelled, undelivered, extended } = state;
  //   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Choose Transaction</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={cancelled}
                onChange={handleChange}
                name="cancelled"
              />
            }
            label="Cancelled"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={undelivered}
                onChange={handleChange}
                name="undelivered"
              />
            }
            label="Undelivered"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={extended}
                onChange={handleChange}
                name="extended"
              />
            }
            label="Cancelled"
          />
        </FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={undelivered}
              onChange={handleChange}
              name="undelivered"
            />
          }
          label="Extended"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={undelivered}
              onChange={handleChange}
              name="undelivered"
            />
          }
          label="Delivered"
        />
        <FormHelperText sx={{ color: "red" }}>
          Choose only one transaction!
        </FormHelperText>
      </FormControl>
      {/* <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl> */}
    </Box>
  );
}
