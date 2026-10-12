import React from "react";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { products, loading, err } = useFetch();

  if (loading) {
    return <div style={{justifyContent: 'center', margin: 'auto'}} className="loader"></div>;
  }

  if (err) {
    return <p>{err}</p>;
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      {products.map((product, index) => (
        <div
          key={index}
          style={{ color: "green", border: "2px solid black", padding: "20px" }}
        >
          <img style={{ width: "100%" }} src={product.image} alt="" />
          <p>
            {product.title} = {product.price} $
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
