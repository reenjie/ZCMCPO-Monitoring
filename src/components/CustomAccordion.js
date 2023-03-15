import React from "react";
import {
  Accordion,
  AccordionSummary,
  Stack,
  Typography,
  AccordionDetails,
  Grid,
  Divider,
  Card,
  Box,
  Badge,
} from "@mui/material";
import "../../src/assets/css/action.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";

import ManageItems from "./ManageItems";
import { AccordionData } from "../data/AccordionData";
import TableStatus from "./tableStatus";
export const CustomAccordion = ({
  id,
  PONo,
  description,
  PODate,
  index,
  data,
  trans,
  cancel,
  undeliver,
  extend,
  deliver,
  remarks,
  load,
  setLoad,
  setRefresh,
  Terms,
  UndoActions,
  UpdateDates,
  extendDis,
  setExtenddis,
  MarkCompleted,
}) => {
  const [expand, setExpand] = useState(false);
  const formatString = (numberstring) => {
    let formattedNumberString = Number(numberstring).toLocaleString();
    return formattedNumberString;
  };

  const has_number = (string) => {
    return /\d/.test(string);
  };
  return (
    <Accordion
      defaultExpanded={true}
      sx={{
        borderLeft: "15px solid #4E944F ",
        borderRight: "15px solid #4E944F ",
        borderRadius: "5px",
        backgroundColor: "#E1EEDD",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack>
          <Typography sx={{ fontWeight: "bold", color: "#2B3467" }}>
            PO# {PONo}{" "}
          </Typography>

          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            {description}
          </Typography>
          <Typography sx={{ fontSize: 15 }}> PO Date:{PODate}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          borderTop: "5px solid #F5DF99 ",
          backgroundColor: "#FFFF",
          borderRadius: "15px",
        }}
      >
        <Grid container spacing={15}>
          <Grid item md={6}>
            {AccordionData.map((x) => {
              return (
                <Typography
                  sx={{
                    fontWeight: x.fontWeight,
                    fontSize: x.fontSize,
                    color: x.color,
                  }}
                >
                  <span>
                    {" "}
                    {x.icon} {x.title}
                  </span>
                  <span style={{ float: "right", fontWeight: "bold" }}>
                    {x.id == "price" || x.id == "vatamt" || x.id == "totAmount"
                      ? "₱ "
                      : ""}
                    {x.id == "price" ||
                    x.id == "vatamt" ||
                    x.id == "totAmount" ||
                    x.id == "qty" ? (
                      formatString(data[x.id])
                    ) : x.id == "Terms" ? (
                      has_number(data[x.id]) ? (
                        data[x.id]
                      ) : (
                        <>
                          <span> {data[x.id]} |</span>
                          <span style={{ fontSize: "11px" }}>
                            ( By Default: 15 Days Terms added)
                          </span>
                        </>
                      )
                    ) : (
                      data[x.id]
                    )}
                  </span>
                </Typography>
              );
            })}
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={6}>
            <Card variant="outlined" sx={{ marginTop: "7px" }}>
              <Box p={2}>
                <TableStatus
                  trans={trans}
                  id={data.PK_posID}
                  setRefresh={setRefresh}
                  UpdateDates={UpdateDates}
                  extendDis={extendDis}
                  setExtenddis={setExtenddis}
                />
              </Box>
            </Card>
            <Grid container>
              <Grid item md={10}>
                {" "}
                <ManageItems
                  id={id}
                  trans={trans}
                  cancel={cancel}
                  undeliver={undeliver}
                  extend={extend}
                  deliver={deliver}
                  remarks={remarks}
                  load={load}
                  setLoad={setLoad}
                  setRefresh={setRefresh}
                  Terms={Terms}
                  UndoActions={UndoActions}
                  extendDis={extendDis}
                  setExtenddis={setExtenddis}
                  MarkCompleted={MarkCompleted}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
