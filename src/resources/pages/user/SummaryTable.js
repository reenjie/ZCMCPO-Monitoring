import React from "react";
import { useState } from "react";
import EnhancedTable from "../../../components/UserTable";
import { Modal } from "@mui/material";

function SummaryTable({ usertype, data }) {
  const [closeModal, setCloseModal] = useState(false);

  function createData(name, code, population, size, dataid) {
    const density = population / size;
    return { name, code, population, size, density, dataid };
  }

  return (
    <div>
      {/* <h3> SUMMARY </h3> */}

      <EnhancedTable usertype={usertype} sx={{ pt: 3 }} data={data} />
    </div>
  );
}

export default SummaryTable;
