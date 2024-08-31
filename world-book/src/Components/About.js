import React from "react";
import "../Styles/about.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="card-bg">
          <h2>About Us</h2>
          <p>
            Welcome to World🌏Book📘,   your comprehensive source for
            detailed and accurate information about countries and continents
            across the globe. Our mission is to provide a one-stop resource for
            anyone interested in exploring the rich diversity and complexity of
            the world’s nations and regions.
            <br></br><br></br>
            <span >
              ⨂ Country Profiles:Explore detailed information about each
              country, including its capital, population, form of government,
              languages, official religion, area, location, currency, and more.
              We include up-to-date and accurate data to help you understand
              each nation's unique characteristics.
            </span><br></br><br></br>
            <span>
              ⨂ Continent Overviews: Gain insights into the continents with our
              in-depth overviews. Learn about geographical features, economic
              indicators, and demographic details that shape each continent.
            </span><br></br><br></br>
            <span>
              ⨂ Educational Content: Access articles and resources that delve
              deeper into global geography, politics, and cultures.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
