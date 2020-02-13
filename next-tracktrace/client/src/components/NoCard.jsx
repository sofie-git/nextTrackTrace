import React from "react";
import { inject, observer } from "mobx-react";

const NoCard = ({ uiStore }) => {
  let cards = uiStore.cards;

  return (
    <div>
      <p>NO CARD HERE sorry</p>
      {cards.map(card => (
        <p key={card.uniqueId}>{card.uniqueId}</p>
      ))}
    </div>
  );
};

export default inject(`uiStore`)(observer(NoCard));
