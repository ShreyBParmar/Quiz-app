import React, { useState } from "react";
import FlashcardForm from "./FlashcardForm";
import FlashcardList from "./FlashcardList";
import "./App.css";

export default function App() {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards([...cards, { ...card, id: Date.now() }]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="container">
      <h1>🧠 Flashcard App</h1>
      <FlashcardForm onAdd={addCard} />
      <FlashcardList cards={cards} onDelete={deleteCard} />
    </div>
  );
}