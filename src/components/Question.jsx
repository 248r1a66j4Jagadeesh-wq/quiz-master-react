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

  // Timer
  useEffect(() => {
    if (!question) return;

    if (timeLeft <= 0) {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setQuizFinished(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    question,
    timeLeft,
    currentQuestion,
    totalQuestions,
    setCurrentQuestion,
    setQuizFinished,
  ]);

  if (!question) {
    return <h2>Loading...</h2>;
  }

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an answer!");
      return;
    }

    if (selectedOption === question.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="question">
      <p>
        Question {currentQuestion + 1} of {totalQuestions}
      </p>

      <div className="progress">
        <div
          className="progress-fill"
          style={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>

      <h3 className={timeLeft <= 10 ? "timer danger" : "timer"}>
        ⏳ Time Left: {timeLeft} sec
      </h3>

      <h2>{question.question}</h2>

      <Options
        options={question.options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <button className="next-btn" onClick={handleNext}>
        {currentQuestion === totalQuestions - 1 ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
}

export default Question;