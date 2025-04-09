import { configureStore } from "@reduxjs/toolkit";
import breakingBad from "../slice/breakingSlice";

export const store = configureStore({
  reducer: {
    breakingBad: breakingBad,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
