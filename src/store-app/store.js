import { configureStore } from "@reduxjs/toolkit";
import InterviewSlice from "./slices/InterviewSlice";

export const store = configureStore({
  reducer: {
    quiz: InterviewSlice,
  },
});