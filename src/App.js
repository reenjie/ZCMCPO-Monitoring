import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Web from "./routes/Web";

function App() {
  return (
  <div>
      <Router>
      <Web/>
      </Router>
  </div>
  );
}

export default App;
