import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoriesList: [],
  categorySingle: []
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categoriesList = action?.payload;
    },
    setCategorySingle: (state, action) => {
      state.categorySingle = action?.payload;
    },
  },
})

export const { setCategories, setCategorySingle } = categoriesSlice.actions;

export default categoriesSlice.reducer