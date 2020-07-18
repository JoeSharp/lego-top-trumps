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
      <div className="top-trump__details">
        <div className="top-trump__name">{name}</div>
        <div className="top-trump__description">{description}</div>
        <table className="top-trump__stat">
          <tr>
            <td>Power: </td>
            <td>{power}</td>
          </tr>
          <tr>
            <td>Speed: </td>
            <td>{speed}</td>
          </tr>
          <tr>
            <td>Cuteness: </td>
            <td>{cuteness}</td>
          </tr>
          <tr>
            <td>Sillyness: </td>
            <td>{sillyness}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TopTrumpCard;
