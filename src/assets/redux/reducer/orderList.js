import { createSlice } from "@reduxjs/toolkit";

const cartslices=createSlice({
    name:"cart",
    initialState:{
      items: [], // Array of cart items: {id, name, price, quantity, image, etc.}

  },
  reducers: {
   addToCart: (state, action) => {
  const product = action.payload;
  const existingItem = state.items.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({ ...product, quantity: 1 });
  }
}

}
})

export const {addToCart} =cartslices.actions
export default cartslices.reducer