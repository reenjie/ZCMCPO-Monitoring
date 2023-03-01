import React from "react";
import {
  Accordion,
  AccordionSummary,
  Stack,
  Typography,
  AccordionDetails,
  Grid,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
export const CustomAccordion = ({ id, PONo, description, index }) => {
  const [expand, setExpand] = useState(false);

  return (
    <Accordion defaultExpanded={index == 0 ? true : false}>
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
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography variant="h5" component="div">
              {" "}
              Item Specifications
            </Typography>{" "}
            <Typography sx={{ fontSize: 12 }}>PO Number:</Typography>
            <Typography sx={{ fontSize: 12 }}>Supplier:</Typography>
            <Typography sx={{ fontSize: 12 }}>Item Description:</Typography>
            <Typography sx={{ fontSize: 12 }}>Brand:</Typography>
            <Typography sx={{ fontSize: 12 }}>Model:</Typography>
            <Typography sx={{ fontSize: 12 }}>Unit:</Typography>
            <Typography sx={{ fontSize: 12 }}>PO Date:</Typography>
            <Typography sx={{ fontSize: 12 }}>Emailed Date:</Typography>
            <Typography sx={{ fontSize: 12 }}>Delivery Term:</Typography>
            <Typography sx={{ fontSize: 12 }}>Due Date 1:</Typography>
            <Typography sx={{ fontSize: 12 }}>Due Date:</Typography>
            <Typography sx={{ fontSize: 12 }}>Delivered Date:</Typography>
            <Typography sx={{ fontSize: 12 }}>Completed Date:</Typography>
            <Typography sx={{ fontSize: 12 }}>Delay:</Typography>
            <Typography sx={{ fontSize: 12 }}>Price:</Typography>
            <Typography sx={{ fontSize: 12 }}>Quantity Order:</Typography>
            <Typography sx={{ fontSize: 12 }}>Quantity Delivered:</Typography>
            <Typography sx={{ fontSize: 12 }}>Undelivered Items:</Typography>
            <Typography sx={{ fontSize: 12 }}>Delivery Status:</Typography>
            <Typography sx={{ fontSize: 12 }}>Remarks:</Typography>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={6}>
            xxx
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
