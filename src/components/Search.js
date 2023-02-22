import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { CiEraser, CiSquarePlus } from "react-icons/ci";
import "../assets/css/dashboard.css";
import { useRef } from "react";
import { useState } from "react";
export default function Search({
  search,
  setSearch,
  rows,
  contentSearch = [],
}) {
  const [autoinfo, setAutoinfo] = useState("");
  /* Create New array from existing Array */
  const data = rows
    ? rows[0].map((row, keys) => {
        return {
          key: row.PK_posID,
          id: row.PK_posID,
          label: keys + 1 + " | PO#" + row.PONo + " | " + row.supplier,
          ponumber: row.PONo,
        };
      })
    : [];

  return (
    <div style={{ display: "inline-block" }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        value={autoinfo}
        options={data}
        disableClearable
        size={"small"}
        onChange={(event, newValue) => {
          setSearch(newValue.ponumber);
          setAutoinfo(newValue.label);
        }}
        sx={{ width: 700, pt: 3, mb: 1 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for PO Number"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        )}
      />

      <div style={{ float: "right" }}>
        <Button
          variant="text"
          size="medium"
          color="info"
          style={{ marginRight: "7px", marginBottom: "5px" }}
          onClick={() => {
            setSearch("");
            setAutoinfo("");
          }}
        >
          Clear Search{" "}
          <CiEraser
            style={{ marginLeft: "5px", fontSize: "18px", fontWeight: "Bold" }}
          />
        </Button>

        <Button
          variant={
            search ? (contentSearch.length >= 1 ? "contained" : "text") : "text"
          }
          size="medium"
          className="secondary"
          color={
            search
              ? contentSearch.length >= 1
                ? "primary"
                : "warning"
              : "warning"
          }
          sx={
            search
              ? contentSearch.length >= 1
                ? { cursor: "pointer" }
                : { color: "gray" }
              : { color: "gray" }
          }
          disabled={search ? (contentSearch.length >= 1 ? false : true) : true}
          style={{ marginRight: "5px", marginBottom: "5px" }}
        >
          Select All
          <CiSquarePlus
            style={{
              marginLeft: "5px",
              fontSize: "18px",
              fontWeight: "Bold",
            }}
          />
        </Button>
      </div>
    </div>
  );
}
