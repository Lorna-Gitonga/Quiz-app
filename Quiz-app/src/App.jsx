import {  Routes, Route } from "react-router-dom";
import QuizStart from "./components/QuizStart";



function App() {
    const [started, setStarted] = useState(false);

  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
       {!started ? (
        <QuizStart onStart={() => setStarted(true)} />
      ) : (
        <p>Quiz goes here...</p>
      )}
    </div>
  );
}


export default App;
