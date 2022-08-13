import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShoes = createAsyncThunk(
  "shoes/fetchShoes",
  async (params) => {
    const { categoryId,searchValue,page } = params;
    const { data } = await axios.get(
      `https://60d62397943aa60017768e77.mockapi.io/favorites?${categoryId ? `parentId=${categoryId}`:''}&search=${searchValue}&page=${page}&limit=10`
    );
    return data;
  }
);

const shoesSlice = createSlice({
  name: "shoes",
  initialState: {
    items: [],
    status: true
  },
  reducers: {},
  extraReducers: {
    [fetchShoes.pending](state) {
      state.status = true
    },
    [fetchShoes.fulfilled](state, action) {
      state.items = action.payload;
      state.status = false
    },
    [fetchShoes.rejected](state) {
      alert("Что то не так");
      state.status = true
    },
  },
});
export const {} = shoesSlice.actions;

export default shoesSlice.reducer;
