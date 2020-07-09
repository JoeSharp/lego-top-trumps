import React from "react";

import cards from "./cards";
import TopTrumpCard from "./TopTrumpCard";

function App() {
  return (
    <div>
      <h1>Tom's Top Trumps</h1>
      <p>These are all the cards in the game</p>
      <div className="top-trump-collection">
        {cards.map((card) => (
          <TopTrumpCard card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
