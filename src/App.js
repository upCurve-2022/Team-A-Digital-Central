import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import ProductData from "./Data.json"; 

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Product Name..." data={ProductData} />
    </div>
  );
}

export default App;