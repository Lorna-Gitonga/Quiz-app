import { useState } from "react";

function QuizPage({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <h2>{questions[currentIndex].question}</h2>
      <button onClick={() => handleAnswer(true)}>Correct</button>
      <button onClick={() => handleAnswer(false)}>Wrong</button>
      <p>Score: {score}</p>
    </div>
  );
}

export default QuizPage;