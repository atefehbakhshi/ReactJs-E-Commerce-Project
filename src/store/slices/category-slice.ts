import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterList: {
    searchText: null,
    price: null,
    date: null,
  },
  searchText: {
    text: null,
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getFilterList: (state, action) => {
      state.filterList = action.payload;
    },
    getSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { getFilterList, getSearchText } = categorySlice.actions;

export default categorySlice.reducer;
