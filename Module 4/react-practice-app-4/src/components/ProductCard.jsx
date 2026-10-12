import React from "react";

const ProductCard = ({ product }) => {
  console.log("products from comp: ", product);
  return (
    <div className="shadow-2xl border-2 border-black border-solid p-20">
      <img className="w-full" src={product.image} alt="" />
      <p className="mt-20 text-xl font-bold text-black">{product.title}</p>
      <p className="text-green-600 mt-10">Price: {product.price} $</p>
      <p className="text-yellow-600">⭐ {product?.rating?.rate}</p>
    </div>
  );
};

export default ProductCard;
