import React from "react";
import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { tableColumn } from "../data/CustomViewData";
export const CustomCheckbox = ({
  handleChecked,
  id,
  setColumnChoice,
  columnchoice,
  load,
}) => {
  const [check, setCheck] = useState(handleChecked(id));

  const handleCheck = () => {
    if (check) {
      setCheck(false);
      const newSet = columnchoice.filter((x) => x.id != id);
      setColumnChoice(newSet);
    } else {
      setCheck(true);
      const newSet = tableColumn.filter((x) => x.id == id);
      const index = columnchoice.length - 1;

      setColumnChoice([
        ...columnchoice.slice(0, index),
        ...newSet,
        ...columnchoice.slice(index),
      ]);
    }
  };
  return (
    <div>
      <Checkbox checked={check} onChange={handleCheck} />
    </div>
  );
};
