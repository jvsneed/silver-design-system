import React from "react";
import Do from "./Dos.js";
import Dont from "./Donts.js";
import "./ContrastChatExample.css";
import planeIcon from "../images/planeicon.png";

const ChatExample = () => {
  return (
    <div className="chat-text-example-container">
      <div className="example-item chat-text-example">
        <Do></Do>
        <div className="note">
          <span>
            Despite having a predominantly grey background, the chat box uses
            white to create contraste between the text and backround for better
            readability.
          </span>
        </div>
        <div className="chat-container">
          <div className="chat-header">Indigo Chat</div>
          <div className="chat-body">
            <div className="chat-message">
              <div className="chat-icon">
                <img src={planeIcon} alt="Icon" />
              </div>
              <div className="chat-bubble">Hello! How may we help you?</div>
            </div>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Enter your reply here" />
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className="example-item chat-text-example">
        <Dont></Dont>
        <div className="note">
          <span>
            Despite being a light shade of grey, the text color (black) and background color (#f4f4f4) do not pass color contrast guidelines. The chat text can be hard to read for many.
          </span>
        </div>
        <div className="chat-container">
          <div className="chat-header">Indigo Chat</div>
          <div className="chat-body">
            <div className="chat-message">
              <div className="chat-icon">
                <img src={planeIcon} alt="Icon" />
              </div>
              <div className="chat-bubble-dark">Hello! How may we help you?</div>
            </div>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Enter your reply here" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatExample;
