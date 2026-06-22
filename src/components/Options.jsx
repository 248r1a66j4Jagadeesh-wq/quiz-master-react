import "../styles/Options.css";

function Options({

  options,

  selectedOption,

  setSelectedOption

}) {

  return (

    <div className="options">

      {

        options.map((option, index) => (

          <button

            key={index}

            className={
              selectedOption === option
                ? "option-btn selected"
                : "option-btn"
            }

            onClick={() =>
              setSelectedOption(option)
            }

          >

            {option}

          </button>

        ))

      }

    </div>

  );

}

export default Options;