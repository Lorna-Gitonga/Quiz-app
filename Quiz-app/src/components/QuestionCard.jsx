import { useState } from "react";

function QuestionCard({ question, onAnswer }) {
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === question.correct_answer;
    setAnswered(true);
    onAnswer(isCorrect);
  };
   // Combine correct and incorrect answers and shuffle them for better UX
  const allAnswers = [...question.incorrect_answers, question.correct_answer]
    .sort(() => Math.random() - 0.5);

  return (
    <div className="bg-primary text-white p-4 rounded w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">
        {question.question}
      </h2>

      {!answered ? (
        allAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer)}
            className="block w-full bg-blue-500 p-2 mb-2 rounded hover:bg-blue-600 transition"
          >
            {answer}
          </button>
        ))
      ) : (
        <p className="mt-4">Answer submitted.</p>
      )}
    </div>
  );
}

export default QuestionCard;