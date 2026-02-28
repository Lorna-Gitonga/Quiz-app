function ScoreSummary({ score }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl mb-4">Quiz Complete</h2>
      <p>Your Score: {score}</p>
    </div>
  );
}

export default ScoreSummary;