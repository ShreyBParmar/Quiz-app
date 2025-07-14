import React, { useState } from "react";

export default function FlashcardForm({ onAdd }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return;

    onAdd({ question, answer });
    setQuestion("");
    setAnswer("");
  };

  return (
    <form className="flashcard-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">➕ Add Card</button>
    </form>
  );
}