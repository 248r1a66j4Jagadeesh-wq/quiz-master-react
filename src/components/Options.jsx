import "../styles/Options.css";

function Options({ options }) {

  return (

    <div className="options">

      {

        options.map((option, index) => (

          <button

            key={index}

            className="option-btn"

          >

            {option}

          </button>

        ))

      }

    </div>

  );

}

export default Options;