import { configureStore } from "@reduxjs/toolkit";
import hotelActivePageReducer from "./hotel/activePageSlice";
export const store = configureStore({
  reducer: {
    hotelActivePage: hotelActivePageReducer,
  },
});
