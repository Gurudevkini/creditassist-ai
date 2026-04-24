import { useState } from "react";
import MemberChat from "./components/MemberChat";
import Dashboard from "./components/Dashboard";
import { resolveQuery } from "./utils/aiEngine";

const SEED_CASES = [
  {
    id: "seed-1",
    message: "How do I update my autopay method?",
    intent: "billing",
    status: "resolved",
    timestamp: "4/24/2026, 9:00:00 AM",
    escalationSummary: null,
  },
  {
    id: "seed-2",
    message: "I was overcharged and this is terrible",
    intent: "billing",
    status: "escalated",
    timestamp: "4/24/2026, 9:10:00 AM",
    escalationSummary: {
      userQuery: "I was overcharged and this is terrible",
      detectedIntent: "billing",
      matchedQuestion: "Why was my credit card payment declined?",
      reason: "Sensitive or frustration signals detected",
    },
  },
];

function App() {
  const [messages, setMessages] = useState([]);
  const [cases, setCases] = useState(SEED_CASES);

  const handleSendMessage = (query) => {
    const now = new Date();
    const timestamp = now.toLocaleString();
    const result = resolveQuery(query);
    const caseId = `case-${now.getTime()}`;

    const memberMessage = {
      id: `member-${now.getTime()}`,
      role: "member",
      text: query,
    };

    const botMessage = {
      id: `bot-${now.getTime()}`,
      role: "assistant",
      text: result.response,
      status: result.status,
    };

    const newCase = {
      id: caseId,
      message: query,
      intent: result.intent,
      status: result.status,
      timestamp,
      escalationSummary: result.escalationSummary,
    };

    setMessages((prev) => [...prev, memberMessage, botMessage]);
    setCases((prev) => [newCase, ...prev]);
  };

  const handleMarkResolved = (caseId) => {
    setCases((prev) =>
      prev.map((item) =>
        item.id === caseId ? { ...item, status: "resolved", escalationSummary: null } : item
      )
    );
  };

  return (
    <main className="app-shell">
      <MemberChat messages={messages} onSendMessage={handleSendMessage} />
      <Dashboard cases={cases} onMarkResolved={handleMarkResolved} />
    </main>
  );
}

export default App;
