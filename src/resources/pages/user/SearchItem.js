import { Container } from "@mui/system";
import React from "react";
import Select from "../../../components/Search";

export default function SearchItem() {
  return (
    <div>
      <Container maxWidth="sm">
        <Select />
      </Container>
    </div>
  );
}
