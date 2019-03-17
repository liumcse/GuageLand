import React from 'react';

const Answers = props => (
  <div>
    <li className="answer-op">
      <input
        type="radio"
        className="radio-btn"
        checked={props.answerType === props.answer}
        onChange={props.onAnswerSelected}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        
      />
      
      <label className="radio-label" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
    <style jsx>{`
    .answer-op{
      border-top: 1px solid #eee;
      color: white;
    }

    .radio-btn {
      position: absolute;
      width: auto;
      opacity: 0;
    }

    .radio-Btn,
    .radio-label {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
    }

    .radio-label {
      position: relative;
      width: 100%;
      margin: 0;
      padding: 1.5rem 2.5rem 1.5rem 5rem;
      font-size: 16px;
      line-height: 1.5;
    }

    .radio-btn ~ .radio-label:before {
      position: absolute;
      top: 20px;
      left: 38px;
      width: 28px;
      height: 28px;
      content: '';
      display: inline-block;
      vertical-align: middle;
      background: #fff;
      border: 1px solid #bbb;
      border-radius: 50%;
      transition: all 0.3s;
    }

    .radio-btn:checked ~ .radio-label:before {
      content: '';
      background: #8bc53f;
      background-size: 27px;
      border-color: #8bc53f;
    }

    `}</style>
  </div>
);

export default Answers;