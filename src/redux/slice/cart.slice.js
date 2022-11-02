import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartsList: [],
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'carts',
  initialState: initialState,
  reducers: {

    addToCart: (state, action) => {
      const lineItem = {
        id: action?.payload?.id,
        title: action?.payload?.title,
        price: action?.payload?.price,
        image: action?.payload?.image,
        quantity: 1,
      };

      const existingItem = state.cartsList.findIndex((item) => item.id === lineItem.id)

      if (existingItem > -1) {
        state.cartsList[existingItem].quantity = state.cartsList[existingItem].quantity + 1
      } else {
        state.cartsList.push(lineItem);
        state.totalQuantity++;
      }
    },

    removeFromCart: (state, action) => {
      const id = action?.payload
      const existingItem = state.cartsList.find(item => item.id === id);

      if (existingItem.quantity === 1) {
        state.cartsList = state.cartsList.filter(item => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
      }
    },

  },
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer