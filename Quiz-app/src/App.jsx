import { Routes, Route } from "react-router-dom";
import QuizStart from "./components/QuizStart";
import QuestionCard from "./components/QuestionCard";
import ScoreSummary from "./components/ScoreSummary";
import QuizHistory from "./components/QuizHistory";
import { useQuizStore } from "./store/quizStore";

function App() {
  const { questions, currentQuestionIndex, loading } = useQuizStore();

  // Show loading indicator if fetching
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-secondary">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-secondary">
      <Routes>
        {/* Start page */}
        <Route path="/" element={<QuizStart />} />

        {/* Quiz page */}
        <Route
          path="/quiz"
          element={
            questions.length > 0 && currentQuestionIndex < questions.length ? (
              <QuestionCard />
            ) : (
              <ScoreSummary />
            )
          }
        />

        {/* History page */}
        <Route path="/history" element={<QuizHistory />} />
      </Routes>
    </div>
  );
}

export default App;