import { useQuizStore } from "../store/quizStore";

export default function QuizHistory() {
  const { history } = useQuizStore();

  if (history.length === 0) {
    return (
      <div className="p-6 bg-white rounded shadow w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz History</h2>
        <p>No quizzes taken yet!</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Quiz History</h2>
      <ul className="space-y-3">
        {history.map((entry, idx) => (
          <li
            key={idx}
            className="p-3 border rounded bg-gray-50 hover:bg-gray-100 transition"
          >
            <p className="font-medium">
              {entry.category} ({entry.difficulty})
            </p>
            <p>
              Score: {entry.score} / {entry.total}
            </p>
            <p className="text-sm text-gray-500">{entry.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}