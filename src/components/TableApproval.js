import React, { useState } from "react";
import moment from "moment";
import { TableRow, TableCell, Button } from "@mui/material";
import { BsEye } from "react-icons/bs";
import { SetViewed } from "../app/controllers/request/UserRequest";
import { manage } from "../app/controllers/Authorize";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
export const TableApproval = ({ row, columns, po }) => {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  return row.map((x) => {
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

                  <Button
                    sx={{ marginLeft: "5px" }}
                    variant="contained"
                    size="small"
                  >
                    <h5>Approve</h5>
                  </Button>
                </>
              ) : (
                value
              )}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
};
