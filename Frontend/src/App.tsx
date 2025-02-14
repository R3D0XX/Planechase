import React, { useState } from "react";
import Header from "./Header";
import CardList from "./CardList";
import CardForm from "./CardForm";

type Card = {
  id: number;
  name: string;
  edition: string;
  color: string;
};

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = (card: { name: string; edition: string; color: string }) => {
    const newCard = { id: Date.now(), ...card };
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <Header />
      <CardForm onAddCard={addCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;
