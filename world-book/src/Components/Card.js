import React, { useState } from "react";
import "../Styles/card.css";

const Card = ({
  name,
  image,
  head0fgovt,
  lang,
  headofstate,
  capital,
  population,
  formofgovt,
  officialrel,
  location,
  area,
  money
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
            Captial : <i>{capital}</i>
          </h4>
          <h4 card-text>
            Population : <i>{population}</i>
          </h4>
          <h4 card-text>
            Form Of Government : <i>{formofgovt}</i>
          </h4>
          <h4 card-text>
            Official Language : <i>{lang}</i>
          </h4>
          <h4 card-text>
            Head of Government : <i>{head0fgovt}</i>
          </h4>
        </div>
      </div>
      <div className="card-back">
        <div className="card-content">
        <h3 card-text>
            Head of State : <i>{headofstate}</i>
          </h3>
          <h3 card-text>
            Official Religion : <i>{officialrel}</i>
          </h3>
          <h3 card-text>
            Located in: <i>{location}</i>
          </h3>
          <h3 card-text>
            Total Area : <i>{area}</i>
          </h3>
          <h3 card-text>
            Monetary Unit: <i>{money}</i>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
