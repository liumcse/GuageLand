import React from "react";

const QuestionCounter = props => (
  <div className="question-counter">
    Question <span>{props.counter}</span> of <span>{props.total}</span>
    <style jsx>{`
      .question-counter {
        padding: 1.5rem 2.5rem 0;
        font-size: 14px;
        color: white;
        margin-top: 2.5rem;
      }
    `}</style>
  </div>
);

export default QuestionCounter;
