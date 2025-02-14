import React, { useState } from "react";

type CardFormProps = {
  onAddCard: (card: {
    name: string;
    id: number;
    edition: string;
    color: string;
  }) => void;
};

const CardForm: React.FC<CardFormProps> = ({ onAddCard }) => {
  const [name, setName] = useState("");
  const [edition, setEdition] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCard({ name, id: Date.now(), edition, color });
    setName("");
    setEdition("");
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="edition">Edition</label>
        <input
          id="edition"
          type="text"
          value={edition}
          onChange={(e) => setEdition(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button type="submit">Karte hinzufügen</button>
    </form>
  );
};

export default CardForm;
