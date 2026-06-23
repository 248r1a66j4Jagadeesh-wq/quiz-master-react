import { useState, useEffect } from "react";
import "../styles/Question.css";
import Options from "./Options";

function Question({
  question,
  currentQuestion,
  setCurrentQuestion,
  totalQuestions,
  setScore,
  setQuizFinished,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      } else {
        if (currentQuestion < totalQuestions - 1) {
          setSelectedOption("");
          setTimeLeft(30);
          setCurrentQuestion((prev) => prev + 1);
        } else {
          setQuizFinished(true);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    timeLeft,
    currentQuestion,
    totalQuestions,
    setCurrentQuestion,
    setQuizFinished,
  ]);

  function handleNext() {
    if (selectedOption === "") {
      alert("Please select an answer!");
      return;
    }

    if (selectedOption === question.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < totalQuestions - 1) {
      setSelectedOption("");
      setTimeLeft(30);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  }

  return (
    <div className="question">
      <p>
        Question {currentQuestion + 1} of {totalQuestions}
      </p>

      <h3 className="timer">
        ⏳ Time Left: {timeLeft} sec
      </h3>

      <h2>{question.question}</h2>

      <Options
        options={question.options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Question;