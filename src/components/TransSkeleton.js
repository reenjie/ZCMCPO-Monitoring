import React from "react";
import { Box } from "@mui/system";
import { Skeleton, Divider, Grid } from "@mui/material";
export const TransSkeleton = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: "#F8F4EA",
        width: "90%",
        height: "70vh",
        borderRadius: "10px",
        borderLeft: "15px solid #4E944F ",
        borderRight: "15px solid #4E944F ",
        borderRadius: "5px",
        backgroundColor: "#E1EEDD",
      }}
    >
      <Box p={2}>
        {" "}
        <Skeleton
          variant="rectangular"
          width="20%"
          style={{ marginBottom: "5px", borderRadius: "5px" }}
        />
        <Skeleton
          variant="rectangular"
          width="15%"
          style={{ marginBottom: "5px", borderRadius: "5px" }}
        />
        <Skeleton
          variant="rectangular"
          width="18%"
          style={{ marginBottom: "5px", borderRadius: "5px" }}
        />
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={8} md={8}>
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",
                marginTop: "20px",
                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              style={{
                marginBottom: "5px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="80px"
              style={{
                marginBottom: "5px",
                marginTop: "20px",
                borderRadius: "5px",
              }}
            />
          </Grid>
          <Grid item xs={4} md={4}>
            <Skeleton
              variant="rectangular"
              width="50%"
              height="40px"
              style={{
                marginBottom: "10px",
                marginTop: "20px",
                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="50%"
              height="40px"
              style={{
                marginBottom: "10px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="50%"
              height="40px"
              style={{
                marginBottom: "10px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="50%"
              height="40px"
              style={{
                marginBottom: "10px",

                borderRadius: "5px",
              }}
            />
            <Skeleton
              variant="rectangular"
              width="50%"
              height="40px"
              style={{
                marginBottom: "10px",

                borderRadius: "5px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
