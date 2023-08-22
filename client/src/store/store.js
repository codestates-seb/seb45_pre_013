import { configureStore } from "@reduxjs/toolkit";
import { answerSlice, questionSlice, updateAnswer } from "./slice/slice";
import { Squestion } from "./slice/questionSlice";
import { SquestionDetail } from "./slice/detailSlice";


const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
    newAnswers: answerSlice.reducer,
    Squestion: Squestion.reducer,
    SquestionDetail: SquestionDetail.reducer,

  },
});

export default store;
