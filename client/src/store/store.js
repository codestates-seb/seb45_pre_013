import { configureStore } from "@reduxjs/toolkit";

import { answerSlice, questionSlice } from "./slice/slice";

const apiUrl = import.meta.env.VITE_API_URL;
const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
    newAnswers: answerSlice.reducer,
  },
});

export default store;
