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
}) {
  return (
    <>
      <Card
        sx={{
          minWidth: "23%",
          m: 1,
          minHeight: 90,
        }}
        border="10px solid green"
        style={style}
      >
        <CardContent sx={{ margin: 0, padding: 0 }}>
          <Grid container xl={12} spacing={6} pt={1} pb={0}>
            <Grid item xl={6}>
              <Box sx={{ height: "50px", ml: 1 }} backgroundColor={bgcolor1}>
                {icon}
              </Box>
            </Grid>
            <Grid item xl={6}>
              <Box>
                <Typography
                  color={color1}
                  sx={{ fontSize: 35, fontWeight: 600 }}
                >
                  {" "}
                  {description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            borderRadius={1}
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            backgroundColor={color1}
            p={0.5}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "18px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box bgcolor={bgcolor} sx={{ w: "100%" }}>
            {" "}
            <Typography
              sx={{ fontSize: 14, textAlign: "center", mt: 1 }}
              gutterBottom
            >
              {desc}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
