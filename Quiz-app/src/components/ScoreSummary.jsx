import { useQuizStore } from "../store/quizStore";
import { useNavigate } from "react-router-dom";

export default function ScoreSummary() {
  const { score, questions, resetQuiz } = useQuizStore();
  const navigate = useNavigate();

  const handleRestart = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <div className="p-6 bg-white rounded shadow w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-lg mb-6">
        You scored {score} out of {questions.length}
      </p>
      <button
        onClick={handleRestart}
        className="p-3 w-full bg-primary text-white rounded hover:bg-blue-600 active:scale-95 transition duration-150"
      >
        Restart Quiz
      </button>
    </div>
  );
}