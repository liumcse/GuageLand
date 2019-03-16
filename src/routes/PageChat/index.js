import React from "react";
import ChatMessage from "@components/ChatMessage";
import InputBar from "@components/InputBar";

const PageChat = () => (
  <div className="container">
    <div className="message-wall">
      <ChatMessage incoming />
      <ChatMessage />
      <ChatMessage incoming />
      <ChatMessage />
      <ChatMessage incoming />
      <ChatMessage />
      <ChatMessage incoming />
    </div>
    <div className="input-bar">
      <InputBar />
    </div>
    <style jsx>{`
      .container {
        padding: 2rem 0 4rem 0;
      }
    `}</style>
  </div>
);

export default PageChat;
