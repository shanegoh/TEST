import React, { useState } from "react";
import Login from "./components/Login";
//import "./App.css";
import Dashboard from "./components/Dashboard";
import { Container } from "react-bootstrap";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        {isAuthenticated ? (
          <Dashboard setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </div>
    </Container>
  );
}

export default App;
