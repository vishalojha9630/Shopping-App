import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productsList: [],
  productSingle: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productsList = action?.payload;
    },
    setProductSingle: (state, action) => {
      state.productSingle = action?.payload;
    },
  },
})

export const { setProducts, setProductSingle } = productsSlice.actions;

export default productsSlice.reducer