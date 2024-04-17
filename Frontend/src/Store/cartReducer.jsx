import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cartHandler",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      return (state = action.payload);
    },
  },
});

export const cartSliceActions = cartSlice.actions; //actions means functions like : additem
const cartSliceReducers = cartSlice.reducer;

export default cartSliceReducers;
