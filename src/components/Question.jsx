import { useState } from "react";

import "../styles/Question.css";

import Options from "./Options";

function Question({

  question,

  currentQuestion,

  setCurrentQuestion,

  totalQuestions,

  score,

  setScore,

  setQuizFinished

}) {

  const [selectedOption, setSelectedOption] = useState("");

  function handleNext() {

    if (selectedOption === "") {

      alert("Please select an answer!");

      return;

    }

    if (selectedOption === question.answer) {

      setScore(score + 1);

    }

    if (currentQuestion < totalQuestions - 1) {

      setCurrentQuestion(currentQuestion + 1);

      setSelectedOption("");

    } else {

      setQuizFinished(true);

    }

  }

  return (

    <div className="question">

      <p>

        Question {currentQuestion + 1}

        of

        {totalQuestions}

      </p>

      <h2>{question.question}</h2>

      <Options

        options={question.options}

        selectedOption={selectedOption}

        setSelectedOption={setSelectedOption}

      />

      <button

        className="next-btn"

        onClick={handleNext}

      >

        Next

      </button>

    </div>

  );

}

export default Question;