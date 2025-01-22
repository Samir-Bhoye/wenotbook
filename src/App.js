import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Nohome from "./components/Nohome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Nohome showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route
                path="/signup"
                element={<SignUp showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
