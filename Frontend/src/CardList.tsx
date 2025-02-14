import React from "react";

type Card = {
  name: string;
  id: number;
  edition: string;
  color: string;
};

type CardListProps = {
  cards: Card[];
};

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div>
      <h2>Kartenliste </h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            {card.name}-{card.edition}-{card.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
