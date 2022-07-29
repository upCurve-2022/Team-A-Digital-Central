import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './style.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8888/api/v1/products/prducts")
    .then(res => res.json())
    .then(
      (result) =>{
        console.log('called get items')
        console.log(result)
        setItems(result)
      },

      (error) => {
        setError(error);
      }
    )
  },[] )

  return (
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
            items 
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
                      
                      <Link to="/Details">Read More</Link>
                      {/* <a className="read-more-link" onClick={()=>{}}><h2>Read More</h2></a> */}
                  </div> 
                )
              })
          }
        </div>

      </div>
  )
}

export default App;