import React from "react";
import axios from "axios";
import ChatMessage from "@components/ChatMessage";
import InputBar from "@components/InputBar";

const msg = "Hello, World! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inipsum, distinctio iusto libero magnam ullam fugit sit commodi deleniti repellat culpa quidem laborum cumque harum est. Delectus alias consectetur it.";

class PageChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
  }

  sendMessage = (msg) => {
    this.setState({
      messages: this.state.messages.concat({ msg: msg, incoming: false })
    });
    const self = this
    axios.get("https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q=" + msg)
      .then(response => {
        const data = response.data;
        const reply = data.answers.map(elem => ({msg: elem.actions[0].expression, incoming: true}));
        self.setState({
          messages: self.state.messages.concat(reply)
        });
      })
  }

  render() {
    return (
      <div className="container">
        <div className="message-wall">
          {this.state.messages.map((message, ind) => {
            return (
              <ChatMessage incoming={message.incoming} msg={message.msg} key={"chat_" + ind}/>
            )
          })}
        </div>
        <div className="input-bar">
          <InputBar sendMessage={this.sendMessage} />
        </div>
        <style jsx>{`
      .container {
        padding: 2rem 0 4rem 0;
      }
    `}</style>
      </div>
    );
  }
}

export default PageChat;
