import React, { useState } from "react";

export default function FlashcardList({ cards, onDelete }) {
  const [flippedId, setFlippedId] = useState(null);

  const toggleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <div className="flashcard-list">
      {cards.map((card) => (
        <div key={card.id} className="flashcard-container">
          <div
            className={`flashcard ${flippedId === card.id ? "flipped" : ""}`}
            onClick={() => toggleFlip(card.id)}
          >
            <div className="front">{card.question}</div>
            <div className="back">{card.answer}</div>
          </div>
          <button onClick={() => onDelete(card.id)}>❌ Delete</button>
        </div>
      ))}
    </div>
  );
}