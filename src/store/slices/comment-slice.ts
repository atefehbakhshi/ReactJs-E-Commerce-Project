import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: "idle",
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = commentSlice.actions;

export default commentSlice.reducer;
