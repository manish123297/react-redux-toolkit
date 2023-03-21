import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  //A name, used in action types
  name: "cart",
  // The initial state for the reducer
  initialState,
  // An object of "case reducers". Key names will be used to generate actions.

  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return (state = state.filter((item) => item.id !== action.payload));
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
