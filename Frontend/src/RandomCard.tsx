import React from "react";
import useFetchCards from "./hooks/useFetchCards";

const RandomCard: React.FC = () => {
  const { card, loading, error } = useFetchCards();

  //   console.log("card", card),
  //     console.log("loading", loading),
  //     console.log("error", error);
  if (loading) {
    return <div> Loading Card...</div>;
  }
  if (error) {
    <div>Error loading Card:{error} </div>;
  }

  return (
    <div>
      <h2>{card?.name}</h2>
      {card?.image_uris?.normal ? (
        <img src={card.image_uris.normal} alt={card.name} />
      ) : (
        <p>No Picture available</p>
      )}
    </div>
  );
  console.log("Bild-URL", card?.image_uris?.normal);
};

export default RandomCard;
