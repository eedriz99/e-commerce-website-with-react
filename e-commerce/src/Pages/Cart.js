import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

const Cart = () => {

  const [json, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
  setProduct(json);
  })
  return (
    <div>
      <ProductCard />
    </div>
  )
}

export default Cart