import React, { Component } from "react";
import "./App.css";
import MessageInput from "../src/components/MessageInput";
import Messages from "../src/components/Messages";
import "./css/message.css";
import "./css/messages.css";

class App extends Component {
  today = new Date();
  state = {
    messages: [],
    member: {
      userName: "Ahmed",
      avatarLink: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    interlocutor: {
      userName: "Elixirator",
      avatarLink: "https://cdn-icons-png.flaticon.com/512/924/924874.png",
    },
    timeStamp:
      this.today.getHours() +
      ":" +
      this.today.getMinutes() +
      ":" +
      this.today.getSeconds(),
  };
  getTime() {
    const today = new Date();
    this.setState({
      timeStamp:
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    });
    return this.state.timeStamp;
  }

  handleSendMessage = (message, sender) => {
    const messages = this.state.messages;
    messages.push({
      text: message,
      member: this.state[sender],
      timeStamp: this.getTime(),
    });

    this.setState({ messages: messages });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="avatar" src={this.state.interlocutor.avatarLink}></img>
          <h1>{this.state.interlocutor.userName}</h1>
          <button
            onClick={() =>
              this.handleSendMessage("Lorem ipsum", "interlocutor")
            }
          >
            Generate Response
          </button>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <MessageInput handleSendMessage={this.handleSendMessage}></MessageInput>
      </div>
    );
  }
}

export default App;
