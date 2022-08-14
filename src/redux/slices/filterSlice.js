import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryId: 0,
    searchValue:'',
    page:1,
    singlePage:null
  },
  reducers: {
    getCategory(state, action) {
      state.categoryId = action.payload;
    },
    getValue(state, action) {
      state.searchValue = action.payload
    },
    getPage(state,action){
      state.page = action.payload
    },
    getSingle(state,action){
        state.singlePage = action.payload
    }
  },
});
export const { getCategory, getValue, getPage,getSingle } = filterSlice.actions;

export default filterSlice.reducer;
