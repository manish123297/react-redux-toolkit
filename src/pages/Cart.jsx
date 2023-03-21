import { useSelector } from "react-redux";
const Cart = () => {
  const items = useSelector((state) => {
    return state.cart;
  });

  console.log(items);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        marginLeft: "100px",
      }}
    >
      {items.map((item) => {
        return (
          <div
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
              src={item.image}
            ></img>
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
