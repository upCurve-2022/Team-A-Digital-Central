import React from 'react';

import './Details.css';
import Data from '../productdetails.json'

class Details extends React.Component{

  render(){
    const{id}="12";
    
    return(
     <div className="app">
     {
      Data.map(item=>(
        <div className="details" id="12">
          <div className="big-img">
            <img src={item.imageurl} alt=""/>
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.name}</h2>
                <span>₹{item.price}</span>
                </div>
                  <p>{item.details}</p>
                    <button className="cart">Add to cart</button>
              </div>
          </div>
      ))
     }
     </div>
    );
  };
}
export default Details;