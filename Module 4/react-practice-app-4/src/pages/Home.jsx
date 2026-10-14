import { Link } from "react-router";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";

const Home = () => {
  const { products, loading, err } = useFetch();

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

  console.log(products);

  return (
    <div>
      <Banner/>
      <h1 className="text-4xl font-bold my-6 text-center">Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {products.slice(0, 4).map((product, index) => (
          <ProductCard product={product} key={index}/>
        ))}
      </div>

      <Link to={'/products'} style={{textAlign: 'center', margin: 'auto', display: 'block', marginTop: '20px', marginBottom: '20px', textDecoration: 'underline', fontSize: '25px'}}>See all products</Link>
    </div>
  );
};

export default Home;
