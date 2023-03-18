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
  rangePrice: {
    max: null,
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
    getRangePrice: (state, action) => {
      state.rangePrice = action.payload;
    },
  },
});

export const { getFilterList, getSearchText, getRangePrice } =
  categorySlice.actions;

export default categorySlice.reducer;
