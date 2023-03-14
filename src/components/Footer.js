import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Home from "../assets/image/home.svg";
import "../assets/css/user.css";
import { BsFacebook, BsGlobe } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="top">Get connected with us on social networks</div>
      <div className="mid">FOLLOW US</div>
      <div className="mids">
        <Button>
          <BsFacebook size={30} color={"#f0a04b"} />
        </Button>
        <Button>
          <MdOutlineEmail size={30} color={"#f0a04b"} />
        </Button>
        <Button>
          <BsGlobe size={30} color={"#f0a04b"} />
        </Button>
      </div>
      <div className="bot">
        Zamboanga City Medical Center|Veterans Ave, Zamboanga City,
        Philippines|zcmc.doh.gov.ph|(062) 991 2934
      </div>
      <div className="bot">2023</div>
    </div>
  );
}

export default Footer;
