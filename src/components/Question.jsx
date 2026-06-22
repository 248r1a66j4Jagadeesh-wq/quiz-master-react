import "../styles/Question.css";

import Options from "./Options";

function Question({ question }) {

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

      />

    </div>

  );

}

export default Question;