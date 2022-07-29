import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchFilter from "./Components/SearchFilter";
import Details from './Components/Details';

<div className="App"></div>
function App() {
   
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          
            <Route  path = "/" exact element = {<SearchFilter />} />
            <Route  path = "/details" exact element = {<Details />} />
            {/* <Route  path = "/product/:id"exact element = {<Details />} /> */}
      
        </Routes>

 
      </Router>

      
    </>
  );
}


export default App;
