import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const jwtToken = localStorage.getItem("Authorization");

export const createAnswer = createAsyncThunk(
  "answers/editAnswer",
  async ({ answerId, updatedAnswer }) => {
    try {
      const response = await fetch(`${apiUrl}/answers`, {
        method: "POST",
        body: JSON.stringify({ content: updatedAnswer }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return { answerId, updatedAnswer: data };
    } catch (error) {
      console.error("Error editing answer:", error);
      throw error;
    }
  }
);

export const deleteAnswer = createAsyncThunk(
  "answers/deleteAnswer",
  async (answerId) => {
    await fetch(`${apiUrl}/answers/${answerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwtToken,
      },
    });

    return;
  }
);

export const editAnswer = createAsyncThunk(
  "answers/editAnswer",
  async ({ answerId, updatedAnswer }) => {
    try {
      const response = await fetch(`${apiUrl}/answers/${answerId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(updatedAnswer),
      });

      if (!response.ok) {
        throw new Error("Failed to update answer");
      }

      const data = await response.json();
      return { answerId, updatedAnswer: data };
    } catch (error) {
      console.error("Error updating answer:", error);
      throw error;
    }
  }
);

export const answersSlice = createSlice({
  name: "answers",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editAnswer.fulfilled, (state, action) => {
      const { answerId, updatedAnswer } = action.payload;
      const existingAnswer = state.find(
        (answer) => answer.answerId === answerId
      );
      if (existingAnswer) {
        Object.assign(existingAnswer, updatedAnswer);
      }
    });
  },
});
