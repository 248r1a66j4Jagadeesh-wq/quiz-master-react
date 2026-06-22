import "../styles/Question.css";

function Question({ question }) {

  return (

    <div className="question">

      <h2>Question {question.id}</h2>

      <h3>{question.question}</h3>

    </div>

  );

}

export default Question;