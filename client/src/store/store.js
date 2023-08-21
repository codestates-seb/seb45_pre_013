import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// export const postAnswer = createAsyncThunk(
//   "question/postAnswer",
//   async (newAnswer) => {
//     // Perform API call
//     const response = await fetch("/api/answers", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(),
//     });
//     const data = await response.json();

//     return data;
//   }
// );

export const fetchedAnswer = createAsyncThunk(
  "question/fetchAnswer",
  async () => {
    const response = await fetch();
    const data = await response.json();
    return data;
  }
);

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

  extraReducers: (builder) => {
    builder.addCase(fetchedAnswer.fulfilled, (state, action) => {
      state.answer = action.payload;
    });
  },
});

export const { setQuestion, deleteAnswer, updateAnswer } =
  questionSlice.actions;

const answerSlice = createSlice({
  name: "newAnswers",
  initialState: [{ Id: Math.floor(Math.random() * 50) + 1 }], //TEMP
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
