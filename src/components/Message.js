import React from "react";

export default function Message(props) {
  const { member, text, timeStamp } = props.message;
  const { currentMember, counter, messages } = props;
  const messageFromMe = member.userName === currentMember.userName;
  const className = messageFromMe
    ? "Messages-message currentMember"
    : "Messages-message";
  return (
    <div>
      {!messageFromMe && counter === messages.length - 1 ? (
        <li className={className}>
          <div className="Message-content">
            <img alt="avatar" src={member.avatarLink}></img>{" "}
            <div className="text">
              {text}
              <br></br>
              {timeStamp}
            </div>
          </div>
        </li>
      ) : (
        <li className={className}>
          <div className="Message-content">
            <div className="text">
              {text}
              <br></br>
              {timeStamp}
            </div>
          </div>
        </li>
      )}
    </div>
  );
}
