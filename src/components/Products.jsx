import { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const Products = () => {
  const [Products, setProducts] = useState([]);
  const dispatch = useDispatch();
  //dispatch->it is a method that we are going to use to dispatch a action so that state can change

  useEffect(() => {
    //Getting the data to display on the  product page
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      //   console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    //dispatch->it is a method that we are going to use to dispatch a action so that state can change
    dispatch(add(product));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        marginLeft: "100px",
      }}
    >
      {Products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              backgroundColor: "#b066a19e",
              border: "2px solid black",
              height: "300px",
              width: "200px",
              marginTop: "80px",
              padding: "20px",
            }}
          >
            <img
              style={{ height: "100px", width: "100px" }}
              src={product.image}
            ></img>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleAdd(product)}>
              ADD TO CART
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
