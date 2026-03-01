import { useEffect } from "react";
import { useQuizStore } from "../store/quizStore";
import { useNavigate, useLocation } from "react-router-dom";

export default function ScoreSummary() {
  const { score, questions, resetQuiz, addToHistory } = useQuizStore();
  const navigate = useNavigate();
  const location = useLocation();

  // Get category & difficulty from state passed via navigate()
  const { categoryName = "Unknown", difficulty = "easy" } = location.state || {};

  // Save quiz to history on mount
  useEffect(() => {
    addToHistory(categoryName, difficulty);
  }, []);

  const handleRestart = () => {
    resetQuiz();
    navigate("/");
  };

  const handleHistory = () => {
    navigate("/history");
  };

  return (
    <div className="p-6 bg-white rounded shadow w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-lg mb-6">
        You scored {score} out of {questions.length}
      </p>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleRestart}
          className="p-3 w-full bg-primary text-white rounded hover:bg-blue-600 active:scale-95 transition duration-150"
        >
          Restart Quiz
        </button>
        <button
          onClick={handleHistory}
          className="p-3 w-full bg-gray-300 text-gray-800 rounded hover:bg-gray-400 active:scale-95 transition duration-150"
        >
          View History
        </button>
      </div>
    </div>
  );
}