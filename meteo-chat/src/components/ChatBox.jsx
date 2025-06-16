import React, { useState } from "react";
import axios from "../api";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);

    const res = await axios.post("/chat", { message: input });
    
    const botMsg = { sender: "bot", text: res.data.reply };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask about the weather..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;