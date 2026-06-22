import "./styles/App.css";

import Header from "./components/Header";

import Question from "./components/Question";

import questions from "./data/questions";

function App() {

  return (

    <div className="app">

      <Header />

      <Question
        question={questions[0]}
      />

    </div>

  );

}

export default App;