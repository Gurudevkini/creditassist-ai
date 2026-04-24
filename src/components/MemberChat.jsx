import { useState } from "react";

const QUICK_ISSUES = [
  "Why was my payment declined?",
  "How do I update autopay?",
  "I need to dispute a transaction",
  "My account is hacked",
  "How do I increase my credit limit?",
];

function MemberChat({ messages, onSendMessage }) {
  const [input, setInput] = useState("");

  const sendMessage = (text) => {
    const value = String(text || "").trim();
    if (!value) return;

    onSendMessage(value);
    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <section className="member-chat panel">
      <h2>Member Chat</h2>

      <div className="quick-actions">
        {QUICK_ISSUES.map((issue) => (
          <button
            key={issue}
            type="button"
            className="quick-btn"
            onClick={() => sendMessage(issue)}
          >
            {issue}
          </button>
        ))}
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <p className="empty-state">Start by asking a credit help question.</p>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`chat-row ${message.role}`}>
              <p className="message-role">
                {message.role === "member" ? "Member" : "CreditAssist AI"}
              </p>
              <p className="message-text">{message.text}</p>
              {message.status ? (
                <p className={`message-status ${message.status}`}>
                  Status: {message.status}
                </p>
              ) : null}
            </div>
          ))
        )}
      </div>

      <form className="chat-input-row" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Describe your issue..."
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default MemberChat;
