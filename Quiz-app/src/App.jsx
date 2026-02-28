import QuizStart from "./components/QuizStart";
import { useState } from "react";

function App() {
    const [started, setStarted] = useState(false);
    const questions = [
  {
    question: "What is 2 + 2?",
    correct_answer: "4",
    incorrect_answers: ["3", "5", "6"],
  },
];
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
       {!started ? (
        <QuizStart onStart={() => setStarted(true)} />
      ) : (
        <p>Quiz questions go here..</p>
      )}
    </div>
  );
}


export default App;
