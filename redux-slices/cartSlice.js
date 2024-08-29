import {createSlice} from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
        console.log(state.items)
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      console.log("********************************")
      console.log(newCart)
      console.log("********************************")
      let itemIndex = state?.items?.findIndex(
        item => item?.id === action?.payload?.id,
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Can't Remove Ite Item");
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;
export const selectedCartItems = (state) => state?.cart?.items;
export const selectedCartItemsById = (state, id) =>state?.cart?.items?.filter(item => item?.id == id);
export const selectedCartTotal = state =>state?.cart?.items?.reduce((total, item) => (total = total + item?.price), 0);
export default cartSlice.reducer;
