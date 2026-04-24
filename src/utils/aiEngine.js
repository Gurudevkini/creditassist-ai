import knowledgeBase from "../data/knowledgeBase";

const ESCALATION_KEYWORDS = [
  "fraud",
  "hacked",
  "overcharged",
  "not resolved",
  "unauthorized",
  "scam",
];

const FRUSTRATION_KEYWORDS = [
  "angry",
  "frustrated",
  "upset",
  "terrible",
  "worst",
  "this is useless",
  "still not working",
  "not helping",
];

function normalize(text) {
  return String(text || "").toLowerCase().trim();
}

function includesPhrase(text, phrase) {
  return text.includes(phrase);
}

export function findBestMatch(query) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return null;
  }

  let bestEntry = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    const score = entry.keywords.reduce((total, keyword) => {
      const normalizedKeyword = normalize(keyword);
      if (includesPhrase(normalizedQuery, normalizedKeyword)) {
        return total + 1;
      }
      return total;
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  return bestScore > 0 ? bestEntry : null;
}

export function shouldEscalate(query, matchedEntry) {
  const normalizedQuery = normalize(query);

  const hasEscalationKeyword = ESCALATION_KEYWORDS.some((word) =>
    includesPhrase(normalizedQuery, word)
  );

  const soundsFrustrated = FRUSTRATION_KEYWORDS.some((word) =>
    includesPhrase(normalizedQuery, word)
  );

  if (!matchedEntry) {
    return true;
  }

  if (hasEscalationKeyword || soundsFrustrated) {
    return true;
  }

  return false;
}

export function resolveQuery(query) {
  const matchedEntry = findBestMatch(query);
  const escalated = shouldEscalate(query, matchedEntry);

  if (!escalated && matchedEntry) {
    return {
      status: "resolved",
      intent: matchedEntry.category,
      response: matchedEntry.answer,
      escalationSummary: null,
      kbMatch: matchedEntry,
    };
  }

  return {
    status: "escalated",
    intent: matchedEntry ? matchedEntry.category : "unknown",
    response:
      "I could not fully resolve this automatically. I am escalating this case to a staff member now.",
    escalationSummary: {
      userQuery: query,
      detectedIntent: matchedEntry ? matchedEntry.category : "unknown",
      matchedQuestion: matchedEntry ? matchedEntry.question : "No strong KB match",
      reason: matchedEntry
        ? "Sensitive or frustration signals detected"
        : "No knowledge base match",
    },
    kbMatch: matchedEntry,
  };
}

export default {
  findBestMatch,
  shouldEscalate,
  resolveQuery,
};
