import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserLayout from "../resources/pages/layouts/UserLayout";
import { UserSidebar } from "../resources/pages/layouts/navs/UserNavData";
import Main from "../resources/pages/layouts/navs/Main";
import Action from "../resources/pages/user/Action";

export default function Transaction({ PoNo, itemdex, det }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Main>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>{PoNo}</Typography>
            <Typography sx={{ color: "text.secondary" }}>{itemdex}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{det}</Typography>
          </AccordionDetails>
        </Accordion>
      </Main>
    </div>
  );
}
