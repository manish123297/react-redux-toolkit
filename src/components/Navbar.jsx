import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => {
    // here state has all the state of the store
    // out of them we can get any particular state
    // if there will be any change in the state anywhere in the application
    // useSelector hook will force this component to rerender
    return state.cart;
  });

  // console.log(items);
  return (
    <div style={{ backgroundColor: "#c5bb41" }}>
      <span>REDUX STORE</span>
      <div>
        <Link to="/">HomePage</Link>
        <br></br>
        <Link to="/cart">Cart</Link>
        <br></br>
        <span>Cart-Items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
