import * as React from "react";
import Main from "../resources/pages/layouts/navs/Main";
import { Container } from "@mui/material";
import { CustomAccordion } from "./CustomAccordion";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Transaction({
  selection,
  trans,
  cancel,
  undeliver,
  extend,
  deliver,
  remarks,
  load,
  setLoad,
  setRefresh,
  UndoActions,
  UpdateDates,
  setExtenddis,
  extendDis,
  MarkCompleted,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Main>
      <div>
        {selection &&
          selection.map((row, key) => {
            const { id, data, view = false } = row;

            const { PONo, description, PODate, Terms } = data[0];
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
                UpdateDates={UpdateDates}
                extendDis={extendDis}
                setExtenddis={setExtenddis}
                MarkCompleted={MarkCompleted}
                view={view}
              />
            );
          })}
      </div>
    </Main>
  );
}
