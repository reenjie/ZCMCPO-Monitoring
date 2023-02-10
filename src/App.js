import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Web from "./routes/Web";

function App() {
  return (
    <Router>
      <Web />
    </Router>
  );
}

export default App;
