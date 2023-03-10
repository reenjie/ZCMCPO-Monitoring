import React, { useState, useEffect } from "react";
import "../../../assets/css/action.css";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import { Button } from "@mui/material";
import Transaction from "../../../components/Transaction";
import { CiCircleList } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GetPOstatus,
  UndoAction,
} from "../../../app/controllers/request/UserRequest";
import { TransSkeleton } from "../../../components/TransSkeleton";
import ActionModal from "../../../components/ActionModal";
import { FaCogs } from "react-icons/fa";
import { SetStatus } from "../../../app/controllers/request/UserRequest";
import { notify } from "../../../components/Sweetalert";

const Action = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selection = location.state;
  const [openModal, setopenModal] = useState(false);
  const [trans, setTrans] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [load, setLoad] = useState(false);

  const fetch = async () => {
    const fetchrecent = await GetPOstatus({});
    setTrans(fetchrecent.data.data);
  };

  useEffect(() => {
    fetch();
    setRefresh(false);
    setLoad(false);
  }, [refresh]);

  const has_number = (string) => {
    return /\d/.test(string);
  };
  const action = async ({ id, type }) => {
    const res = await SetStatus({
      id: id,
      typeofaction: type,
    });

    if (res.status === 200) {
      setRefresh(true);
    }
  };

  const cancel = async (id) => {
    action({ id: id, type: "cancel" });
  };

  const undeliver = async (id) => {
    action({ id: id, type: "undeliver" });
  };

  const extend = async (id, Terms, duration_date, extendedCount) => {
    if (has_number(Terms)) {
      const deliveryTerms = Terms.match(/\d+/g)[0];

      const res = await SetStatus({
        id: id,
        typeofaction: "extend",
        terms: deliveryTerms,
        due: duration_date,
        extendedCount: extendedCount,
      });

      if (res.status === 200) {
        setRefresh(true);
        notify({
          type: "success",
          title: "Extended!",
          message: "Item/s was Extended Successfully!",
        });
      }
    } else {
      /* Save by default but modifiable Due. */

      const res = await SetStatus({
        id: id,
        typeofaction: "extend",
        terms: "default",
        due: duration_date,
        extendedCount: extendedCount,
      });

      if (res.status === 200) {
        setRefresh(true);
        notify({
          type: "success",
          title: "Extended!",
          message: "Item/s Due was Extended Successfully!",
        });
      }
    }
  };

  const deliver = async (id) => {
    action({ id: id, type: "deliver" });
    notify({
      type: "success",
      title: "Items Marked!",
      message: "Item/s was Marked Delivered!",
    });
  };

  const remarks = async (id) => {
    action({ id: id, type: "remarks" });
  };

  const UndoActions = async (id) => {
    const res = await UndoAction({
      id: id,
    });
    if (res.status === 200) {
      setRefresh(true);
    }
  };

  return (
    <div>
      <UserLayout SidebarNav={UserSidebar} view={true} />

      <Button
        variant="contained"
        size="small"
        style={{ position: "absolute", top: "70px", left: "20px" }}
        onClick={() => {
          navigate("/user");
        }}
      >
        Back
      </Button>

      <h2
        style={{
          marginTop: "70px",
          marginLeft: "100px",
          textTransform: "uppercase",
          color: "#658864",
        }}
      >
        <span
          style={{
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Managing Item{selection && selection.length >= 2 ? "s" : ""}{" "}
          <CiCircleList style={{ paddingTop: "2px" }} />
          <ActionModal
            selection={selection}
            Modalbtn={
              <Button
                color="success"
                variant="contained"
                size="small"
                onClick={() => {
                  setopenModal(true);
                }}
              >
                Advance Option{" "}
                <FaCogs style={{ marginLeft: "3px", fontSize: "17px" }} />
              </Button>
            }
            openModal={openModal}
            setopenModal={setopenModal}
          />
        </span>

        <span
          style={{
            padding: "5px",
            borderRadius: "5px",
          }}
        ></span>
      </h2>

      <div style={{ marginTop: "-167px" }}>
        {trans.length >= 1 ? (
          <Transaction
            selection={selection}
            trans={trans}
            cancel={cancel}
            undeliver={undeliver}
            extend={extend}
            deliver={deliver}
            remarks={remarks}
            load={load}
            setLoad={setLoad}
            setRefresh={setRefresh}
            UndoActions={UndoActions}
          />
        ) : (
          <TransSkeleton />
        )}
      </div>
    </div>
  );
};

export default Action;
