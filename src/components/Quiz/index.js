import React from 'react';
import Question from '@components/Question';
import Answers from '@components/Answers';
import QuestionCounter from '@components/QuestionCounter';

class Quiz extends React.Component {

  renderAnswers = (key) => {
    console.log(key.content);
    return (
      <Answers
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={this.props.answer}
        questionId={this.props.questionId}
        onAnswerSelected={this.props.onAnswerSelected}
      />
    );
  };

  render() {
    console.log(this.props.answers);
    return (
      <div>
        <div key={this.props.questionId}>
          <QuestionCounter counter={this.props.questionId} total={this.props.questionTotal} />
          <Question content={this.props.question} />
          <ul className="answers">
            {this.props.answers.map(this.renderAnswers)}
          </ul>
        </div>
        <style jsx>{`
          .answers {
            margin: 0;
            padding: 0;
            list-style: none;
          }
        `}</style>
      </div>
  
    );
  }
}

export default Quiz;