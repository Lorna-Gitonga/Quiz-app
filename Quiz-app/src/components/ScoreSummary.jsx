import { useEffect } from "react";
import { useQuizStore } from "../store/quizStore";




function ScoreSummary() {
const { score, questions, saveResult } = useQuizStore();
useEffect(() => {
    saveResult();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl mb-4">Quiz Complete</h2>
      <p>Your Score: {score}</p>
    </div>
  );
}

