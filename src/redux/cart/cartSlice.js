import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart
  
} from './cart-utils';


import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      
      };
    },

    removeProductCart: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        cartItems: removeProductFromCart(state.cartItems, id),
      };
    },


    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
       
      };
    },
    clearCart: state => {
      return {
        ...state,
        cartItems: [],
       
      };
    },
 
  },
});

export const { addToCart, removeFromCart, clearCart, removeProductCart, } =
  cartSlice.actions;

export default cartSlice.reducer;
