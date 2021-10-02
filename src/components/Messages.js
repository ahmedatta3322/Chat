import React from "react";
import Message from "./Message";

export default function Messages(props) {
  const { messages, currentMember } = props;
  let counter = -1;

  return (
    <ul className="Messages-list">
      {messages.map((message) => {
        counter += 1;
        return (
          <Message
            message={message}
            currentMember={currentMember}
            messages={messages}
            counter={counter}
          ></Message>
        );
      })}
    </ul>
  );
}
