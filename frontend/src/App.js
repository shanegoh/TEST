import React, {useState} from 'react';
import Login from './components/Login';
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (<Dashboard setIsAuthenticated={setIsAuthenticated}/>):(<Login setIsAuthenticated={setIsAuthenticated}/>) }
    </>
  );
}

export default App;

