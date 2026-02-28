import { create } from "zustand";

export const useQuizStore = create((set) => ({
  questions: [],
  currentIndex: 0,
  score: 0,
  loading: false,
  error: "",

    setQuestions: (questions) =>
    set(
      { questions, currentQuestionIndex: 0, score: 0 }),
  nextQuestion: () =>
    set(
      (state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
  answerQuestion: (isCorrect) =>
    set(
      (state) => ({ score: isCorrect ? state.score + 1 : state.score })),
  setLoading: (loading) =>
     set(
      { loading }),
  setError: (error) => set(
    { error }),
  resetQuiz: () => set({ questions: [], currentQuestionIndex: 0, score: 0 }),
}));