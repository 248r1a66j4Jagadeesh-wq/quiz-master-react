import { useState } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import Question from "./components/Question";
import Result from "./components/Result";

import questions from "./data/questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false);

  const [highScore, setHighScore] = useState(() => {
    const savedScore = localStorage.getItem("highScore");
    return savedScore ? Number(savedScore) : 0;
  });

  // Finish Quiz
  function finishQuiz(finalScore) {
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem("highScore", finalScore);
    }

    setQuizFinished(true);
  }

  // Restart Quiz
  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  }

  return (
    <div className="app">
      <Header />

      {quizFinished ? (
        <Result
          score={score}
          highScore={highScore}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Question
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          totalQuestions={questions.length}
          score={score}
          setScore={setScore}
          finishQuiz={finishQuiz}
        />
      )}
    </div>
  );
}

export default App;