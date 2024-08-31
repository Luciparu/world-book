import React, { useState } from "react";
import "../Styles/card.css";

const Card = ({
  name,
  image,
  popularCity,
  richestCountry,
  poorestCountry,
  smallestCountry,
  biggestCountry,
  mostPopulatedCountry,
  leastPopulatedCountry,
  population,
  location,
  area
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className=" card-front">
        <div className="card-img-div">
          {image && <img src={image} alt={name} className="card-image" />}
        </div>
        <div className="card-content">
          <h2 className="card-title">
            {name}
          </h2>
          <h4 card-text>
            Popular City : <i>{popularCity}</i>
          </h4>
          <h4 card-text>
            Richest Country : <i>{richestCountry}</i>
          </h4>
          <h4 card-text>
            Poorest Country : <i>{poorestCountry}</i>
          </h4>
          <h4 card-text>
            Smallest Country : <i>{smallestCountry}</i>
          </h4>
          <h4 card-text>
            Biggest Country : <i>{biggestCountry}</i>
          </h4>
        </div>
      </div>
      <div className="card-back">
        <div className="card-content">
        <h3 card-text>
            Most Populated Country : <i>{mostPopulatedCountry}</i>
          </h3>
          <h3 card-text>
            Least Populated Country  : <i>{leastPopulatedCountry}</i>
          </h3>
          <h3 card-text>
            Population  : <i>{population}</i>
          </h3>
          <h3 card-text>
            Size: <i>{location}</i>
          </h3>
          <h3 card-text>
            Total Area : <i>{area}</i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
