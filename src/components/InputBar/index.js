import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line no-unused-vars
class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon="microphone" size="2x" />
          </div>
          <div className="input-wrapper">
            <input className="input" type="text"
              onChange={this.handleChange}
              value={this.state.message} />
          </div>
          <div className="icon-wrapper">
            <i onClick={this.handleSubmit}>
              <FontAwesomeIcon icon="paper-plane" size="2x" />
            </i>
          </div>

          <style jsx>{`
          .container {
            width: 100%;
            height: 3.5rem;
            background-color: #edefea;
            position: fixed;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
          .icon-wrapper {
            padding: 0 1rem;
          }
          .input-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .input {
            width: 100%;
            height: 1.75rem;
            border-radius: 2px;
            border: 0;
            padding: 0.5rem;
            outline: none;
          }
        `}</style>
        </div>
      </form>
    );
  }
}

export default InputBar;
