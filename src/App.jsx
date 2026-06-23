import { useState, useEffect } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import Question from "./components/Question";
import Result from "./components/Result";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import originalQuestions from "./data/questions";

function App() {
  const [questions, setQuestions] = useState(() => {
    return [...originalQuestions].sort(() => Math.random() - 0.5);
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const [highScore, setHighScore] = useState(() => {
    const savedScore = localStorage.getItem("highScore");
    return savedScore ? Number(savedScore) : 0;
  });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  function restartQuiz() {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }

    const shuffled = [...originalQuestions].sort(
      () => Math.random() - 0.5
    );

    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  }

  if (questions.length === 0) {
    return <Loading />;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

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
          setScore={setScore}
          setQuizFinished={setQuizFinished}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;