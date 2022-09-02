import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Details.css';

function Product()
{
   const {pid}  = useParams();
   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);
   

   useEffect(() => {
    const getProduct = async () => {
        setLoading(true);
        const response = await fetch('http://localhost:8080/product-details/'+pid);
        setProduct(await response.json());
        setLoading(false);
    }
    getProduct();

}, []);


const Loading = () => {
  return (
      <div className='app'>
          Loading.....
      </div>
  )
}

const ShowProduct = () => {
  return (
    <div className="app">
    {
       <div className="details" id="12">
         <div className="big-img">
           <img src={product.imageUrl} alt=""/>
           </div>

           <div className="box">
             <div className="row">
               <h2>{product.name}</h2>
               <span>{product.price}</span>
               </div>
                 <p>{product.details}</p>
                   <button className="cart">Buy Now</button>
             </div>
         </div>
    }
    </div>
  )
}
  return(
    <div >
    {loading ? <Loading/> : <ShowProduct/>}
    </div>   
  );

}

export default Product;