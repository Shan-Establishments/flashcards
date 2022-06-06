import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "../features/topics/topicsSlice.js";
import quizzesSlice from "../features/quizzes/quizzesSlice.js";
import cardsSlice from "../features/cards/cardsSlice.js";

export default configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizzesSlice,
    cards: cardsSlice,
  },
});
