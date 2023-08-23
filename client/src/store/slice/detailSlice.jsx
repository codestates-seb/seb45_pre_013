import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const jwtToken = localStorage.getItem("Authorization");

export const getDetailFetch = createAsyncThunk(
  "getDetailFetch",
  async (questionId) => {
    const response = await fetch(`${apiUrl}/questions/${questionId}`);
    const data = await response.json();
    return data;
  }
);

export const delQuestionFetch = createAsyncThunk(
  "delQuestionFetch",
  async (questionId) => {
    const response = await fetch(`${apiUrl}/question/${questionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwtToken,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const updataQuestionFetch = createAsyncThunk(
  "updataQuestionFetch",
  async (updataQuestion) => {
    const response = await fetch(`${apiUrl}/question`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwtToken,
      },
      body: JSON.stringify({
        ...updataQuestion,
      }),
    });
    const data = await response.json();
    return data;
  }
);

export const SquestionDetail = createSlice({
  name: "Squestion",
  initialState: {
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailFetch.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(delQuestionFetch.fulfilled, (state, action) => action.payload)
      .addCase(updataQuestionFetch.fulfilled, (state, action) => action.payload)

      .addCase(getDetailFetch.rejected, (state, action) => {
        console.error("Error deleting question:", action.error);
        return state;
      })
      .addCase(delQuestionFetch.rejected, (state, action) => {
        console.error("Error deleting question:", action.error);
        return state;
      })
      .addCase(updataQuestionFetch.rejected, (state, action) => {
        console.error("Error updating question:", action.error);
        return state;
      });
  },
});
