import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const { products, loading, err } = useFetch();
  const [copyProducts, setCopyProducts] = useState([]);

  useEffect(() => {
    let result = [...products];

    if(!search.trim() !== ""){
      result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    }

    if(sort == 'low'){
      result.sort((a, b) => a.price - b.price);
    }
    if(sort == 'high'){
      result.sort((a, b) => b.price - a.price);
    }

    setCopyProducts(result);
  }, [products, search, sort])

  if (loading) {
    return (
      <div
        style={{ justifyContent: "center", margin: "auto" }}
        className="loader"
      ></div>
    );
  }

  if (err) {
    return <p>{err}</p>;
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search item" className="border p-2 rounded-xl m-6"/>
        </div>

        <div className="m-6">
          <select name="" id="" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option className="text-black" value="">Default</option>
          <option className="text-black" value="low">Low to High</option>
          <option className="text-black" value="high">High to Low</option>
        </select>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {copyProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
