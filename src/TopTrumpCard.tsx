import React from "react";
import { TopTrumpType } from "./types";

interface Props {
  card: TopTrumpType;
}

const TopTrumpCard: React.FunctionComponent<Props> = ({
  card: { name, description, image, power, speed, cuteness, sillyness },
}) => {
  return (
    <div className="top-trump">
      <img className="top-trump__image" src={image} alt={`a ${name}`} />
      <div className="top-trump__name">{name}</div>
      <div className="top-trump__description">{description}</div>
      <div className="top-trump__stat">
        <label>Power: </label>
        <div>{power}</div>
      </div>
      <div className="top-trump__stat">
        <label>Speed: </label>
        <div>{speed}</div>
      </div>
      <div className="top-trump__stat">
        <label>Cuteness: </label>
        <div>{cuteness}</div>
      </div>
      <div className="top-trump__stat">
        <label>Sillyness: </label>
        <div>{sillyness}</div>
      </div>
    </div>
  );
};

export default TopTrumpCard;
