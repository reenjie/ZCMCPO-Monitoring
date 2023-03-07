import React, { useState, useRef } from "react";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { SetEmailed } from "../app/controllers/request/UserRequest";
import { LoadingButton } from "@mui/lab";
import { notify } from "./Sweetalert";
export const SetEmailedDate = ({ id, handleClose, setRefresh, Terms }) => {
  const [em, setEm] = useState();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const day = useRef();
  const check = useRef();

  const has_number = (string) => {
    return /\d/.test(string);
  };
  const handleclick = async () => {
    setLoad(true);
    const save = async () => {
      if (has_number(Terms)) {
        const deliveryTerms = Terms.match(/\d+/g)[0];

        const req = await SetEmailed({
          emDate: em,
          id: id,
          terms: deliveryTerms,
        });

        if (req.status === 200) {
          notify({
            type: "success",
            title: "Emailed Date Set!",
            message: "Emailed Date Set Successfully!",
          });
          setLoad(false);
          setRefresh(true);
          handleClose(false);
        }
      } else {
        /* Save by default but modifiable Due. */
        const req = await SetEmailed({
          emDate: em,
          id: id,
          terms: "default",
        });

        if (req.status === 200) {
          notify({
            type: "success",
            title: "Emailed Date Set!",
            message: "Emailed Date Set Successfully!",
          });
          setLoad(false);
          setRefresh(true);
          handleClose(false);
        }
      }
    };
    if (em) {
      save();
    } else {
      setError(true);
      setLoad(false);
    }
  };

  return (
    <div style={{ width: "400px", height: "auto" }}>
      <h4>Set Emailed Date</h4>
      <div style={{ marginBottom: "20px" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          type={"date"}
          error={error}
          style={{ marginBottom: "5px" }}
          onChange={(e) => {
            setEm(e.target.value);
            setError(false);
          }}
          href={day}
          value={em}
        />
        <FormControlLabel
          onClick={(e) => {
            if (e.target.checked == true) {
              //uncheck
              const thisday = new Date();
              const isoString = thisday.toISOString();
              const formattedDate = isoString.substring(0, 10);
              setEm(formattedDate);
            } else {
              setEm("");
            }
          }}
          control={<Checkbox />}
          label="Today"
        />

        {error && (
          <span style={{ color: "#F16767", fontSize: "12px" }}>
            Please provide a Date
          </span>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            handleClose(false);
            setEm("");
            setError(false);
          }}
          size="small"
        >
          Close
        </Button>
        <LoadingButton
          sx={{ marginLeft: "5px" }}
          onClick={handleclick}
          variant="contained"
          size="small"
          loading={load}
        >
          Save Changes
        </LoadingButton>
      </div>
    </div>
  );
};
