import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryId: 0,
    searchValue:'',
    page:1
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
  },
});
export const { getCategory, getValue, getPage } = filterSlice.actions;

export default filterSlice.reducer;
