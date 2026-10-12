import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

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
        <ProductCard product={product} key={index}/>
      ))}
    </div>
  );
};

export default Products;
