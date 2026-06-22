import { useState } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import Question from "./components/Question";

import questions from "./data/questions";

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false);

  return (

    <div className="app">

      <Header />

      {

        quizFinished ? (

          <div className="result">

            <h2>🎉 Quiz Completed!</h2>

            <h3>

              Your Score : {score} / {questions.length}

            </h3>

          </div>

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