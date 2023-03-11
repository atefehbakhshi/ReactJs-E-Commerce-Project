import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  modalName: "",
  userId:0
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
    getUserId:(state,action)=>{
      state.userId = action.payload
    }
  },
});

export const { setModalName, setShowModal,getUserId } = modalSlice.actions;

export default modalSlice.reducer;
