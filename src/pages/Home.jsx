import Products from "../components/Products";
const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "grey",
      }}
    >
      <h2>Welcome to redux toolkit store</h2>

      <section>
        <h3>Products</h3>
        <Products></Products>
      </section>
    </div>
  );
};

export default Home;
