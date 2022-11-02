import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slice/cart.slice";
import categoriesSlice from "./slice/categories.slice";
import productSlice from "./slice/product.slice";


const store = configureStore({
  reducer: {
    product: productSlice,
    category: categoriesSlice,
    cart: cartSlice,
  },
})

export default store