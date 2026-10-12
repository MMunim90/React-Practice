import { Link } from "react-router";
import useFetch from "../hooks/useFetch";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {products.slice(0, 4).map((product, index) => (
          <div
            key={index}
            style={{
              color: "green",
              border: "2px solid black",
              padding: "20px",
            }}
          >
            <img style={{ width: "100%" }} src={product.image} alt="" />
            <p>
              {product.title} = {product.price} $
            </p>
          </div>
        ))}
      </div>

      <Link to={'/products'} style={{textAlign: 'center', margin: 'auto', display: 'block', marginTop: '20px'}}>See all products</Link>
    </div>
  );
};

export default Home;
