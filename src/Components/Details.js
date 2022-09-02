import React, {useState , useEffect} from 'react';
import './Details.css';


function Details()
{
  const{id}="12";
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("http://localhost:9000/api/v1/products/prd/prducts")
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

    return(
     <div className="app">
     {
      items.map(item=>(
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

}

export default Details;