import React, { useState, useEffect } from "react";
import moment from "moment";
import { TableRow, TableCell, Button } from "@mui/material";
import { BsEye } from "react-icons/bs";
import {
  SetViewed,
  approvedUndo,
} from "../app/controllers/request/UserRequest";
import { manage } from "../app/controllers/Authorize";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { question } from "./Sweetalert";
import { RotatingLines } from "react-loader-spinner";
import notf from "../assets/image/notfound.jpg";

export const TableApproval = ({ row, columns, po, setFetch }) => {
  const [load, setLoad] = useState(false);
  const [loadbtn, setLoadbtn] = useState(false);
  const navigate = useNavigate();
  const [loaderf, setLoaderf] = useState(false);
  const HandleApprove = async () => {
    const req = await approvedUndo({
      id: row[0].PK_posID,
    });
    if (req.status === 200) {
      setFetch(true);
    }
  };
  useEffect(() => {
    loadsearch();
  }, []);

  const loadsearch = () => {
    setLoaderf(false);
    setTimeout(() => {
      setLoaderf(true);
    }, 3000);
  };
  return row.length >= 1 ? (
    row.map((x) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
          {columns.map((column) => {
            const value = x[column.id];
            return (
              <TableCell align="center" style={{ fontSize: "13px" }}>
                {column.id == "created_at" ? (
                  moment(value).format(" h:mm:ssa MMMM Do YYYY")
                ) : column.id == "actiontypes" ? (
                  "Undo Actions"
                ) : column.id == "action" ? (
                  <>
                    <LoadingButton
                      variant="text"
                      size="small"
                      loading={load}
                      onClick={async (e) => {
                        setLoad(true);
                        const selected = [
                          {
                            id: x.PK_posID,
                            data: po.filter((p) => p.PK_posID == x.PK_posID),
                            view: true,
                          },
                        ];

                        const result = await SetViewed({
                          selection: selected,
                        });
                        if (result.status == 200) {
                          navigate(manage(), { state: selected });
                        }
                      }}
                    >
                      <h5>
                        <BsEye style={{ fontSize: "18px" }} />
                      </h5>
                    </LoadingButton>

                    <LoadingButton
                      // loading={loadbtn}
                      sx={{ marginLeft: "5px" }}
                      variant="contained"
                      size="small"
                      onClick={(e) => {
                        setLoadbtn(true);
                        question({
                          title: "Are you sure? ",
                          message: "to allow undoing this actions.",
                          type: "warning",
                          btndanger: true,
                          action: HandleApprove,
                        });
                      }}
                    >
                      <h5>Approve</h5>
                    </LoadingButton>
                  </>
                ) : (
                  value
                )}
              </TableCell>
            );
          })}
        </TableRow>
      );
    })
  ) : (
    <TableRow>
      <TableCell style={{ textAlign: "center" }} colSpan={columns.length}>
        <img src={notf} className="notfound" />
        <h3>
          {loaderf ? (
            "No Data Found"
          ) : (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="40"
              visible={true}
            />
          )}
        </h3>
      </TableCell>
    </TableRow>
  );
};
