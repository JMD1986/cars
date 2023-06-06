import { createSlice } from "@reduxjs/toolkit";
const FormSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});
export const { changeCost, changeName } = FormSlice.actions;
export const FormReducer = FormSlice.reducer;
