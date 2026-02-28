import { create } from "zustand";

export const useQuizStore = create((set) => ({
  questions: [],
  currentIndex: 0,
  score: 0,

  setQuestions: (questions) =>
    set({
      questions,
      currentIndex: 0,
      score: 0,
    }),

  answerQuestion: (isCorrect) =>
    set((state) => ({
      score: isCorrect ? state.score + 1 : state.score,
      currentIndex: state.currentIndex + 1,
    })),

  resetQuiz: () =>
    set({
      questions: [],
      currentIndex: 0,
      score: 0,
    }),
}));