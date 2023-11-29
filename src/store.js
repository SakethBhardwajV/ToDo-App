import { configureStore } from "@reduxjs/toolkit";
import toDoSliceReducer from "./slices/toDoSlice";

const store = configureStore({
  reducer: {
    tasks: toDoSliceReducer,
  },
  devTools: true,
});

export default store;
