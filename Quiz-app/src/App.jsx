import {  Routes, Route } from "react-router-dom";
import QuizStart from "./components/QuizStart";
import QuestionCard from "./components/QuestionCard";
import ScoreSummary from "./components/ScoreSummary";
import QuizHistory from "./components/QuizHistory";
import { useQuizStore } from "./store/quizStore";


function App() {
  const { questions, currentQuestionIndex, score } = useQuizStore();
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
       <Routes>
        <Route path="/" element={<QuizStart />} />

        <Route
          path="/quiz"
          element={
            questions.length > 0 &&
            currentQuestionIndex < questions.length ? (
              <QuestionCard />
            ) : (
              <ScoreSummary />
            )
          }
        />

        <Route path="/history" element={<QuizHistory />} />
      </Routes>
    </div>
  );
}


export default App;
