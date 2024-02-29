import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    quizData: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    answerStatus: [],
    selectedAnswers: {},
    correctAnswers: {},
    checkedAnswers: false,
    quizCompleted: false,
    showStart: true,
    showQuiz: false,
    showResult: false,
    marks: 0,
};

export const InterviewSlice = createSlice({
  name: "Interview",
  initialState,
  reducers: {
    startQuiz(state) {
      state.showStart = false;
      state.showQuiz = true;
    },
    setQuizData(state, action) {
      state.quizData = action.payload;
    },
    nextQuestion(state) {
      state.currentQuestionIndex += 1;
      const wrongBtn = document.querySelector("button.danger");
      wrongBtn?.classList.remove("danger");
      const rightBtn = document.querySelector("button.success");
      rightBtn?.classList.remove("success");
    },
    selectAnswer(state, action) {
      state.userAnswers[state.currentQuestionIndex] = action.payload;
      state.answerStatus[state.currentQuestionIndex] =
        action.payload === state.quizData[state.currentQuestionIndex].answer;
    },
    showTheResult(state) {
      state.showResult = true;
      state.showStart = false;
      state.showQuiz = false;
    },
    incrementMarks(state, action) {
      state.marks += action.payload;
    },
    resetQuiz(state) {
      state.showStart = false;
      state.showResult = false;
      state.showQuiz = true;
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
      state.marks = 0;
      const wrongBtn = document.querySelector("button.danger");
      wrongBtn?.classList.remove("danger");
      const rightBtn = document.querySelector("button.success");
      rightBtn?.classList.remove("success");
    },
  },
});

export const {
  startQuiz,
  setQuizData,
  nextQuestion,
  selectAnswer,
  showTheResult,
  incrementMarks,
  resetQuiz,
} = InterviewSlice.actions;

export default InterviewSlice.reducer;