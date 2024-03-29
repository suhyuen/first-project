import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import userSlice from "../features/counter/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
