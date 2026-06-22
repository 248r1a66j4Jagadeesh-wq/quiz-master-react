import { useState } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import Question from "./components/Question";

import questions from "./data/questions";

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (

    <div className="app">

      <Header />

      <Question

        question={questions[currentQuestion]}

        currentQuestion={currentQuestion}

        setCurrentQuestion={setCurrentQuestion}

        totalQuestions={questions.length}

      />

    </div>

  );

}

export default App;