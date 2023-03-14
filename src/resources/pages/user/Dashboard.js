import { Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Status from "./Status";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import SummaryTable from "./SummaryTable";
import Topbar from "../layouts/navs/Topbar";
import { Container } from "@mui/system";
import Main from "../layouts/navs/Main";
import AdminLayout from "../layouts/AdminLayout";
import { AdminSidebar } from "../layouts/navs/NavData";
import {
  FetchPurchaseOrder,
  FetchRecent,
  cardCount,
} from "../../../app/controllers/request/UserRequest";
import { Autocomplete, Box, TextField } from "@mui/material";
import CustomPaginationActionsTable from "../../../components/Table";
import { defaultcolumns } from "../../../data/CustomViewData";

function Dashboard({ usertype }) {
  const [data, setData] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [selection, setSelection] = useState([]);
  const [columnchoice, setColumnChoice] = useState(defaultcolumns);
  const [recent, setRecent] = useState([]);
  const [Countofcards, setCountofCards] = useState([]);

  const [emailed, setEmailed] = useState(new Date());
  const [delivered, setDelivered] = useState(new Date());
  const [completed, setCompleted] = useState(new Date());
  const [due, setDue] = useState(new Date());

  const [cardShow, setCardShow] = useState(false);
  const [cardCont, setCardcont] = useState([]);
  const [borderC, setBorderC] = useState("");

  const [recentfilter, setRecentfilter] = useState(false);
  const fetch = async () => {
    const res = await FetchPurchaseOrder();
    setData(res.data.data);

    if (res.data.refresh == 1) {
      window.location.reload();
    }

    const fetchrecent = await FetchRecent({});
    setRecent(fetchrecent.data.data);

    const fetchcountcard = await cardCount({});
    setCountofCards(fetchcountcard.data.data);
  };
  useEffect(() => {
    fetch();
  }, []);

  const handleSelection = (e) => {
    const id = e.target.value;
    const row = data.filter((x) => x.PK_posID == id);
    setCardShow(false);
    if (selection.length >= 1) {
      for (let { id: Rowid } of selection) {
        if (id === Rowid) {
          const newSet = selection.filter((x) => x.id != id);
          setSelection(newSet);
          return;
        }
      }
      setSelection([
        ...selection,
        {
          id: id,
          data: row,
        },
      ]);
      return;
    } else {
      setSelection([
        {
          id: id,
          data: row,
        },
      ]);
      return;
    }
  };

  const rows = [data];

  return (
    <div>
      {usertype == "admin" ? (
        <AdminLayout SidebarNav={AdminSidebar} />
      ) : (
        <UserLayout SidebarNav={UserSidebar} />
      )}

      <Main>
        <div>
          <Container maxWidth="xl">
            <Status
              Countofcards={Countofcards}
              cardShow={cardShow}
              setCardShow={setCardShow}
              cardCont={cardCont}
              setCardcont={setCardcont}
              borderC={borderC}
              setBorderC={setBorderC}
            />
          </Container>

          <Container maxWidth="xl" sx={{ py: 5 }}>
            <CustomPaginationActionsTable
              tabletype="dashboard"
              columns={columnchoice}
              rows={rows}
              supplier={supplier}
              handleSelection={handleSelection}
              setSelection={setSelection}
              selection={selection}
              setColumnChoice={setColumnChoice}
              columnchoice={columnchoice}
              setRecent={setRecent}
              setRecentfilter={setRecentfilter}
              recent={recent}
              recentfilter={recentfilter}
              emailed={emailed}
              setEmailed={setEmailed}
              delivered={delivered}
              setDelivered={setDelivered}
              completed={completed}
              setCompleted={setCompleted}
              due={due}
              setDue={setDue}
              cardShow={cardShow}
              setCardShow={setCardShow}
              cardCont={cardCont}
              setCardcont={setCardcont}
              borderC={borderC}
              setBorderC={setBorderC}
            />
          </Container>
        </div>
      </Main>
    </div>
  );
}

export default Dashboard;
