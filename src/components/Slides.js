import React, { useState } from "react";

function Slides({ slides }) {
  const [step, setStep] = useState(0);
  const restartFn = () => {
    setStep(0);
  };
  const nextFn = () => {
    setStep((prev) => prev + 1);
  };
  const prevFn = (prev) => {
    setStep((prev) => prev - 1);
  };
  const checkDisableRestartBtn = () => {
    return step === 0;
  };
  const checkDisablePrevBtn = () => {
    return step === 0;
  };
  const checkDisableNextBtn = () => {
    return step === slides.length - 1;
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => restartFn()}
          disabled={checkDisableRestartBtn()}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => prevFn()}
          disabled={checkDisablePrevBtn()}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => nextFn()}
          disabled={checkDisableNextBtn()}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[step].title}</h1>
        <p data-testid="text">{slides[step].text}</p>
      </div>
    </div>
  );
}

export default Slides;
