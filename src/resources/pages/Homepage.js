import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Dev from "../../components/Dev";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div sx={{ width: "100%" }}>
      <Navbar />
      <Hero />
      <About />
      <Dev />
      <Footer />
    </div>
  );
};

export default Homepage;
