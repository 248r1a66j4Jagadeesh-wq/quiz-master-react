import { useState } from "react";

import "../styles/Question.css";

import Options from "./Options";

function Question({

  question,

  currentQuestion,

  setCurrentQuestion,

  totalQuestions

}) {

  const [selectedOption, setSelectedOption] = useState("");

  function handleNext() {

    if (selectedOption === "") {

      alert("Please select an answer!");

      return;

    }

    if (currentQuestion < totalQuestions - 1) {

      setCurrentQuestion(currentQuestion + 1);

      setSelectedOption("");

    }

  }

  return (

    <div className="question">

      <h2>

        Question {question.id}

      </h2>

      <h3>

        {question.question}

      </h3>

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