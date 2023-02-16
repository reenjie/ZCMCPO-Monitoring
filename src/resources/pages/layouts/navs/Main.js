import React from "react";
import { useEffect, useState } from "react";
import "../../../../assets/css/admin.css";
import Loader from "../Loader";

function Main({ children }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 800);
  });
  return <div className="main">{loader ? <Loader /> : children}</div>;
}
export default Main;
