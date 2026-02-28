import { create } from "zustand";

export const useQuizStore = create((set) => ({
  questions: [],
  currentIndex: 0,
  score: 0,
  history: [],

  setQuestions: (questions) =>
    set({
      questions,
      currentIndex: 0,
      score: 0,
    }),

  answerQuestion: (isCorrect) =>
    set((state) => ({
      score: isCorrect ? state.score + 1 : state.score,
    })),

  nextQuestion: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
    })),

  resetQuiz: () =>
    set({
      questions: [],
      currentIndex: 0,
      score: 0,
    }),

  saveResult: () =>
    set((state) => ({
      history: [
        ...state.history,
        {
          score: state.score,
          total: state.questions.length,
          date: new Date().toISOString(),
        },
      ],
    })),
}));