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
          minWidth: 200,
          mx: 1,
          minHeight: 90,
        }}
        border="10px solid green"
        style={style}
      >
        <CardContent sx={{ margin: 0 }}>
          <Stack>
            <Grid container xl={12} spacing={5}>
              <Grid item xl={6}>
                <Box sx={{ height: "50px" }} backgroundColor={bgcolor1}>
                  {icon}
                </Box>
              </Grid>
              <Grid item xl={6}>
                <Box>
                  <Typography
                    color={color1}
                    sx={{ textAlign: "center", fontSize: 30, fontWeight: 600 }}
                  >
                    {" "}
                    {description}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    {title}
                  </Typography>
                </Box>

                <Box bgcolor={bgcolor} sx={{ w: "100%" }}>
                  {" "}
                  <Typography
                    sx={{ fontSize: 14, textAlign: "center" }}
                    color={color}
                    gutterBottom
                  >
                    {desc}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
