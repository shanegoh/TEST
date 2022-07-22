import React, { useState } from "react";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <>{<Login setIsAuthenticated={setIsAuthenticated} />}</>;
}

export default App;
