import React, {useState} from "react";
import './style.css';
import data from "../productdetails.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input 
            id="searchInput" 
            type="text" 
            placeholder="Enter Product Name..." 
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }} 
          s/>
        </div>

        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.imageurl} alt="" />
                      <h3>{val.name}</h3>
                      <p className="price">₹{val.price}</p>
                      <p className="extra-content">{val.description}</p>
                      
                      
                      <a className="read-more-link" onClick={()=>{}}><h2>Read More</h2></a>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;