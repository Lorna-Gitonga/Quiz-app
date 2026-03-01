import { create } from "zustand";

export const useQuizStore = create((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  loading: false,
  error: "",
  history: [], // store quiz history

  setQuestions: (questions) =>
    set({ questions, currentQuestionIndex: 0, score: 0 }),
  nextQuestion: () =>
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
  answerQuestion: (isCorrect) =>
    set((state) => ({ score: isCorrect ? state.score + 1 : state.score })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  addToHistory: (categoryName, difficulty) =>
    set((state) => ({
      history: [
        ...state.history,
        {
          date: new Date().toLocaleString(),
          score: state.score,
          total: state.questions.length,
          category: categoryName,
          difficulty,
        },
      ],
    })),

  resetQuiz: () =>
    set({ questions: [], currentQuestionIndex: 0, score: 0 }),
}));