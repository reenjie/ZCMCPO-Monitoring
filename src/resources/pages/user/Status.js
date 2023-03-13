import { Grid } from "@mui/material";
import React from "react";
import BasicCard from "../../../components/Card";
import { FcOvertime, FcShipped, FcInTransit, FcCancel } from "react-icons/fc";
import { RotatingLines } from "react-loader-spinner";

const Status = ({
  Countofcards,
  cardShow,
  setCardShow,
  cardCont,
  setCardcont,
  borderC,
  setBorderC,
}) => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{ width: "100%" }}
      >
        <BasicCard
          title={"Undelivered"}
          description={
            Countofcards.undelivered ? (
              Countofcards.undelivered.length
            ) : (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={true}
              />
            )
          }
          data={Countofcards.undelivered}
          icon={<FcInTransit size={50} />}
          color1="#F48484"
          setCardcont={setCardcont}
          setCardShow={setCardShow}
          setBorderC={setBorderC}
        />

        <BasicCard
          title={"Cancelled"}
          description={
            Countofcards.cancelled ? (
              Countofcards.cancelled.length
            ) : (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={true}
              />
            )
          }
          data={Countofcards.cancelled}
          icon={<FcCancel size={50} />}
          color1="#F48484"
          setCardcont={setCardcont}
          setCardShow={setCardShow}
          setBorderC={setBorderC}
        />

        <BasicCard
          title={"Extended"}
          description={
            Countofcards.extended ? (
              Countofcards.extended.length
            ) : (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={true}
              />
            )
          }
          data={Countofcards.extended}
          icon={<FcOvertime size={50} />}
          color1="#FEBE8C"
          setCardcont={setCardcont}
          setCardShow={setCardShow}
          setBorderC={setBorderC}
        />

        <BasicCard
          title={"Delivered"}
          description={
            Countofcards.delivered ? (
              Countofcards.delivered.length
            ) : (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={true}
              />
            )
          }
          data={Countofcards.delivered}
          icon={<FcShipped size={50} />}
          color1="#68B984"
          setCardcont={setCardcont}
          setCardShow={setCardShow}
          setBorderC={setBorderC}
        />
      </Grid>
    </div>
  );
};

export default Status;
