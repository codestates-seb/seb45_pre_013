import { createSlice, configureStore } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    id: 0,
    title: "",
    text: "",
    userName: "",
    userReputation: 0,
    created: "",
    modified: "",
    vote: 0,
    answer: [],
  },
  reducers: {
    setQuestion: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQuestion } = questionSlice.actions;

const answerSlice = createSlice({
  name: "answers",
  initialState: [],
  reducers: {
    addAnswer: (state, action) => {
      state.push(action.payload);
    },
  },
  content: "",
});

export const { addAnswer } = answerSlice.actions;

const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
    answers: answerSlice.reducer,
  },
});

export default store;
