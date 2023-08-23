import { configureStore } from "@reduxjs/toolkit";
import { Squestion } from "./slice/questionSlice";
import { SquestionDetail } from "./slice/detailSlice";

const store = configureStore({
  reducer: {
    Squestion: Squestion.reducer,
    SquestionDetail: SquestionDetail.reducer,
  },
});

export default store;
