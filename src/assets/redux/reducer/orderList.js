import { createSlice } from "@reduxjs/toolkit";

const cartslices=createSlice({
    name:"cart",
    initialState:{
      items: [], // Array of cart items: {id, name, price, quantity, image, etc.}

  },
  reducers: {
    addToCart: (state, action) => {
        const product = action.payload;
        state.items.push(product)

   
    },
}
})

export const {addToCart} =cartslices.actions
export default cartslices.reducer