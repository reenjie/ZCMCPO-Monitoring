import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Chip,
} from "@mui/material";

import { SlClose } from "react-icons/sl";
import { FiCheckCircle } from "react-icons/fi";
import { HiTable } from "react-icons/hi";
import { tableColumn, defaultcolumns } from "../data/CustomViewData";
import { CustomCheckbox } from "./CustomCheckbox";
import { SlReload } from "react-icons/sl";

export const CustomView = ({
  setOpenCustom,
  setColumnChoice,
  columnchoice,
  setOpendrawer,
}) => {
  const [load, setLoad] = useState(false);

  const handleChecked = (id) => {
    for (let { id: columnid } of columnchoice) {
      if (columnid == id) {
        if (id == "status_") {
          return false;
        } else {
          return true;
        }
      }
    }
    return false;
  };

  const handleReset = () => {
    setLoad(true);
    setColumnChoice(defaultcolumns);
    setOpenCustom(false);
    setTimeout(() => {
      setOpenCustom(true);
    }, 500);
  };

  return (
    <Box height={"100vh"} p={5}>
      <Container maxWidth="lg">
        <h2>Custom Table Header</h2>
        <span style={{ fontSize: "12px" }}>Manage Table View</span>
        <div style={{ padding: "10px" }}>
          <Button variant="outlined" size="small" onClick={handleReset}>
            Reset To Default <SlReload style={{ marginLeft: "3px" }} />
          </Button>
          <br />
          <span style={{ fontSize: "12px", color: "#5B8FB9" }}>
            Current View
          </span>
          <br />

          {columnchoice.map((cc) => {
            return (
              <div style={{ display: "inline-block" }}>
                {cc.label ? (
                  <div>
                    {cc.id == "status_" || cc.id == "action" ? (
                      <Chip
                        icon={<HiTable />}
                        label={cc.label}
                        variant="outlined"
                      />
                    ) : (
                      <Chip
                        icon={<HiTable />}
                        label={cc.label}
                        color="success"
                        // onDelete={() => {
                        //   const newSetofColumn = columnchoice.filter(
                        //     (x) => x.id != cc.id
                        //   );
                        //   setColumnChoice(newSetofColumn);
                        //   setLoad(true);
                        // }}
                        variant="outlined"
                      />
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div style={{ height: "40vh", overflowY: "scroll" }}>
          <FormGroup style={{ marginTop: "15px" }}>
            {tableColumn.map((row) => {
              return (
                <FormControlLabel
                  key={row.id}
                  control={
                    <CustomCheckbox
                      handleChecked={handleChecked}
                      id={row.id}
                      setColumnChoice={setColumnChoice}
                      columnchoice={columnchoice}
                      load={load}
                    />
                  }
                  label={row.label}
                />
              );
            })}
          </FormGroup>
        </div>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginLeft: "5px", float: "right", marginTop: "10px" }}
          onClick={() => {
            setOpenCustom(false);
            setOpendrawer(false);
          }}
        >
          Close <SlClose style={{ marginLeft: "3px" }} />
        </Button>
      </Container>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
        }}
      ></div>
    </Box>
  );
};
