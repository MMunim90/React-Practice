import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
      {products.map((product, index) => (
        <div key={index} style={{color: 'green', border: '2px solid black', padding: '20px'}}>
            <img style={{width: '100%'}} src={product.image} alt="" />
            <p>{product.title} = {product.price} $</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
