import React, { useState, useEffect } from "react";
import "../../../assets/css/action.css";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import Main from "../layouts/navs/Main";
import {
  Container,
  Button,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import Transaction from "../../../components/Transaction";
import { Selection } from "../../../components/Selection";
import { useLocation } from "react-router-dom";
const Action = () => {
  const [PONo, setPONo] = useState("");
  const location = useLocation();
  const selection = location.state;
  console.log(selection);
  useEffect(() => {
    for (let { id, data } of selection) {
      console.log(`${id} is ${id} years old!!!`);
      for (const { PONo, fullname, description, category, unit } of data) {
        console.log(
          `${PONo}: ${fullname}:  ${description}:  ${category}: ${unit}`
        );
      }
    }
  });

  return (
    <>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <div className="card-grid">
          <Transaction PoNo={PONo} />
        </div>
      </Main>
    </>
  );
};

export default Action;
