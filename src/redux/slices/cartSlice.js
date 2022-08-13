import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    favorites:[],
    products:[],
    totalPrice: 0,
  },
  reducers: {
    selectFavorite(state,action){
        state.favorites.push(action.payload)
    },
    getProduct(state,action){
        state.products.push({
          ...action.payload,
          count:1
        })
        state.totalPrice = state.products.reduce((sum, obj)=>obj.price+sum,0)
    },
    removeFavorite(state,action){
      state.favorites = state.favorites.filter(obj=>obj.id !== action.payload)
    },
    removeProduct(state,action){
      state.products = state.products.filter(obj=>obj.id !== action.payload)
      state.totalPrice = state.products.reduce((sum, obj)=>obj.price-sum,0)
    },

    increment(state,action){
      const findIndex = state.products.find(obj=>obj.id === action.payload)
      if(findIndex){
        findIndex.count++
      }
      state.totalPrice = state.products.reduce((sum, obj)=>(obj.price * obj.count)+sum,0)
    },
    decriment(state,action){
      const findIndex = state.products.find(obj=>obj.id === action.payload)
      if(findIndex.count > 1){
        findIndex.count -= 1
      }else if(findIndex.count === 1){
        state.products = state.products.filter(obj=>obj.id !== action.payload)
      }
      state.totalPrice = state.products.reduce((sum, obj)=>(obj.price * obj.count)-sum,0)
    },
    clearProducts(state){
      state.products = []
      state.totalPrice = 0
    },


  },
});
export const {selectFavorite,removeFavorite,getProduct,removeProduct,increment,decriment,clearProducts,} = cartSlice.actions;

export default cartSlice.reducer;
