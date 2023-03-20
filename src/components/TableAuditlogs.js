import React from "react";
import moment from "moment";
import { TableRow, TableCell } from "@mui/material";

export const TableAuditlogs = ({ row, columns }) => {
  return row.map((x) => {
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        {columns.map((column) => {
          const value = x[column.id];
          return (
            <TableCell align="center" style={{ fontSize: "13px" }}>
              {column.id == "created_at"
                ? moment(value).format(" h:mm:ssa MMMM Do YYYY")
                : value}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
};
