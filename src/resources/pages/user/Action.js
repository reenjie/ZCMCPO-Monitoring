import React, { useState, useEffect } from "react";
import "../../../assets/css/action.css";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import { Button } from "@mui/material";
import Transaction from "../../../components/Transaction";
import { CiCircleList } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { GetPOstatus } from "../../../app/controllers/request/UserRequest";
import { TransSkeleton } from "../../../components/TransSkeleton";
import ActionModal from "../../../components/ActionModal";
import { FaCogs } from "react-icons/fa";
import { SetStatus } from "../../../app/controllers/request/UserRequest";
const Action = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selection = location.state;
  const [openModal, setopenModal] = useState(false);
  const [trans, setTrans] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [load, setLoad] = useState(false);
  const applyall = () => {};
  const fetch = async () => {
    const fetchrecent = await GetPOstatus({});
    setTrans(fetchrecent.data.data);
  };

  useEffect(() => {
    fetch();
    setRefresh(false);
    setLoad(false);
  }, [refresh]);

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

  const extend = async (id, Terms) => {
    const deliveryTerms = Terms.match(/\d+/g);
    console.log(deliveryTerms[0]);
    //action({ id: id, type: "extend" });
  };

  const deliver = async (id) => {
    action({ id: id, type: "deliver" });
  };

  const remarks = async (id) => {
    action({ id: id, type: "remarks" });
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
          />
        ) : (
          <TransSkeleton />
        )}
      </div>
    </div>
  );
};

export default Action;
