import React from "react";
import { withRouter } from "react-router-dom";
import Quiz from "@components/Quiz";
import quizs from "@common/quizs";

class PageQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answers: [],
      answer: "",
      answersCounter: {
        nintendo: 0,
        microsoft: 0,
        sony: 0
      },
      result: ""
    };
  }

  shuffleArray = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  componentDidMount() {
    const shuffledAnswerOptions = quizs.map(question =>
      this.shuffleArray(question.answers)
    );

    this.setState({
      question: quizs[0].question,
      answers: shuffledAnswerOptions[0]
    });
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizs[counter].question,
      answers: quizs[counter].answers,
      answer: ""
    });
  };

  setUserAnswer = answer => {
    this.setState(state => ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCounter[answer] + 1
      },
      answer: answer
    }));
  };

  handleAnswerSelected = event => {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizs.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      // done
      this.props.history.replace("/quiz/done");
    }
  };

  render() {
    //console.log(this.state.answers);
    return (
      <div>
        <Quiz
          answer={this.state.answer}
          answers={this.state.answers}
          question={this.state.question}
          questionId={this.state.questionId}
          questionTotal={quizs.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }
}

export default withRouter(PageQuiz);
