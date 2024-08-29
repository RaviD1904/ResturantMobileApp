import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from './redux-slices/cartSlice'
import { resturantSlice } from './redux-slices/resturantSlices'

export default configureStore({
    reducer: {
    cart:cartSlice.reducer,
    resturant:resturantSlice.reducer
  },
})