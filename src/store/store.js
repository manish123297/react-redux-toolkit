import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // if we will have more reducer that we can also pass here like "product:productReducer" etc
  },
});

export default store;
