import React from "react";
import EntityCard from "./EntityCard/EntityCard";
import "./EntityCard/EntityCardData";
import EntitiyCardsData from "./EntityCard/EntityCardData";
function EntitiyCards() {
  return (
    <div>
      {EntitiyCardsData.map((Entity,index) => {
        return <EntityCard key={index}/>;
      })}
    </div>
  );
}

export default EntitiyCards;
