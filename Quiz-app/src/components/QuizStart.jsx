
import { useEffect, useState } from "react";
import { fetchCategories, fetchQuestions } from "../services/triviaApi";
import { useQuizStore } from "../store/quizStore";
import { useNavigate } from "react-router-dom";

export default function QuizStart() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(10);

    const { setQuestions, setLoading, setError, loading, error } = useQuizStore();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };
    loadCategories();
  }, [setError]);

  const startQuiz = async () => {
    if (!selectedCategory) return setError("Select a category first");
    try {
      setLoading(true);
      setError("");

      const questions = await fetchQuestions({
        amount,
        category: selectedCategory,
        difficulty,
      });

      setQuestions(questions);
      navigate("/quiz");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Start Quiz</h1>

      {error && <p className="mb-4 text-red-500 font-medium">{error}</p>}
      {loading && <p className="mb-4 text-gray-500">Loading...</p>}

      <select
        className="border p-2 w-full mb-3 rounded"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <select
        className="border p-2 w-full mb-3 rounded"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <input
        type="number"
        min="1"
        max="20"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <button
        onClick={startQuiz}
        className="w-full p-3 bg-primary text-white rounded hover:bg-blue-600 active:scale-95 transition duration-150"
      >
        Start Quiz
      </button>
    </div>
  );
}
