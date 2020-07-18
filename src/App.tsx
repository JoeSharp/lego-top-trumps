import React from "react";

import cards from "./cards";
import TopTrumpCard from "./TopTrumpCard";

const POINTS_TO_ALLOCATE: number = 25;
const PROPERTIES_TO_ALLOCATE: string[] = [
  "Power",
  "Speed",
  "Cuteness",
  "Silliness",
];

const scoredCards = cards.map((card) => {
  card.stats = {};
  PROPERTIES_TO_ALLOCATE.forEach((prop) => (card.stats![prop] = 1));

  for (let p = 0; p < POINTS_TO_ALLOCATE; p++) {
    let property =
      PROPERTIES_TO_ALLOCATE[
        Math.floor(Math.random() * PROPERTIES_TO_ALLOCATE.length)
      ];
    card.stats[property] += 1;
  }

  return { ...card };
});

const App: React.FunctionComponent = () => (
  <div className="top-trump-collection">
    {scoredCards.map((card) => (
      <TopTrumpCard card={card} statsOrder={PROPERTIES_TO_ALLOCATE} />
    ))}
  </div>
);

export default App;
