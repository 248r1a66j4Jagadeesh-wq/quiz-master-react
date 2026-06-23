import "../styles/Result.css";
function Result({

score,

highScore,

totalQuestions,

restartQuiz

}) {
  const percentage =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;

  const message =
    percentage >= 80
      ? "🌟 Excellent!"
      : percentage >= 50
      ? "👍 Good Job!"
      : "📚 Keep Practicing!";

  return (
    <div className="result">
      <h2>🎉 Quiz Completed!</h2>

      <h3>
        Your Score: {score} / {totalQuestions}
      </h3>
<h3>

🏆 Highest Score: {highScore} / {totalQuestions}

</h3>
      <h2>{message}</h2>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p>{percentage}% Completed</p>
<hr />

<h3>Quiz Statistics</h3>

<p>
Correct Answers : {score}
</p>

<p>
Wrong Answers : {totalQuestions - score}
</p>

<p>
Accuracy : {percentage}%
</p>
      <button
        className="restart-btn"
        onClick={restartQuiz}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;