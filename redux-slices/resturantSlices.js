import { createSlice } from '@reduxjs/toolkit'

export const resturantSlice = createSlice({
  name: 'resturant',
  initialState: {
    resturant: null,
  },
  reducers: {
    setRestuarant: (state, action) => {
      state.resturant = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestuarant } = resturantSlice.actions
export const selectedResturant=state=>state.resturant.resturant
export default resturantSlice.reducer