function Dashboard({ cases, onMarkResolved }) {
  const resolvedCases = cases.filter((item) => item.status === "resolved");
  const escalatedCases = cases.filter((item) => item.status === "escalated");

  const renderCaseCard = (caseItem) => (
    <article key={caseItem.id} className="case-card">
      <p><strong>Message:</strong> {caseItem.message}</p>
      <p><strong>Intent:</strong> {caseItem.intent}</p>
      <p><strong>Status:</strong> {caseItem.status}</p>
      <p><strong>Timestamp:</strong> {caseItem.timestamp}</p>

      {caseItem.escalationSummary ? (
        <div className="escalation-summary">
          <p><strong>Escalation Summary</strong></p>
          <p>User Query: {caseItem.escalationSummary.userQuery}</p>
          <p>Detected Intent: {caseItem.escalationSummary.detectedIntent}</p>
          <p>Matched Question: {caseItem.escalationSummary.matchedQuestion}</p>
          <p>Reason: {caseItem.escalationSummary.reason}</p>
        </div>
      ) : null}

      {caseItem.status === "escalated" ? (
        <button type="button" onClick={() => onMarkResolved(caseItem.id)}>
          Mark Resolved
        </button>
      ) : null}
    </article>
  );

  return (
    <section className="dashboard panel">
      <h2>Staff Dashboard</h2>

      <div className="dashboard-columns">
        <div>
          <h3>Escalated</h3>
          {escalatedCases.length === 0 ? (
            <p className="empty-state">No escalated cases.</p>
          ) : (
            escalatedCases.map(renderCaseCard)
          )}
        </div>

        <div>
          <h3>Resolved</h3>
          {resolvedCases.length === 0 ? (
            <p className="empty-state">No resolved cases yet.</p>
          ) : (
            resolvedCases.map(renderCaseCard)
          )}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
