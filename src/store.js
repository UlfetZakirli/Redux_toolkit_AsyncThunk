
import { configureStore } from '@reduxjs/toolkit';
import cartReducer  from'./featuers/cart/cartSlice'
import modalReducer from './featuers/modal/modalSlice'
export const store=configureStore({
reducer:{
cart:cartReducer,
modal:modalReducer,
}
})