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
    const response = await fetch(`${apiUrl}/answer/${answerId}`, {
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

// export const questionSlice = createSlice({
//   name: "question",
//   initialState: {
//     answer: [],
//   },
//   reducers: {
//     setQuestion: (state, action) => {
//       return action.payload;
//     },
//     updateAnswer: (state, action) => {
//       const { answerId, text } = action.payload;
//       const answerToUpdate = state.answer.find(
//         (answer) => answer.answerId === answerId
//       );
//       if (answerToUpdate) {
//         answerToUpdate.text = text;
//       }
//     },
//     deleteAnswer: (state, action) => {
//       const deleteAnswerId = action.payload;
//       state.answer = state.answer.filter(
//         (answer) => answer.answerId !== deleteAnswerId
//       );
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchedAnswer.fulfilled, (state, action) => {
//       state.answer = action.payload.map((item) => ({
//         questionId: item.questionId,
//         text: item.text,
//       }));
//     });
//   },
// });

// export const fetchedAnswer = createAsyncThunk(
//   "question/fetchAnswer",
//   async () => {
//     try {
//       const response = await fetch(`${apiUrl}/answers/`, {
//         headers: {
//           Authorization: `Bearer ${jwtToken}`,
//         },
//       });
//       if (!response.ok) {
//         throw new alert("Error in fetch");
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       alert("Error in answeredfetch", error);
//       throw error;
//     }
//   }
// );
