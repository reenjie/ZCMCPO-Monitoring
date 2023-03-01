import * as React from "react";
import Main from "../resources/pages/layouts/navs/Main";
import { Container } from "@mui/material";
import { CustomAccordion } from "./CustomAccordion";
import { useState } from "react";

export default function Transaction({ selection }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Main>
      <div>
        {selection.map((row, key) => {
          const { id, data } = row;
          const { PONo, description } = data[0];
          return (
            <CustomAccordion
              key={key}
              index={key}
              PONo={PONo}
              id={id}
              description={description}
            />
          );
        })}
      </div>
    </Main>
  );
}
