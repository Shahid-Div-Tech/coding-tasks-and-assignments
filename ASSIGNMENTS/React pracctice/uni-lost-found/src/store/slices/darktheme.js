import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const darkthemeSlice = createSlice({
  name: "darktheme",
  initialState,
  reducers: {
    lighttheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { lighttheme } = darkthemeSlice.actions;

export default darkthemeSlice.reducer;