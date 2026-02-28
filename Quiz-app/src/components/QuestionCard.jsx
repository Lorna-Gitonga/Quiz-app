import { useQuizStore } from "../store/quizStore";

function QuizPage() {
  const { questions, currentIndex, score, answerQuestion } =
    useQuizStore();

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <h2>{currentQuestion?.question}</h2>
      <button onClick={() => answerQuestion(true)}>Correct</button>
      <button onClick={() => answerQuestion(false)}>Wrong</button>
      <p>Score: {score}</p>
    </div>
  );
}

export default QuizPage;