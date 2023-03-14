import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Home from "../assets/image/home.svg";
import "../assets/css/user.css";

function Hero() {
  return (
    <div classname="hero">
      <Grid container sx={{ width: "100%", mt: 5 }}>
        <Grid item xl={6} lg={6} xs={12}>
          <Box
            sx={{
              fontSize: "40px",
              color: "#285430",
              mx: 5,
              mt: 10,
              textAlign: "center",
            }}
          >
            <h1>PR to Issuance </h1>
            <h3>Monitoring System</h3>
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              m: 5,
              textAlign: "center",
            }}
          >
            촉이 와 단번에 느껴 널 한입에 치즈처럼 집어넣을 테다 향길 맡고 색깔
            음미하고 와인보다 우아하게 잡아먹을 테다 아 그런데 발톱에 힘이 빠져
            입맛까지 으 없어져 혹시 내가 아픈 건가 병이라도 걸린 거니? Yeah!
            큰일났지 헤이 정신차려, 어쩌다 인간에게 맘을 뺏겨버렸나 그녀는
            한입거리뿐이라고 Hey 확 물어 그 다음 막 막 흔들어 정신 잃게 Hey 자
            안 해본 스타일로 저 큰 보름달이 지기 전에 해치워라 그래 wolf, 내가
            wolf! Awouuuu 아 사랑해요 난 늑대고 넌 미녀 그래 wolf, 내가 wolf!
            Awouuuu 아 사랑해요 난 늑대고 넌 미녀
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} xs={12}>
          {" "}
          <Box>
            {" "}
            <img src={Home} height={500}></img>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
