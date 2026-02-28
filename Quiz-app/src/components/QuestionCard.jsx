import { useQuizStore } from "../store/quizStore";
import { useState } from "react";

function  QuestionCard({ question, onFinish }) {

  const [score, setScore] = useState(0); 
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === question.correct_answer) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

    if (answered) {
      return (
        <div>
        <p>Score: {score}</p>
        <button onClick={onFinish}>Finish</button>
      </div>
    );
  }


  return (
    <div className="bg-primary text-white p-2 rounded hover:bg-primary-dark active:scale-95 transition">
      <h2>{question.question}</h2>
      {[question.correct_answer, ...question.incorrect_answers].map(
        (ans, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(ans)}
            className="block bg-primary text-white p-2 m-2 rounded hover:bg-blue-600"
          >
            {ans}
          </button>
        )
      )}
    </div>
  );
}


export default  QuestionCar;