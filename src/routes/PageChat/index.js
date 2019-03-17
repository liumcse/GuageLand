import React from "react";
import axios from "axios";
import ChatMessage from "@components/ChatMessage";
import InputBar from "@components/InputBar";
import InputLoader from "@components/InputLoader";

const msg =
  "Hello, World! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inipsum, distinctio iusto libero magnam ullam fugit sit commodi deleniti repellat culpa quidem laborum cumque harum est. Delectus alias consectetur it.";

class PageChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  sendMessage = msg => {
    this.setState({
      messages: this.state.messages.concat({ msg: msg, incoming: false })
    });
    const self = this;
    const timeout = setTimeout(
      () =>
        this.setState({
          messages: self.state.messages.concat({
            msg: <InputLoader />,
            incoming: true
          })
        }),
      150
    );
    axios
      .get("https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q=" + msg)
      .then(response => {
        const data = response.data;
        const reply = data.answers.map(elem => ({
          msg: elem.actions[0].expression,
          incoming: true
        }));
        self.setState({
          messages: self.state.messages.slice(0, -1).concat(reply)
        });
      });
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    return (
      <div className="container">
        <div className="message-wall">
          <ChatMessage
            incoming
            msg="Nice to meet you! I'm SUSI and I can talk. Let's talk!"
          />
          {this.state.messages.map((message, ind) => {
            return (
              <ChatMessage
                incoming={message.incoming}
                msg={message.msg}
                key={"chat_" + ind}
              />
            );
          })}
        </div>
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
        <div className="input-bar">
          <InputBar sendMessage={this.sendMessage} />
        </div>
        <style jsx>{`
          .container {
            padding: 2rem 0 4rem 0;
          }
          .message-wall {
            padding-top: 2rem;
          }
        `}</style>
      </div>
    );
  }
}

export default PageChat;
