import React from "react";
import useFetchCards from "./hooks/useFetchCards";

type Card = {
  name: string;
  id: number;
  edition: string;
  color: string;
};

type CardListProps = {
  cards: Card[];
};

const cardList: React.FC<CardListProps> = ({ cards }) => {
  const { card, loading, error } = useFetchCards(); //! to check with clg if fetching works. delete later!
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

export default cardList;
