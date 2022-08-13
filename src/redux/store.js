import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cartSlice'
import filter from './slices/filterSlice'
import shoes from './slices/shoesSlice'


export default configureStore({
  reducer: {
    shoes,
    filter,
    cart
  }
})