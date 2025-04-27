import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  activePage: "overview",
};

export const hotelActivePageSlice = createSlice({
  name: "hotelActivePage",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = hotelActivePageSlice.actions;
export default hotelActivePageSlice.reducer;
