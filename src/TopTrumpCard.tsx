import React from "react";
import { TopTrumpType } from "./types";

interface Props {
  card: TopTrumpType;
  statsOrder: string[];
}

const TopTrumpCard: React.FunctionComponent<Props> = ({
  statsOrder,
  card: { name, description, image, stats = {} },
}) => {
  return (
    <div className="top-trump">
      <img className="top-trump__image" src={image} alt={`a ${name}`} />
      <div className="top-trump__details">
        <div className="top-trump__name">{name}</div>
        <div className="top-trump__description">{description}</div>
        <table className="top-trump__stat">
          {statsOrder.map((stat) => (
            <tr>
              <td>{stat}: </td>
              <td>{stats[stat]}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TopTrumpCard;
