import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterList: {
    price: null,
    date: null,
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getFilterList: (state, action) => {
      state.filterList = action.payload;
    },
  },
});

export const { getFilterList } = categorySlice.actions;

export default categorySlice.reducer;
