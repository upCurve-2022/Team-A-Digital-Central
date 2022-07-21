import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchFilter from "./Components/SearchFilter";
import Details from './Components/Details';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" />
          <Route path="/login" />
          <Route path="/details" element={<Details />} />
        </Routes>
        
      </Router>

      <div className="App">
        <SearchFilter />
      </div>
    </>
  );
}

export default App;
