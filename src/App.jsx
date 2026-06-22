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

  function restartQuiz() {

    setCurrentQuestion(0);

    setScore(0);

    setQuizFinished(false);

  }

  return (

    <div className="app">

      <Header />

      {

        quizFinished ? (

          <Result

            score={score}

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

            setQuizFinished={setQuizFinished}

          />

        )

      }

    </div>

  );

}

export default App;