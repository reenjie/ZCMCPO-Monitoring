import React from "react";
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
const Action = () => {
  const delivered = () => {};
  return (
    <>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <div className="card-grid">
          <Transaction />
        </div>
      </Main>
    </>
  );
};

export default Action;
