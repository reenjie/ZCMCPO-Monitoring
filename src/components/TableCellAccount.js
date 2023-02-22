import React from "react";
import { TableCell, Box, ButtonGroup } from "@mui/material";
import { Edit, Delete } from "./Action";
import { Badge } from "@mui/icons-material";

export const TableCellAccount = ({
  column,
  columnid,
  columnalign,
  columnformat,
  value,
  tabletype,
  setFetch,
  roles,
  row,
  dataid,
  Authuserid,
}) => {
  return (
    <TableCell key={columnid} align={columnalign}>
      {columnformat && typeof value === "number" ? (
        column.format(value)
      ) : columnid == "action" ? (
        <>
          {Authuserid == dataid ? (
            <Box textAlign={"center"}>
              <Badge color="secondary" badgeContent={0} showZero>
                ass
              </Badge>
            </Box>
          ) : (
            <Box textAlign={"center"}>
              <ButtonGroup variant="text" aria-label="text button group">
                <Edit
                  data={row}
                  tabletype={tabletype}
                  setFetch={setFetch}
                  roles={roles}
                />
                <Delete data={row} tabletype={tabletype} setFetch={setFetch} />
              </ButtonGroup>
            </Box>
          )}
        </>
      ) : (
        value
      )}
    </TableCell>
  );
};
