import "../styles/Question.css";
import { useState } from "react";
import Options from "./Options";

function Question({ question }) {

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="question">

      <h2>Question {question.id}</h2>

      <h3>{question.question}</h3>

      <Options
        options={question.options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

    </div>
  );
}

export default Question;