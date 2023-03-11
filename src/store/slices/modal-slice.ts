import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  modalName: "",
  tempId: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalName: (state, action) => {
      state.modalName = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    getId: (state, action) => {
      state.tempId = action.payload;
    },
  },
});

export const { setModalName, setShowModal, getId } = modalSlice.actions;

export default modalSlice.reducer;
