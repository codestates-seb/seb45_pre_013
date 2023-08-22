import { configureStore } from "@reduxjs/toolkit";

import { questionSlice, updateAnswer } from "./slice/slice";

const apiUrl = import.meta.env.VITE_API_URL;
const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
  },
});

export default store;
