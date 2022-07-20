import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchFilter from "./Components/SearchFilter"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" />
          <Route path="/login" />
          <Route path="/contact" />
        </Routes>
        
      </Router>

      <div className="App">
        <SearchFilter />
      </div>
    </>
  );
}

export default App;
