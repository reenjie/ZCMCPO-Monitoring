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
  const location = useLocation();
  const selection = location.state;
  console.log(selection);

  const data = selection.map(({ data }) => data);
  console.log(data);

  return (
    <>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <div className="card-grid">
          {data[0].map((info) => {
            return (
              <>
                <Transaction
                  ponumber={info.PONo}
                  itemdex={info.itemdesc}
                  details={
                    "Item Description:" +
                    info.itemdesc +
                    "\n" +
                    "Item Description:" +
                    info.itemdesc
                  }
                />
              </>
            );
          })}
        </div>
      </Main>
    </>
  );
};

export default Action;
