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
    updateAnswer: (state, action) => {
      const { id, content } = action.payload;
      const answerToUpdate = state.answer.find((answer) => answer.id === id);
      if (answerToUpdate) {
        answerToUpdate.content = content;
      }
    },
    deleteAnswer: (state, action) => {
      const deleteAnswerId = action.payload;
      state.answer = state.answer.filter(
        (answer) => answer.Id !== deleteAnswerId
      );
    },
  },
});

export const { setQuestion, deleteAnswer, updateAnswer } =
  questionSlice.actions;

const answerSlice = createSlice({
  name: "answers",
  initialState: [{ Id: Math.floor(Math.random() * 50) + 1 }],
  reducers: {
    addAnswer: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addAnswer } = answerSlice.actions;

const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
    answers: answerSlice.reducer,
  },
});

export default store;
