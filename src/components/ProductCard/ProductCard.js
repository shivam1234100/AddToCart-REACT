import './ProductCard.css';
import AddToCart from '../AddToCart/AddToCart';
import { useRef, useState } from 'react';
function ProductCard({ product }) {

  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('Class');


  function printTitle() {

    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }

  function displayOutput(e) {
    setInputV(e.target.value);
  }

  return (
    <div className="product-card">
      <p onClick={printTitle}> {product.title}</p>
      <p ref={pRef}> {product.price.value}</p>
      <img src={product.images[0]} />
      <input type="text" onChange={displayOutput} ref={iRef} value={inputV} />
      <p ref={oRef}>Over here the output would arrive - {inputV}</p>
      <AddToCart product={product} />
    </div>
    )
  }
  
export default ProductCard;
  

