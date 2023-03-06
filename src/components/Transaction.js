import * as React from "react";
import Main from "../resources/pages/layouts/navs/Main";
import { Container } from "@mui/material";
import { CustomAccordion } from "./CustomAccordion";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Transaction({ selection, trans }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Main>
      <div>
        {selection &&
          selection.map((row, key) => {
            const { id, data } = row;

            const { PONo, description, PODate } = data[0];
            return (
              <CustomAccordion
                key={key}
                index={key}
                PONo={PONo}
                id={id}
                description={description}
                PODate={PODate}
                data={data[0]}
                trans={trans}
              />
            );
          })}
      </div>
    </Main>
  );
}
