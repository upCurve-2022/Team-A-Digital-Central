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
          <Route exact path = "/" element = {<SearchFilter />}/>
          <Route  exact path = "/details" element = {<Details />} />
          <Route exact path = "/login" />
          <Route exact path = "/product/:id" element = {<Details />} />
        </Routes>

 
      </Router>

      
    </>
  );
}

export default App;
