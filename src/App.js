import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Nohome from "./components/Nohome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route path="/" element={<Nohome />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
