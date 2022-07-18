import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBar from "./Components/SearchBar";
import ProductData from "./Data.json"; 

function App() {
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/login" />
        <Route path="/contact" />
      </Routes>
      
    </Router><div className="App">
        <SearchBar placeholder="Enter a Product Name..." data={ProductData} />
      </div></>
  );
}

export default App;
