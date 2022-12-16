import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducer: {
    pluseCounter: (state) => {
      state.payload += 1;
    },
    minusCounter: (state) => {
      state.payload -= 1;
    },
    resetCounter: (state) => {
      state.payload = 0;
    },
  },
});

export const { pluseCounter, minusCounter, resetCounter } = countSlice.actions;

export default countSlice.reducer;
