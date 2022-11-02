import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  alerts: null,
}

const sessionSlice = createSlice({
  name: ' session ',
  initialState: initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alerts = action?.payload;
    }
  },

})

export const { setAlert } = sessionSlice.actions;


export default sessionSlice.reducer
