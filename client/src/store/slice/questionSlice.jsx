import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const jwtToken = localStorage.getItem("Authorization");

export const getQuestionFetch = createAsyncThunk(
  "getQuestionFetch",
  async (postPage) => {
    const response = await fetch(
      `${apiUrl}/questions?page=${postPage.page}&size=${postPage.limit}`
    );
    const data = await response.json();
    return data;
  }
);

export const addQuestionFetch = createAsyncThunk(
  "addQuestionFetch",
  async (addQuestion) => {
    const response = await fetch(`${apiUrl}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwtToken,
      },
      body: JSON.stringify({
        ...addQuestion,
      }),
    });
    const data = await response.json();
    console.log(jwtToken, data);
    return data;
  }
);

export const Squestion = createSlice({
  name: "Squestion",
  initialState: {
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionFetch.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getQuestionFetch.rejected, (state, action) => {
        console.error("Error adding question:", action.error);
        return state;
      });
    builder
      .addCase(addQuestionFetch.fulfilled, (state, action) => action.payload)
      .addCase(addQuestionFetch.rejected, (state, action) => {
        console.error("Error adding question:", action.error);
        return state;
      });
  },
});
