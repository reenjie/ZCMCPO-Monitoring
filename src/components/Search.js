import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { CiEraser, CiSquarePlus } from "react-icons/ci";
import "../assets/css/dashboard.css";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { LoadingButton } from "@mui/lab";
export default function Search({
  search,
  setSearch,
  rows,
  contentSearch = [],
  setscuFilter,
  setSort,
  selection,
  scuFilter,
}) {
  const [autoinfo, setAutoinfo] = useState("");
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
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
          setSort([]);
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
            setscuFilter(false);
            setSort([]);
          }}
        >
          Clear Search{" "}
          <CiEraser
            style={{ marginLeft: "5px", fontSize: "18px", fontWeight: "Bold" }}
          />
        </Button>

        <LoadingButton
          variant={
            search
              ? contentSearch().length >= 1
                ? "contained"
                : "text"
              : scuFilter
              ? "contained"
              : "text"
          }
          size="medium"
          className="secondary"
          color={
            search
              ? contentSearch().length >= 1
                ? "primary"
                : "warning"
              : scuFilter
              ? "primary"
              : "warning"
          }
          sx={
            search
              ? contentSearch().length >= 1
                ? { cursor: "pointer" }
                : { color: "gray" }
              : scuFilter
              ? { color: "white" }
              : { color: "gray" }
          }
          disabled={
            search
              ? contentSearch().length >= 1
                ? false
                : true
              : scuFilter
              ? false
              : true
          }
          style={{ marginRight: "5px", marginBottom: "5px" }}
          loading={load}
          onClick={() => {
            const selected = contentSearch().map((x) => {
              return {
                id: x.PK_posID,
                data: [x],
              };
            });

            if (selected.length <= 100) {
              console.log("fit");
              // setLoad(true);
              // setTimeout(() => {
              //   navigate("/manage", { state: selected });
              // }, 2000);
            } else {
              console.log("lapse");
            }
          }}
        >
          Select All
          <CiSquarePlus
            style={{
              marginLeft: "5px",
              fontSize: "18px",
              fontWeight: "Bold",
            }}
          />
        </LoadingButton>
      </div>
    </div>
  );
}
