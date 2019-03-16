import React from "react";
import PropTypes from "prop-types";
import avatar from "@common/assets/pic/avatar.jpg";

const Avatar = () => (
  <div className="container">
    <img className="avatar" src={avatar} />
    <style jsx>{`
      .container {
        display: inline;
      }
      .avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
      }
    `}</style>
  </div>
);

const Text = props => (
  <div
    className={`container speech-bubble${props.incoming ? "-incoming" : ""}`}
  >
    Hello, World! Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
    ipsum, distinctio iusto libero magnam ullam fugit sit commodi deleniti
    repellat culpa quidem laborum cumque harum est. Delectus alias consectetur
    sit.
    <style jsx>{`
      .container {
        background-color: white;
        position: relative;
        border-radius: 0.4em;
        padding: 1rem;
        max-width: 60%;
        margin-top: -0.5rem;
      }

      .speech-bubble {
        margin-right: 2rem;
      }

      .speech-bubble-incoming {
        margin-left: 2rem;
      }

      .speech-bubble:after {
        content: "";
        position: absolute;
        right: 0;
        top: 1.2rem;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: white;
        border-right: 0;
        border-bottom: 0;
        margin-top: -10px;
        margin-right: -20px;
      }

      .speech-bubble-incoming:after {
        content: "";
        position: absolute;
        left: 0;
        top: 1.2rem;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-right-color: white;
        border-left: 0;
        border-bottom: 0;
        margin-top: -10px;
        margin-left: -20px;
      }
    `}</style>
  </div>
);

const ChatMessage = props => {
  return (
    <div className="container">
      <Avatar />
      <Text incoming={props.incoming} />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: ${props.incoming ? "row" : "row-reverse"};
          padding: 0 2rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

ChatMessage.propTypes = {
  id: PropTypes.number,
  incoming: PropTypes.bool
};

export default ChatMessage;
