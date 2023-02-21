import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
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
  >
    •
  </Box>
);
export default function BasicCard({
  title,
  description,
  icon,
  desc,
  style,
  bgcolor,
  color,
}) {
  return (
    <>
      <div className="badge">{icon}</div>
      <Card sx={{ minWidth: 200, mx: 1, minHeight: 90 }} style={style}>
        <CardContent>
          <Stack>
            <h2>
              <Box textAlign={"center"}>{description}</Box>
            </h2>
            <Stack direction={"row"} justifyContent={"center"}>
              <h3></h3>
              <h6>
                <Box mt={0.5} ml={0.5}>
                  {desc}
                </Box>
              </h6>
            </Stack>
          </Stack>
          <Box bgcolor={bgcolor} sx={{ w: "100%" }}>
            {" "}
            <Typography
              sx={{ fontSize: 14, textAlign: "center" }}
              color={color}
              gutterBottom
            >
              {title}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
