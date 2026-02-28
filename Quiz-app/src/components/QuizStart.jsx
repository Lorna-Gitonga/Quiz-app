

function QuizStart({ onStart }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl mb-4">Start Quiz</h2>
      <button
        onClick={onStart}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary-600"
      >
        Start
      </button>
    </div>
  );
}

export default QuizStart;