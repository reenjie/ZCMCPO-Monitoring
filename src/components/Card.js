import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import "../../src/assets/css/card.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);
export default function BasicCard({
  title,
  description,
  icon,
  desc,
  style,
  bgcolor,
  bgcolor1,
  color,
  color1,
  data,
  setCardcont,
  setBorderC,
  setCardShow,
}) {
  const handleCLick = () => {
    setCardcont(data);
    setCardShow(true);
    setBorderC(color1);
  };
  return (
    <>
      <Card
        sx={{
          minWidth: "23%",
          m: 1,
          minHeight: 100,
        }}
        border="10px solid green"
        className="cards"
        onClick={data ? handleCLick : null}
      >
        <CardContent sx={{ margin: 0, padding: 0 }}>
          <Grid container xl={12} spacing={6} pt={1} pb={0}>
            <Grid item xl={6}>
              <Box>
                <Typography
                  color={color1}
                  sx={{ fontSize: 35, fontWeight: 900, marginLeft: "20px" }}
                >
                  {" "}
                  <h4> {description}</h4>
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={6}>
              <Box
                sx={{ ml: 1, width: "50px", float: "right" }}
                backgroundColor={bgcolor1}
              >
                {icon}
              </Box>
            </Grid>
          </Grid>
          <Box
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            backgroundColor={color1}
            p={1}
            borderTop={"4px solid #FDD36A"}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "20px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <h6> {title}</h6>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
