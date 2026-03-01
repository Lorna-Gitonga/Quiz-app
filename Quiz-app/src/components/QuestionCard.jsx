import { useQuizStore } from "../store/quizStore";

export default function QuestionCard() {
  const {
    questions,
    currentQuestionIndex,
    nextQuestion,
    answerQuestion,
  } = useQuizStore();

  const question = questions[currentQuestionIndex];

  const allAnswers = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5
  );

  const handleAnswer = (answer) => {
    answerQuestion(answer === question.correct_answer);
    nextQuestion();
  };

  return (
    <div className="p-6 bg-white rounded shadow w-full max-w-md">
      <h2
        className="mb-6 font-semibold text-lg text-gray-800"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      {allAnswers.map((ans, idx) => (
        <button
          key={idx}
          onClick={() => handleAnswer(ans)}
          className="block w-full mb-3 p-3 border rounded bg-white text-gray-800 hover:bg-primary hover:text-white active:scale-95 transition-all duration-150"
          dangerouslySetInnerHTML={{ __html: ans }}
        />
      ))}
    </div>
  );
}