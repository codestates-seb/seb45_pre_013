import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = import.meta.env.VITE_API_URL;
const jwtToken = localStorage.getItem("Authorization");

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    // questionId: 1,
    // id: 0,
    // title: "",
    // text: "",
    // userName: "",
    // userReputation: 0,
    // created: "",
    // modified: "",
    // vote: 0,
    answer: [],
  },
  reducers: {
    setQuestion: (state, action) => {
      return action.payload;
    },
    updateAnswer: (state, action) => {
      const { answerId, text } = action.payload;
      const answerToUpdate = state.answer.find(
        (answer) => answer.answerId === answerId
      );
      if (answerToUpdate) {
        answerToUpdate.text = text;
      }
    },
    deleteAnswer: (state, action) => {
      const deleteAnswerId = action.payload;
      state.answer = state.answer.filter(
        (answer) => answer.answerId !== deleteAnswerId
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchedAnswer.fulfilled, (state, action) => {
      state.answer = action.payload.map((item) => ({
        // answerId: item.answerId,
        // memberId: item.memberId,
        // nickname: item.nickname,
        questionId: item.questionId,
        text: item.text,
        // vote: item.answerVote,
        // createdAt: item.createdAt,
        // modifiedAt: item.modifiedAt,
      }));
    });
  },
});

export const fetchedAnswer = createAsyncThunk(
  "question/fetchAnswer",
  async () => {
    try {
      const response = await fetch(`${apiUrl}/answers/`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (!response.ok) {
        throw new alert("Error in fetch");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      alert("Error in answeredfetch", error);
      throw error;
    }
  }
);

export const answerSlice = createSlice({
  name: "newAnswers",
  initialState: [
    {
      answerId: 0,
      memberId: 0,
      nickname: "",
      questionId: 0,
      text: "",
      vote: 0,
      createdAt: null,
      modifiedAt: null,
    },
  ],
  reducers: {
    addAnswer: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addAnswer } = answerSlice.actions;
export const { setQuestion, deleteAnswer, updateAnswer } =
  questionSlice.actions;
