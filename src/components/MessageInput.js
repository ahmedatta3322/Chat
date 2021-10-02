import React, { useState } from "react";

export default function MessageInput(props) {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState({ text: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ text: "" });
    props.handleSendMessage(state.text, "member");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={state.text}
          type="text"
          placeholder="Type a message"
          autofocus="true"
          aria-label="message_content"
          id="send_input_value"
        />
        <button disabled={!state.text}>Send</button>
      </form>
    </div>
  );
}
