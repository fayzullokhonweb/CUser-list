import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isOpen: null,
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
    addForm: (state, { payload }) => {
      state.users.push(payload);
      state.value += 1;
    },

    dalateForm: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
      state.value -= 1;
    },
    openModal: (state, { payload }) => {
      state.isOpen = true;
    },
    closeModal: (state, { payload }) => {
      state.isOpen = false;
    },
  },
});

export const {
  addForm,
  dalateForm,
  openModal,
  closeModal,
  
} = userSlice.actions;

export default userSlice.reducer;
