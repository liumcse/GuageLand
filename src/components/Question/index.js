import React from "react";

const Question = props => (
  <div>
    <h2 className="question">{props.content}</h2>
    <style>
      {`
    .question {
      margin: 0;
      padding: 0.5rem 2.5rem 1.5rem 2.5rem;
      color: white;
    }
    `}
    </style>
  </div>
);

export default Question;
