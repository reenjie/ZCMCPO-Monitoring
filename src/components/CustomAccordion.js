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
import "../../src/assets/css/action.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";
import {
  AiOutlineNumber,
  AiOutlineShop,
  AiOutlineShopping,
  AiOutlineTags,
  AiFillCalculator,
  AiFillEuroCircle,
  AiFillTags,
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlineOrderedList,
  AiFillMail,
  AiOutlineFileProtect,
  AiFillWarning,
  AiFillAlert,
  AiOutlineClose,
  AiFillDatabase,
  AiFillCalendar,
  AiOutlineFileDone,
  AiTwotoneEdit,
} from "react-icons/ai";
import ManageItems from "./ManageItems";
export const CustomAccordion = ({ id, PONo, description, PODate, index }) => {
  const [expand, setExpand] = useState(false);

  return (
    <Accordion
      defaultExpanded={index == 0 ? true : false}
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
          <Grid item md={8}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "15px",
                color: "#183A1D",
              }}
            >
              {" "}
              Item Specifications
            </Typography>{" "}
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiFillEuroCircle color="#183A1D" size="14px" />
              Price:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiOutlineOrderedList color="#183A1D" size="14px" />
              Quantity Order:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiFillTags color="#183A1D" size="14px" />
              Brand:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiOutlineTags color="#183A1D" size="14px" />
              Model:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiFillCalculator color="#183A1D" size="14px" />
              Unit:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiOutlineShop color="#183A1D" size="14px" />
              Supplier:
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "15px", color: "#EF5B0C" }}
            >
              Terms & Conditions
            </Typography>{" "}
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiFillMail color="#183A1D" size="14px" /> Emailed Date:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              <AiOutlineFileProtect color="#183A1D" size="14px" />
              Delivery Term:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiFillWarning color="red" size="14px" />
              Delay:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiFillAlert color="red" size="14px" />
              DueDate 1:
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              <AiFillAlert color="orange" size="14px" />
              Due Date:
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "15px", color: "#183A1D" }}
            >
              Delivery Status: Completed
            </Typography>{" "}
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiOutlineClose color="red" size="14px" /> Undelivered Items:
            </Typography>
            <Grid container direction="row">
              <Typography sx={{ fontSize: 15, mr: 2 }}>
                {" "}
                <AiFillDatabase color="#183A1D" size="14px" />
                Quantity Delivered: 56 items
              </Typography>
              <Typography sx={{ fontSize: 15, mr: 2 }}>
                {" "}
                <AiOutlineCalendar color="#183A1D" size="14px" />
                Delivered Date: 06-15-34
              </Typography>
              <Typography sx={{ fontSize: 15 }}>
                {" "}
                <AiFillCalendar color="#183A1D" size="14px" />
                Completed Date:
              </Typography>
            </Grid>
            <Typography sx={{ fontSize: 15 }}>
              {" "}
              <AiOutlineFileDone color="#183A1D" size="14px" />
              Remarks:
            </Typography>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={4}>
            <ManageItems />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
