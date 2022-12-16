import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../components/countSlice";

export default configureStore({
  reducer: countSlice,
  devTools: process.env.NODE_ENV !== "production",
});
