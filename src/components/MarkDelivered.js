import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { SetDeliveredDate } from "../app/controllers/request/UserRequest";
import { LoadingButton } from "@mui/lab";
import { notify } from "./Sweetalert";
export const MarkDelivered = ({ id, handleClose, setRefresh }) => {
  const [em, setEm] = useState();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [uncheck, setUncheck] = useState(false);
  const maxDate = new Date().toISOString().split("T")[0];
  const handleclick = async () => {
    setLoad(true);
    const save = async () => {
      const req = await SetDeliveredDate({
        id: id,
        em: em,
      });
      if (req.status === 200) {
        setRefresh(true);
        handleClose(false);
        notify({
          type: "success",
          title: "Delivered Date Set!",
          message: "Delivered Date Set Successfully!",
        });
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
      <h4 style={{ marginBottom: "20px" }}>Set Delivered Date</h4>
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
          value={em}
          disabled={uncheck}
          inputProps={{
            max: maxDate,
          }}
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
              setEm(formattedDate);
              setUncheck(true);
              setError(false);
            } else {
              setEm("");
              setUncheck(false);
            }
          }}
          control={<Checkbox />}
          label="Today"
        />
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
          color="error"
        >
          Close
        </Button>
        <LoadingButton
          sx={{ marginLeft: "5px" }}
          variant="contained"
          color="success"
          size="small"
          loading={load}
          onClick={handleclick}
        >
          Set Delivered
        </LoadingButton>
      </div>
    </div>
  );
};
